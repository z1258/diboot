/*
 * Copyright (c) 2015-2020, www.dibo.ltd (service@dibo.ltd).
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * https://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package diboot.core.test.util;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.extension.service.IService;
import com.diboot.core.binding.cache.BindingCacheManager;
import com.diboot.core.entity.Dictionary;
import com.diboot.core.service.DictionaryService;
import com.diboot.core.util.BeanUtils;
import com.diboot.core.util.JSON;
import com.diboot.core.vo.DictionaryVO;
import com.sun.management.OperatingSystemMXBean;
import diboot.core.test.StartupApplication;
import diboot.core.test.binder.entity.TestUploadFile;
import diboot.core.test.binder.entity.User;
import diboot.core.test.config.SpringMvcConfig;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import java.lang.management.ManagementFactory;
import java.lang.reflect.Field;
import java.sql.Timestamp;
import java.util.*;

/**
 * BeanUtils测试
 * @author mazc@dibo.ltd
 * @version v2.0
 * @date 2019/06/02
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {SpringMvcConfig.class})
@SpringBootTest(classes = {StartupApplication.class})
public class BeanUtilsTest {
    private static OperatingSystemMXBean osmxb = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();

    @Autowired
    private DictionaryService dictionaryService;

    @Test
    public void testFields(){
        List<Field> fields = BindingCacheManager.getFields(Dictionary.class);
        Assert.assertTrue(fields.size() > 0);
        long start = System.currentTimeMillis();
        for(int i=0; i<10000; i++){
            Class<?> dict = BeanUtils.getGenericityClass(dictionaryService, 1);
        }
        long end = System.currentTimeMillis() - start;
        System.out.println(" takes "+ end);
        start = System.currentTimeMillis();
        for(int i=0; i<10000; i++){
            Class<?> dict = ((IService)dictionaryService).getEntityClass();
        }
        end = System.currentTimeMillis() - start;
        System.out.println(" takes "+ end);
    }

    @Test
    public void testCopyBean(){
        String itemName = "在职";
        Dictionary dictionary1 = new Dictionary();
        dictionary1.setType("STATUS");
        dictionary1.setItemName(itemName);

        Dictionary dictionary2 = new Dictionary();
        BeanUtils.copyProperties(dictionary1, dictionary2);
        Assert.assertTrue(dictionary2.getItemName().equals(itemName));

        Map<String, Object> map = new HashMap<>();
        map.put("type", "STATUS");
        map.put("itemName",itemName);
        map.put("isEditable", true);
        map.put("createTime", "2018-09-12 23:09");
        Dictionary dictionary3 = new Dictionary();
        BeanUtils.bindProperties(dictionary3, map);
        Assert.assertTrue(dictionary3.getItemName().equals(itemName));
        Assert.assertTrue(dictionary3.getIsEditable() == true);
        Assert.assertTrue(dictionary3.getCreateTime() != null);

        // Accept注解拷贝
        User user = new User();
        BeanUtils.copyProperties(dictionary3, user);
        Assert.assertTrue(user.getGender().equals(dictionary3.getItemName()));
        user.setGender("123");
        BeanUtils.copyProperties(dictionary3, user);
        Assert.assertTrue(user.getGender().equals("123"));
    }

    @Test
    public void testDateCopy(){
        User user2 = new User();
        Map<String, Object> map = new HashMap<>();
        map.put("username", "test");
        map.put("birthdate", "1980-10-12");
        map.put("localDatetime", new Date());
        BeanUtils.setProperty(user2, "birthdate", "1980-10-12");
        Assert.assertTrue(user2.getBirthdate() != null);
        BeanUtils.bindProperties(user2, map);
        Assert.assertTrue(user2.getLocalDatetime() != null);
        System.out.println(JSON.stringify(user2));
    }

    @Test
    public void testGetProperty(){
        Dictionary dictionary1 = new Dictionary();
        dictionary1.setId(1001L);

        // getProperty
        Object id = BeanUtils.getProperty(dictionary1, "id");
        Assert.assertTrue(id instanceof Long);
        // getStringProperty
        Assert.assertTrue(BeanUtils.getStringProperty(dictionary1, "id").equals("1001"));
    }

    @Test
    public void testCollect(){
        List<Dictionary> dictionaryList = new ArrayList<>();
        for(long id=1001; id<1005; id++){
            Dictionary dictionary1 = new Dictionary();
            dictionary1.setId(id);
            dictionaryList.add(dictionary1);
        }
        List<Long> metaIdList = BeanUtils.collectToList(dictionaryList, Dictionary::getId);
        Assert.assertTrue(metaIdList.size() == 4);
    }

    @Test
    public void testGetterSetter(){
        Assert.assertEquals(BeanUtils.convertToFieldName(Dictionary::getItemName), "itemName");
        Assert.assertEquals(BeanUtils.convertToFieldName(Dictionary::setItemName), "itemName");
    }

    @Test
    public void testBindProp(){
        List<Dictionary> dictionaryList = new ArrayList<>();
        for(long id=1001; id<1005; id++){
            Dictionary dictionary1 = new Dictionary();
            dictionary1.setId(id);
            dictionaryList.add(dictionary1);
        }
        Map<String, String> map = new HashMap<>();
        map.put("1001", "在职");
        map.put("1002", "在职");
        map.put("1003", "离职");
        BeanUtils.bindPropValueOfList(Dictionary::setItemName, dictionaryList, Dictionary::getId, map);
        Assert.assertEquals(dictionaryList.get(0).getItemName(), "在职");
        Assert.assertEquals(dictionaryList.get(2).getItemName(), "离职");

        Map<Long, String> map2 = new HashMap<>();
        map2.put(1001L, "在职");
        map2.put(1002L, "在职");
        map2.put(1003L, "离职");
        BeanUtils.bindPropValueOfList("itemName", dictionaryList, "id", map2);
        Assert.assertEquals(dictionaryList.get(0).getItemName(), "在职");
        Assert.assertEquals(dictionaryList.get(2).getItemName(), "离职");
    }

    @Test
    public void testLambdaGetterSetter(){
        Assert.assertEquals("itemName", BeanUtils.convertToFieldName(Dictionary::getItemName));
        Assert.assertEquals("itemName", BeanUtils.convertToFieldName(Dictionary::setItemName));
    }

    @Test
    public void getField(){
        Field field = BeanUtils.extractField(Dictionary.class, "id");
        TableId id = field.getAnnotation(TableId.class);
        Assert.assertTrue(id != null);
    }

    @Test
    public void testLambdaDistinct(){
        List<Dictionary> dictionaryList = new ArrayList<>();
        for(long id=1001; id<=1005; id++){
            Dictionary dictionary1 = new Dictionary();
            dictionary1.setId(id);
            dictionaryList.add(dictionary1);
        }
        for(long id=1003; id<=1007; id++){
            Dictionary dictionary1 = new Dictionary();
            dictionary1.setId(id);
            dictionaryList.add(dictionary1);
        }
        List<Dictionary> dictionaryList2 = BeanUtils.distinctByKey(dictionaryList, Dictionary::getId);
        Assert.assertEquals(dictionaryList2.size(), 7);
    }


    @Test
    public void testBuildTree(){
        List<Dictionary> dictionaryList = new ArrayList<>();
        for(long id=1001; id<=1005; id++){
            Dictionary dictionary1 = new Dictionary();
            dictionary1.setId(id);
            dictionary1.setParentId(1L);
            dictionaryList.add(dictionary1);
        }
        Dictionary parent = new Dictionary();
        parent.setId(1L);
        parent.setParentId(0L);
        dictionaryList.add(parent);

        // 正常数据
        List<DictionaryVO> list = BeanUtils.convertList(dictionaryList, DictionaryVO.class);
        list = BeanUtils.buildTree(list);
        Assert.assertEquals(list.size(), 1);
        Assert.assertEquals(list.get(0).getChildren().size(), 5);

        list = BeanUtils.convertList(dictionaryList, DictionaryVO.class);
        list = BeanUtils.buildTree(list, 0, "parentId", "children");
        Assert.assertEquals(list.size(), 1);
        Assert.assertEquals(list.get(0).getChildren().size(), 5);

        // 异常数据告警
        Dictionary dict2 = new Dictionary();
        dict2.setId(1L);
        dict2.setParentId(1L);
        dictionaryList.add(dict2);
        list = BeanUtils.convertList(dictionaryList, DictionaryVO.class);
        try{
            list = BeanUtils.buildTree(list);
            Assert.assertTrue(false);
        }
        catch (Exception e){
            Assert.assertTrue(e.getMessage().contains("请检查"));
        }
    }

    @Test
    public void testSetProperty(){
        TestUploadFile object = new TestUploadFile();
        BeanUtils.setProperty(object, "id", 123l);
        BeanUtils.setProperty(object, "storagePath", "/test/xxx");
        Assert.assertTrue(object.getStoragePath() != null);
        BeanUtils.setProperty(object, "createTime", new Timestamp(System.currentTimeMillis()));
        Assert.assertTrue(object.getCreateTime() != null);
        BeanUtils.setProperty(object, "createTime", new Date());
        Assert.assertTrue(object.getCreateTime() != null);
        BeanUtils.setProperty(object, "localDateTime", new Timestamp(System.currentTimeMillis()));
        Assert.assertTrue(object.getLocalDateTime() != null);
    }

}
