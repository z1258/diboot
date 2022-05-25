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
package com.diboot.iam.vo;

import com.diboot.core.binding.annotation.BindDict;
import com.diboot.core.binding.annotation.BindEntityList;
import com.diboot.core.binding.annotation.BindField;
import com.diboot.core.util.V;
import com.diboot.iam.config.Cons;
import com.diboot.iam.entity.IamResourcePermission;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 前端资源权限tree VO定义
 * @author uu
 * @version 2.0.0
 * @date 2022-05-24
 * Copyright © diboot.com
 */
@Getter
@Setter
@Accessors(chain = true)
public class IamResourcePermissionTreeVO extends IamResourcePermission {

    private static final long serialVersionUID = 6643651522844488124L;

    // 绑定iamResourcePermissionList
    private List<IamResourcePermission> children;
}