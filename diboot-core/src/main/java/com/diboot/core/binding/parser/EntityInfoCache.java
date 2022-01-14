package com.diboot.core.binding.parser;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.diboot.core.binding.cache.BindingCacheManager;
import com.diboot.core.util.ContextHelper;
import com.diboot.core.util.S;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.annotation.AnnotationUtils;

import java.io.Serializable;

/**
 * Entity相关信息缓存
 * @author JerryMa
 * @version v2.2.1
 * @date 2021/4/17
 * Copyright © diboot.com
 */
@Getter
@Setter
public class EntityInfoCache implements Serializable {
    private static final long serialVersionUID = 4102769515630377456L;

    private String tableName;

    private String entityClassName;

    /**
     * 属性信息
     */
    private PropInfo propInfo;

    /**
     * 表对应的entity类
     */
    private Class<?> entityClass;
    /**
     * service 实现类
     */
    private Class<? extends IService> serviceClass;
    /**
     * 表对应的mapper类
     */
    private Class<? extends BaseMapper> mapperClass;

    public EntityInfoCache(Class<?> entityClass, IService iService){
        this.entityClass = entityClass;
        this.entityClassName = entityClass.getName();
        // 初始化字段-列名的映射
        this.propInfo = BindingCacheManager.getPropInfoByClass(entityClass);
        // 初始化tableName
        TableName tableNameAnno = AnnotationUtils.findAnnotation(entityClass, TableName.class);
        if(tableNameAnno != null){
            this.tableName = tableNameAnno.value();
        }
        else{
            this.tableName = S.toSnakeCase(entityClass.getSimpleName());
        }
        // 设置当前service实例
        this.serviceClass = iService.getClass();
        if(iService != null){
            this.mapperClass = iService.getBaseMapper().getClass();
        }
    }

    /**
     * 设置当前service实例
     * @param iService
     */
    public void setService(IService iService){
        // 设置当前service实例
        this.serviceClass = iService.getClass();
        if(iService != null){
            this.mapperClass = iService.getBaseMapper().getClass();
        }
    }

    public IService getService(){
        return ContextHelper.getBean(this.serviceClass);
    }

    public void setBaseMapper(BaseMapper mapper) {
        this.mapperClass = mapper.getClass();
    }

    public BaseMapper getBaseMapper(){
        return ContextHelper.getBean(this.mapperClass);
    }

    /**
     * 根据列名获取字段
     * @return
     */
    public String getFieldByColumn(String columnName){
        if(this.propInfo == null){
            return null;
        }
        return this.propInfo.getFieldByColumn(columnName);
    }

    /**
     * 根据列名获取字段
     * @return
     */
    public String getColumnByField(String fieldName){
        if(this.propInfo == null){
            return null;
        }
        return this.propInfo.getColumnByField(fieldName);
    }

    /**
     * 获取ID列
     * @return
     */
    public String getIdColumn(){
        if(this.propInfo == null){
            return null;
        }
        return this.propInfo.getIdColumn();
    }

    /**
     * 获取逻辑删除标记列
     * @return
     */
    public String getDeletedColumn(){
        if(this.propInfo == null){
            return null;
        }
        return this.propInfo.getDeletedColumn();
    }

    /**
     * 是否包含某字段
     * @param column
     * @return
     */
    public boolean containsColumn(String column){
        return this.propInfo.getColumns().contains(column);
    }

}
