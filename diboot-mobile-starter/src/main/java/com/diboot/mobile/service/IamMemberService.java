/*
 * Copyright (c) 2015-2021, www.dibo.ltd (service@dibo.ltd).
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
package com.diboot.mobile.service;

import com.diboot.core.service.BaseService;
import com.diboot.mobile.entity.IamMember;

import javax.servlet.http.HttpServletRequest;

/**
 * 移动端用户service
 *
 * @author : uu
 * @version : v2.3.1
 * @Copyright © diboot.com
 * @Date 2021/8/31  14:08
 */
public interface IamMemberService extends BaseService<IamMember> {


    /**
     * 根据token获取openId
     *
     * @param request
     * @return
     * @throws Exception
     */
    String getOpenId(HttpServletRequest request) throws Exception;

    /**
     * 根据token获取IamMember
     *
     * @param openid
     * @return
     * @throws Exception
     */
    IamMember getIamMemberByOpenid(String openid) throws Exception;
}