// 返回代码枚举
const resultCode = {
  NG_PRINCIPAL: '用户名或密码错误', // 用户名不存在
  NG_CREDENTIAL: '用户名或密码错误', // 密码错误
  NG_ACCOUNT: '用户名或密码错误', // 用户名或密码错误
  NG_USER_NOT_FOUND: '用户未找到',
  NG_UNSUPPORTED: '不支持的认证请求',
  OK: '操作成功',
  NG: '操作失败',
  NG_CAPTCHA: '验证码输入错误',
  NG_OLD_PASSWORD: '旧密码错',
  NG_POOR_PASSWORD: '密码强度不足',
  NG_RESET_EXPIRED: '密码重置链接已失效',
  NG_DATA_NOT_FOUND: '数据未找到',
  NG_DATA_ALREADY_EXISTS: '数据已存在',
  NG_UK_CONSTRAINT: '违反唯一约束',
  NG_NOT_NULL_CONSTRAINT: '非空约束',
  NG_ASSIGNED_ASSIGNEE_ERROR: '流程处理人设置错误',
  NG_PROC_DEF_KEY_NOT_FOUND: '未找到流程定义',
  NG_EMAIL_FORMAT_ERROR: '邮箱格式不正确',
  NG_MOBILE_FORMAT_ERROR: '手机格式不正确',
  NG_USER_ALREADY_EXISTS: '用户已存在',
  NG_NEW_PWD_IS_OLD: '新密码与旧密码重复',
  NG_NEW_PWD_IS_POOR: '新密码强度不够',
  NG_OLD_PWD_IS_WRONG: '旧密码错误',
  NG_ROLE_ALREADY_EXISTS: '角色已存在',
  NG_ROLE_DEPENDENT_EXISTS: '角色使用中,不允许删除',
  NG_FAULT_FORM_ALREADY_EXISTS: '故障单已存在',
  NG_EMPLOYEE_ALREADY_EXISTS: '员工已存在',
  NG_OPERATION_UNIT_ALREADY_EXISTS: '公司已存在',
  NG_ORGANIZATION_ALREADY_EXISTS: '部门已存在',
  NG_FAULT_MODEL_ALREADY_EXISTS: '故障信息已存在',
  NG_PRODUCT_ALREADY_EXISTS: '产品已存在',
  NG_AUTH_ROLE_EXISTS: '角色已被定义',
  NG_AUTH_ROLE_IN_SERVICE: '角色正在使用中',
  NG_PWD_IS_POOR: '密码太弱',
  NG_OLD_PWD_BAD: '旧密码不正确',
  NG_USER_EXISTS: '用户已添加',
  NG_BPM_ROLE_SETTLE_ERROR: '流程角色设置错误',
  NG_BPM_ROLE_EXISTS: '角色已被定义',
  NG_BPM_ROLE_IN_SERVICE: '角色正在使用中',
  NG_REMINDER_EXISTS: '预警提醒已被定义',
  NG_REMINDER_IN_SERVICE: '预警提醒正在使用中',
  NG_SUPP_EMAIL_EXISTS: '用户邮箱已存在',
  NG_SUPP_QUALIFY_REQUIRED: '至少上传一个供应商资质',
  NG_DELETE_HAS_USED: '模板已被使用，不能作废',
  NG_UPDATE_HAS_USED: '模板已被使用，不能修改',
  NG_DUPLICATED_ITEM: '重复物料,请填写新物料',
  NG_ITEM_IS_REPLACED: '本物料已有替代物料，不能再替代其它物料',
  NG_BPM_ASSIGNEE_NOT_FOUND: '流程责任处理人未设置正确',
  NG_NO_MODEL_IN_EDITING: '未找到编辑中的流程模型',
  NG_FILE_SAVE_ERROR: '导入文档保存错误',
  NG_FILE_SAVE_SERVER_ERROR: '导入文档保存服务端错误',
  NG_MAX_TIMES: '已达最大投标次数',
  NG_FINAL_TIME: '已过投标截止日期',
  NG_NOT_BID: '该招标单已开标，不可再评标',
  NG_NOT_BID2: '该招标单已过开标时间，不可再评标',
  NG_NOT_USER: '您不是该招标单的评标人',
  NG_CHECK_DATE: '合同生效日期在其他合同有效期内',
  NG_SCAN_ERROR: '行驶证识别失败,请重新上传！',
  NG_EXIST_MOBILE: '手机号已存在,请勿重复添加!',
  NG_UNIQUE_CODE: '编码已存在,请重新输入!',
  NG_EMPTY_ACTIVE_RULE: '未匹配到活动奖励规则',
  NG_MORE_ACTIVE_RULE: '匹配到多条活动奖励规则!',
  NG_ENOUGH_JD_CARD: '京东购物卡不足!',
  NG_PAYLOAD_CODE: '编码已存在！请勿重复添加！',
  NG_REPEAT_PLAT_NO: '车牌号已被注册！请确认后重新上传！',
  NG_IN_ACTIVE_TIME: '活动已过期!',

  NG_VALIDATION: '数据校验错',
  NG_UPDATE: '更新失败',
  NG_DELETE: '删除失败',
  NG_DELETE_BUILT_IN: '应用內建数据不能被删除',
  NG_DELETE_IN_USE: '使用中的配置不能被删除',
  // 文件相关
  NG_IO: 'IO异常发生',
  NG_SIZE: '文件太大',
  NG_MIME: '文件类型不符合要求',
  NG_IMG_W: '图片宽度不符合要求',
  NG_IMG_H: '图片高度不符合要求',
  NG_IMG_R: '图片比率不符合要求',
  NG_TMP_DIR: '临时目录不存在了',
  NG_CREATE: '创建失败',
  NG_NOT_EXISTS: '数据不存在',
  NG_FILE_PARSE_ERROR: '导入文档解析错误',

  //mall 相关
  AD_TYPE_NOT_EXITS: '广告类型不存在',
  AD_URL_TYPE_NOT_EXITS: '链接类型不存在',
  CODE_ALREADY_EXISTS: '数据已存在',
  ITEM_NOT_EXITS: '商品不存在',
  SPEC_NOT_EXITS: '规格不存在',

  //basicdata 相关
  NG_CREATE_CURR_CODE_EXISTS: '币种代码已存在',
  NG_CREATE_TAX_CODE_EXISTS: '税码已存在',
  NG_CREATE_TAX_RATE_NO_EXISTS: '税率编号已存在',
  NG_CREATE_UOM_EXISTS: '计量单位转换关系已存在',

  // ent 相关
  NG_CREATE_OU_CODE_EXISTS: '公司代码已存在',
  NG_CREATE_BRAND_CODE_EXISTS: '品牌代码已存在',
  NG_CREATE_LOB_CODE_EXISTS: '业务线代码已存在',
  NG_DELETE_OU_REFUSED: '该公司已关联其他公司或组织,请处理后再删除!',
  NG_MISS_DATA: '数据缺失',
  NG_OU_NOT_EXISTS: '公司不存在',
  NG_ORG_NOT_EXISTS: '组织不存在',
  NG_LOB_NOT_EXISTS: '业务线不存在',
  NG_EMP_NOT_EXISTS: '业务员不存在',
  NG_KEY_EXISTS: '数据已存在',
  NG_CREATE_OU_WH_EXISTS: '分公司与仓库关系已存在',

  // inventory 库存管理相关
  NG_CREATE_INVENTORY_EXISTS: '该仓库已配置过该商品',
  NG_CREATE_STGY_INVENTORY_EXISTS: '该库存显示规则已存在',
  NG_CREATE_STGY_INVENTORY_CHECK_EXISTS: '该库存校验规则已存在',

  //共同
  COM_SUCCESS: '操作成功',
  COM_FAILE: '操作失败',
  COM_PARAME_NULL: '参数不能为空',
  COM_PARAME_ERROR: '参数错误',
  COM_NULL: '数据为空',
  COM_REPEAT: '数据已重复存在！',
  COM_FLOW_SUCCESS: '提交成功！',
  COM_FLOW_FAILE: '提交失败！',
  COM_FLOW_NOT_ALLOW: '不允许提交！',
  COM_PAGE_REQUIRE_NOT: '请检查页面必填字段！',
  COM_NOT_EXIT: '',

  //登录
  COM_LOGIN_NOT_AUTH: '未登录或会话超时，不允许操作',

  //员工管理
  NG_EMP_EMAIL_NOT_PASS: '邮箱格式不正确',
  NG_EMP_EMAIL_EXIT: '员工邮箱已经存在',
  NG_EMP_PHONE_NOT_PASS: '手机号格式不正确',
  NG_EMP_CODE_EXIT: '员工编号已经存在',
  NG_EMP_INSERT_FAIL: '新增员工失败',
  NG_EMP_ID_NULL: '员工id为空',
  NG_EMP_UPDATE_FAIL: '用户更新失败',
  NG_EMP_ENENABLE_FAIL: '启用员工失败',
  NG_EMP_UNENABLE_FAIL: '禁用员工失败',
  NG_EMP_ALREADY_UNENABLE: '员工已经被禁用',
  NG_EMP_ALREADY_ENENABLE: '员工已经被启用',
  NG_DUPLICATE_EMP_CODE: '重复员工编码',
  NG_DUPLICATE_USER_ID: '所填用户已经有所属员工',
  NG_INVALID_USER_LOGIN_NUMBER: '用户号不存在',

  //数据权限
  DATA_POWER_ROLE_ENABLE_FAIL: '启用数据权限角色失败',
  DATA_POWER_ROLE_DISABLE_FAIL: '禁用数据权限角色失败',
  DATA_POWER_SAME_ROLE_CODE: '已有该角色编码',
  DATA_POWER_ROLE_INSERT_FAIL: '新增数据权限角色失败',
  DATA_POWER_ROLE_UPDATE_FAIL: '修改数据权限角色失败',
  DATA_POWER_ROLE_COMFIRM_DELETE: '确认是否删除',

  //部门管理
  ORG_SAME_ORGCODE: '已存在该部门编号',
  ORG_INSERT_FAIL: '新增部门失败',
  ORG_UPDATE_FAIL: '修改部门失败',
  ORG_DELETE_FAIL: '删除部门失败',

  //公司管理
  OU_SAME_OUCODE: '已存在该公司编号',
  OU_INSERT_FAIL: '新增公司失败',
  OU_UPDATE_FAIL: '修改公司失败',
  OU_DELETE_FAIL: '删除公司失败',

  //产品管理
  PRODUCT_SAME_CODE: '已存在相同的产品编码',
  PRODUCT_INSERT_FAIL: '产品新增失败',
  PRODUCT_UPDATE_FAIL: '产品修改失败',
  PRODUCT_DELETE_FAIL: '产品删除失败',

  NG_FAILED: '操作失败',
  NG_NOT_FIND_SUPP: '未找到供应商',

  NG_DATA_DELIVERY_CHANGED: '发货明细已被修改',
  NG_DATA_DELIVERY_PRODUCT_DATA: '仅接受生产日期在今日前的商品，请重新选择日期',
  NG_DATA_DELIVERY_EXP_DATA: '仅接受失效日期在今日后的商品，请重新选择日期',
  NG_DATA_DELIVERY_BEYOND: '发货数量超出订单数量',
  NG_DATA_ACCOUNT_EXIST: '存在未完成的预开票',
  NG_DATA_ACCOUNT_CHANGED: '预开票数据已被修改',
  NG_DATA_ACCOUNT_INV_CREATED: '发票数据已生成，请退出重新操作',
  NG_DATA_ACCOUNT_INV_CHANGED: '发票数据已被修改',
  NG_INVOICE_TOKEN_INVALID: 'token 无效',
  NG_INVOICE_VALID_SUCCESS: '发票验证成功',
  NG_INVOICE_TAIL_DIFFERENCE: '开票数据尾差尚未处理，请检查',
  NG_INVALID_EMP_ID: '找不到正确的员工信息',
  NG_INVALID_SUPP_ID: '找不到正确的供应商信息',
  NG_INVALID_PYO_ID: '无效的付款单',
  NG_INVALID_PPO_ID: '无效的预付款单',
  NG_NOT_ALLOW_CREATE_BU: '有审核中的首营未处理',
  NG_NOT_ALLOW_CREATE_CHG: '有审核中的变更未处理',
  NG_BPM_WEBSERVICE_ERROR: 'BPM WebService 接口请求失败',
  NG_LOGIN_TIMEOUT: '登录超时',

  NG_BU_LICENSE_FAIL: '首营保存失败',
  NG_SUPP_NAME_UNIQUE: '该供应商已创建',
  NG_SUPP_EMAIL_UNIQUE: '联系人邮箱重复',
  NG_SUPP_BU_LICENSE_UNIQUE: '该供应商首营公司重复',
  NG_SUPP_SAVE_FAIL: '供应商保存失败',
  NG_SUPP_REQUIRED_PROVINCE: '供应商所在省为必填',
  NG_SUPP_REQUIRED_CITY: '供应商所在事为必填',

  NG_DUPLICATION_MATERIAL_PRICE: '重复原料价格数据',
  NG_DUPLICATION_MATERIAL_REF_PRICE: '重复原料参考价数据',
  NG_INVALID_ITEM_ID: '无效的品项',
  NG_INVALID_UOM_RATIO: '没有定义正确的转换率',

  NG_INVALID_PURCHASE_ID: '无效的采购单',
  NG_INVALID_PURCHASE_OPER: '订单操作失败',
  ERROR: '操作失败',
  EXCEPTION: '操作异常',
  NG_SHIPPING_INSERT_EXCEPTION: '发货单保存异常',
  NG_SHIPPING_UPDATE_EXCEPTION: '发货单编辑异常',
  NG_SHIPPING_DETAILS_EMPTY: '发货单明细列表为空',
  NG_SHIPPING_ID_LIST_EMPTY: '发货单ID列表为空',
  NG_SUPP_REPORT_NULL: '承诺交期和,两者至少录入一个',
  NG_INVALID_PURCHASE_IMPORT: '订单导入失败',
};

// 国内国外
const country = {
  CHINA: '1',
  OTHER: '',
};

// 供应商状态
const suppStatus = {
  valid: 'VALID', //正式
  draft: 'DRAFT', // 潜在
  hold: 'HOLD', // 暂停合作
  ended: 'ENDED', // 终止合作
  testing: 'TESTING', // 试单
};

const alertColor = {
  1: '#F22832',
  2: '#F5A400',
  3: '#BFBFBF',
  4: '#43C006',
};

const overdueStatus = {
  overdue: 'overdue',
};

const poType = {
  f: 'F', // 成品
  rm: 'RM', // 原料
  sm: 'SM', // 物料
};

const sysSettingType = {
  EXPORT_MAX_ROWS: '导出条数设置',
  PO_TYPE_MUST_ATTACH: '订单类型回签时上传附件设置',
  SUPP_QUALIFY_WARN_DAYS: '供应商资质到期预警，提前发出天数',
  C2_NOT_ON_SSKB: '不在赶货看板中出现的中类',
};
const poStatus = {
  doing: 'DOING',
  receiving: 'RECEIVING',
};

export default {
  resultCode,
  country,
  suppStatus,
  alertColor,
  overdueStatus,
  sysSettingType,
  poType,
  poStatus,
};
