export default [
  {
    id: '10000',
    parentId: '0',
    displayType: 'MENU',
    displayName: '系统管理',
    resourceCode: 'system',
    status: 'A',
    updateTime: '2022-05-19 01:18:33',
    routeMeta: {},
    children: [
      {
        id: '10001',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '数据字典管理',
        routePath: '/directory',
        redirectPath: '/directory/list',
        resourceCode: 'Dictionary',
        permissionCode: 'Dictionary:read',
        meta: '{"keepAlive":true}',
        status: 'A',
        sortId: '10030',
        updateTime: '2022-05-19 03:48:05',
        routeMeta: {
          keepAlive: true
        },
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10002',
            createTime: '2022-05-19 01:18:33',
            parentId: '10001',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'Dictionary:read',
            meta: '{}',
            status: 'A',
            sortId: '6',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['Dictionary:detail']
          },
          {
            id: '10003',
            createTime: '2022-05-19 01:18:33',
            parentId: '10001',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'Dictionary:write',
            meta: '{}',
            status: 'A',
            sortId: '5',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['Dictionary:create']
          },
          {
            id: '10004',
            createTime: '2022-05-19 01:18:33',
            parentId: '10001',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'Dictionary:write,Dictionary:read',
            meta: '{}',
            status: 'A',
            sortId: '4',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['Dictionary:detail', 'Dictionary:update']
          },
          {
            id: '10005',
            createTime: '2022-05-19 01:18:33',
            parentId: '10001',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'Dictionary:write',
            meta: '{}',
            status: 'A',
            sortId: '3',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['Dictionary:delete']
          }
        ],
        permissionCodes: ['Dictionary:list']
      },
      {
        id: '10006',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'IFRAME',
        displayName: '系统用户管理',
        routePath: 'http://www.baidu.com',
        resourceCode: 'IamUser',
        permissionCode: 'IamUser:read',
        meta: '{"keepAlive":false}',
        status: 'A',
        sortId: '10029',
        updateTime: '2022-05-19 10:42:41',
        routeMeta: {
          keepAlive: false
        },
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10007',
            createTime: '2022-05-19 01:18:33',
            parentId: '10006',
            displayType: 'PERMISSION',
            displayName: '部门查看',
            resourceCode: 'orgTree',
            permissionCode: 'IamUser:read',
            meta: '{}',
            status: 'A',
            sortId: '12',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:read']
          },
          {
            id: '10008',
            createTime: '2022-05-19 01:18:33',
            parentId: '10006',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamUser:read',
            meta: '{}',
            status: 'A',
            sortId: '11',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:read']
          },
          {
            id: '10009',
            createTime: '2022-05-19 01:18:33',
            parentId: '10006',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamUser:write',
            meta: '{}',
            status: 'A',
            sortId: '10',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write']
          },
          {
            id: '10010',
            createTime: '2022-05-19 01:18:33',
            parentId: '10006',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamUser:write,IamUser:read',
            meta: '{}',
            status: 'A',
            sortId: '9',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write', 'IamUser:read']
          },
          {
            id: '10011',
            createTime: '2022-05-19 01:18:33',
            parentId: '10006',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamUser:write',
            meta: '{}',
            status: 'A',
            sortId: '8',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write']
          }
        ],
        permissionCodes: ['IamUser:read']
      },
      {
        id: '10012',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'OUTSIDE_URL',
        displayName: '角色资源管理',
        routePath: 'www',
        resourceCode: 'IamRole',
        permissionCode: 'IamRole:read',
        meta: '{}',
        status: 'A',
        sortId: '10023',
        updateTime: '2022-05-19 10:43:06',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10013',
            createTime: '2022-05-19 01:18:33',
            parentId: '10012',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamRole:read',
            meta: '{}',
            status: 'A',
            sortId: '16',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamRole:read']
          },
          {
            id: '10014',
            createTime: '2022-05-19 01:18:33',
            parentId: '10012',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamRole:write',
            meta: '{}',
            status: 'A',
            sortId: '15',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamRole:write']
          },
          {
            id: '10015',
            createTime: '2022-05-19 01:18:33',
            parentId: '10012',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamRole:write,IamRole:read,IamResourcePermission:read',
            meta: '{}',
            status: 'A',
            sortId: '14',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamRole:write', 'IamRole:read', 'IamResourcePermission:read']
          },
          {
            id: '10016',
            createTime: '2022-05-19 01:18:33',
            parentId: '10012',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamRole:write',
            meta: '{}',
            status: 'A',
            sortId: '13',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamRole:write']
          }
        ],
        permissionCodes: ['IamRole:read']
      },
      {
        id: '10017',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '资源权限管理',
        resourceCode: 'IamResourcePermission',
        permissionCode: 'IamResourcePermission:read',
        meta: '{}',
        status: 'A',
        sortId: '10017',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10018',
            createTime: '2022-05-19 01:18:33',
            parentId: '10017',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamResourcePermission:read',
            meta: '{}',
            status: 'A',
            sortId: '23',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamResourcePermission:read']
          },
          {
            id: '10019',
            createTime: '2022-05-19 01:18:33',
            parentId: '10017',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamResourcePermission:write',
            meta: '{}',
            status: 'A',
            sortId: '21',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamResourcePermission:write']
          },
          {
            id: '10020',
            createTime: '2022-05-19 01:18:33',
            parentId: '10017',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamResourcePermission:write,IamResourcePermission:read',
            meta: '{}',
            status: 'A',
            sortId: '20',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamResourcePermission:write', 'IamResourcePermission:read']
          },
          {
            id: '10021',
            createTime: '2022-05-19 01:18:33',
            parentId: '10017',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamResourcePermission:write',
            meta: '{}',
            status: 'A',
            sortId: '19',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamResourcePermission:write']
          },
          {
            id: '10022',
            createTime: '2022-05-19 01:18:33',
            parentId: '10017',
            displayType: 'PERMISSION',
            displayName: '排序',
            resourceCode: 'sort',
            permissionCode: 'IamResourcePermission:write',
            meta: '{}',
            status: 'A',
            sortId: '18',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamResourcePermission:write']
          }
        ],
        permissionCodes: ['IamResourcePermission:read']
      },
      {
        id: '10023',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '定时任务管理',
        resourceCode: 'ScheduleJob',
        permissionCode: 'ScheduleJob:read',
        meta: '{}',
        status: 'A',
        sortId: '10012',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10024',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'ScheduleJob:write',
            meta: '{}',
            status: 'A',
            sortId: '7',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:write']
          },
          {
            id: '10025',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'ScheduleJob:write,ScheduleJob:read',
            meta: '{}',
            status: 'A',
            sortId: '6',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:write', 'ScheduleJob:read']
          },
          {
            id: '10026',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'ScheduleJob:write',
            meta: '{}',
            status: 'A',
            sortId: '5',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:write']
          },
          {
            id: '10027',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'ScheduleJob:read',
            meta: '{}',
            status: 'A',
            sortId: '4',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:read']
          },
          {
            id: '10028',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '运行一次',
            resourceCode: 'executeOnce',
            permissionCode: 'ScheduleJob:write',
            meta: '{}',
            status: 'A',
            sortId: '3',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:write']
          },
          {
            id: '10029',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '日志记录',
            resourceCode: 'logList',
            permissionCode: 'ScheduleJob:read',
            meta: '{}',
            status: 'A',
            sortId: '2',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:read']
          },
          {
            id: '10030',
            createTime: '2022-05-19 01:18:33',
            parentId: '10023',
            displayType: 'PERMISSION',
            displayName: '日志删除',
            resourceCode: 'logDelete',
            permissionCode: 'ScheduleJob:write',
            meta: '{}',
            status: 'A',
            sortId: '1',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['ScheduleJob:write']
          }
        ],
        permissionCodes: ['ScheduleJob:read']
      },
      {
        id: '10031',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '消息模板管理',
        resourceCode: 'MessageTemplate',
        permissionCode: 'MessageTemplate:read',
        meta: '{}',
        status: 'A',
        sortId: '10010',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10032',
            createTime: '2022-05-19 01:18:33',
            parentId: '10031',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'MessageTemplate:read',
            meta: '{}',
            status: 'A',
            sortId: '16',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['MessageTemplate:read']
          },
          {
            id: '10033',
            createTime: '2022-05-19 01:18:33',
            parentId: '10031',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'MessageTemplate:write',
            meta: '{}',
            status: 'A',
            sortId: '15',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['MessageTemplate:write']
          },
          {
            id: '10034',
            createTime: '2022-05-19 01:18:33',
            parentId: '10031',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'MessageTemplate:write,MessageTemplate:read',
            meta: '{}',
            status: 'A',
            sortId: '14',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['MessageTemplate:write', 'MessageTemplate:read']
          },
          {
            id: '10035',
            createTime: '2022-05-19 01:18:33',
            parentId: '10031',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'MessageTemplate:write',
            meta: '{}',
            status: 'A',
            sortId: '13',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['MessageTemplate:write']
          }
        ],
        permissionCodes: ['MessageTemplate:read']
      },
      {
        id: '10036',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '消息记录管理',
        resourceCode: 'Message',
        permissionCode: 'Message:read',
        meta: '{}',
        status: 'A',
        sortId: '10009',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10037',
            createTime: '2022-05-19 01:18:33',
            parentId: '10036',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'Message:read',
            meta: '{}',
            status: 'A',
            sortId: '16',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['Message:read']
          }
        ],
        permissionCodes: ['Message:read']
      },
      {
        id: '10038',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '上传文件管理',
        resourceCode: 'UploadFile',
        permissionCode: 'UploadFile:read',
        meta: '{}',
        status: 'A',
        sortId: '10008',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10039',
            createTime: '2022-05-19 01:18:33',
            parentId: '10038',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'UploadFile:read',
            meta: '{}',
            status: 'A',
            sortId: '16',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['UploadFile:read']
          },
          {
            id: '10040',
            createTime: '2022-05-19 01:18:33',
            parentId: '10038',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'UploadFile:write,UploadFile:read',
            meta: '{}',
            status: 'A',
            sortId: '14',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['UploadFile:write', 'UploadFile:read']
          }
        ],
        permissionCodes: ['UploadFile:read']
      },
      {
        id: '10041',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '系统配置管理',
        resourceCode: 'SystemConfig',
        permissionCode: 'SystemConfig:read',
        meta: '{}',
        status: 'A',
        sortId: '10007',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10042',
            createTime: '2022-05-19 01:18:33',
            parentId: '10041',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'SystemConfig:write',
            meta: '{}',
            status: 'A',
            sortId: '13',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['SystemConfig:write']
          }
        ],
        permissionCodes: ['SystemConfig:read']
      },
      {
        id: '10043',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '操作日志查看',
        resourceCode: 'IamOperationLog',
        permissionCode: 'IamOperationLog:read',
        meta: '{}',
        status: 'A',
        sortId: '10006',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionList: [
          {
            id: '10044',
            createTime: '2022-05-19 01:18:33',
            parentId: '10043',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamOperationLog:read',
            meta: '{}',
            status: 'A',
            sortId: '16',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOperationLog:read']
          }
        ],
        permissionCodes: ['IamOperationLog:read']
      },
      {
        id: '10045',
        createTime: '2022-05-19 01:18:33',
        parentId: '10000',
        displayType: 'MENU',
        displayName: '登录日志查看',
        resourceCode: 'IamLoginTrace',
        permissionCode: 'IamLoginTrace:read',
        meta: '{}',
        status: 'A',
        sortId: '10001',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '系统管理',
        permissionCodes: ['IamLoginTrace:read']
      }
    ]
  },
  {
    id: '10046',
    parentId: '0',
    displayType: 'MENU',
    displayName: '组织机构',
    resourceCode: 'orgStructure',
    status: 'A',
    updateTime: '2022-05-19 01:18:33',
    routeMeta: {},
    children: [
      {
        id: '10047',
        createTime: '2022-05-19 01:18:33',
        parentId: '10046',
        displayType: 'MENU',
        displayName: '组织机构管理',
        resourceCode: 'IamOrg',
        permissionCode: 'IamOrg:read',
        meta: '{}',
        status: 'A',
        sortId: '10044',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '组织机构',
        permissionList: [
          {
            id: '10048',
            createTime: '2022-05-19 01:18:33',
            parentId: '10047',
            displayType: 'PERMISSION',
            displayName: '排序',
            resourceCode: 'sort',
            permissionCode: 'IamOrg:write',
            meta: '{}',
            status: 'A',
            sortId: '106',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOrg:write']
          },
          {
            id: '10049',
            createTime: '2022-05-19 01:18:33',
            parentId: '10047',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamOrg:write',
            meta: '{}',
            status: 'A',
            sortId: '105',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOrg:write']
          },
          {
            id: '10050',
            createTime: '2022-05-19 01:18:33',
            parentId: '10047',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamOrg:write,IamOrg:read',
            meta: '{}',
            status: 'A',
            sortId: '104',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOrg:write', 'IamOrg:read']
          },
          {
            id: '10051',
            createTime: '2022-05-19 01:18:33',
            parentId: '10047',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamOrg:write',
            meta: '{}',
            status: 'A',
            sortId: '103',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOrg:write']
          },
          {
            id: '10052',
            createTime: '2022-05-19 01:18:33',
            parentId: '10047',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamOrg:read',
            meta: '{}',
            status: 'A',
            sortId: '102',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamOrg:read']
          }
        ],
        permissionCodes: ['IamOrg:read']
      },
      {
        id: '10053',
        createTime: '2022-05-19 01:18:33',
        parentId: '10046',
        displayType: 'MENU',
        displayName: '岗位管理',
        resourceCode: 'IamPosition',
        permissionCode: 'IamPosition:read',
        meta: '{}',
        status: 'A',
        sortId: '10038',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '组织机构',
        permissionList: [
          {
            id: '10054',
            createTime: '2022-05-19 01:18:33',
            parentId: '10053',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamPosition:write',
            meta: '{}',
            status: 'A',
            sortId: '112',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:write']
          },
          {
            id: '10055',
            createTime: '2022-05-19 01:18:33',
            parentId: '10053',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamPosition:read',
            meta: '{}',
            status: 'A',
            sortId: '111',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:read']
          },
          {
            id: '10056',
            createTime: '2022-05-19 01:18:33',
            parentId: '10053',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamPosition:write,IamPosition:read',
            meta: '{}',
            status: 'A',
            sortId: '110',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:write', 'IamPosition:read']
          },
          {
            id: '10057',
            createTime: '2022-05-19 01:18:33',
            parentId: '10053',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamPosition:write',
            meta: '{}',
            status: 'A',
            sortId: '108',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:write']
          }
        ],
        permissionCodes: ['IamPosition:read']
      },
      {
        id: '10058',
        createTime: '2022-05-19 01:18:33',
        parentId: '10046',
        displayType: 'MENU',
        displayName: '组织人员管理',
        resourceCode: 'IamOrgUser',
        permissionCode: 'IamOrg:read,IamUser:read',
        meta: '{}',
        status: 'A',
        sortId: '10032',
        updateTime: '2022-05-19 01:18:33',
        routeMeta: {},
        parentDisplayName: '组织机构',
        permissionList: [
          {
            id: '10059',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '新建',
            resourceCode: 'create',
            permissionCode: 'IamUser:write',
            meta: '{}',
            status: 'A',
            sortId: '40',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write']
          },
          {
            id: '10060',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '更新',
            resourceCode: 'update',
            permissionCode: 'IamUser:write,IamUser:read',
            meta: '{}',
            status: 'A',
            sortId: '39',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write', 'IamUser:read']
          },
          {
            id: '10061',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '删除',
            resourceCode: 'delete',
            permissionCode: 'IamUser:write',
            meta: '{}',
            status: 'A',
            sortId: '38',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:write']
          },
          {
            id: '10062',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '详情',
            resourceCode: 'detail',
            permissionCode: 'IamUser:read',
            meta: '{}',
            status: 'A',
            sortId: '37',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUser:read']
          },
          {
            id: '10063',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '导入',
            resourceCode: 'import',
            permissionCode: 'IamUserExcel:import',
            meta: '{}',
            status: 'A',
            sortId: '36',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUserExcel:import']
          },
          {
            id: '10064',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '导出',
            resourceCode: 'export',
            permissionCode: 'IamUserExcel:export',
            meta: '{}',
            status: 'A',
            sortId: '35',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamUserExcel:export']
          },
          {
            id: '10065',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '人员岗位设置',
            resourceCode: 'position',
            permissionCode: 'IamPosition:write,IamPosition:read',
            meta: '{}',
            status: 'A',
            sortId: '34',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:write', 'IamPosition:read']
          },
          {
            id: '10066',
            createTime: '2022-05-19 01:18:33',
            parentId: '10058',
            displayType: 'PERMISSION',
            displayName: '添加岗位',
            resourceCode: 'addPosition',
            permissionCode: 'IamPosition:write',
            meta: '{}',
            status: 'A',
            sortId: '33',
            updateTime: '2022-05-19 01:18:33',
            routeMeta: {},
            permissionCodes: ['IamPosition:write']
          }
        ],
        permissionCodes: ['IamOrg:read', 'IamUser:read']
      }
    ]
  }
]
