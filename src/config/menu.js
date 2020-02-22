const builtin = {
  settings: {
    name: '个人设置',
    icon: '',
    url: '/app/settings',
  },
};

export default {
  ...builtin,

  dashboard: {
    name: '首页',
    icon: 'switcher',
    url: '/dashboard',
  },
  'dashboard.analysis': {
    name: '分析页',
    icon: 'switcher',
    url: '/dashboard/analysis',
  },
  'dashboard.monitoring': {
    name: '监控页',
    icon: 'switcher',
    url: '/dashboard/monitoring',
  },
  'dashboard.workbench': {
    name: '工作台',
    icon: 'switcher',
    url: '/dashboard/workbench',
  },
  form: {
    name: '表单页',
    icon: 'switcher',
    url: null,
  },
  'form.basic': {
    name: '基础表单',
    icon: 'switcher',
    url: '/form/basic',
  },
  'form.step': {
    name: '分步表单',
    icon: 'switcher',
    url: '/form/step',
  },
  'form.senior': {
    name: '高级表单',
    icon: 'switcher',
    url: '/form/senior',
  },
  list: {
    name: '列表页',
    icon: 'switcher',
    url: null,
  },
  'list.table': {
    name: '查询表格',
    icon: 'switcher',
    url: '/list/table',
  },
  'list.common': {
    name: '标准列表',
    icon: 'switcher',
    url: '/list/common',
  },
  'list.card': {
    name: '卡片列表',
    icon: 'switcher',
    url: '/list/card',
  },
  'list.search': {
    name: '搜索列表',
    icon: 'switcher',
    url: null,
  },
  'list.search.article': {
    name: '搜索列表（文章）',
    icon: 'switcher',
    url: '/list/search/article',
  },
  'list.search.project': {
    name: '搜索列表（项目）',
    icon: 'switcher',
    url: '/list/search/project',
  },
  'list.search.app': {
    name: '搜索列表（应用）',
    icon: 'switcher',
    url: '/list/search/app',
  },
  detail: {
    name: '详情页',
    icon: 'switcher',
    url: null,
  },
  'detail.basic': {
    name: '基础详情页',
    icon: 'switcher',
    url: '/detail/basic',
  },
  'detail.senior': {
    name: '高级详情页',
    icon: 'switcher',
    url: '/detail/senior',
  },
  result: {
    name: '结果页',
    icon: 'switcher',
    url: null,
  },
  'result.success': {
    name: '成功页',
    icon: 'switcher',
    url: '/result/success',
  },
  'result.fail': {
    name: '失败页',
    icon: 'switcher',
    url: '/result/fail',
  },
  exception: {
    name: '异常页',
    icon: 'switcher',
    url: null,
  },
  'exception.403': {
    name: '403',
    icon: 'switcher',
    url: '/exception/403',
  },
  'exception.404': {
    name: '404',
    icon: 'switcher',
    url: '/exception/404',
  },
  'exception.500': {
    name: '500',
    icon: 'switcher',
    url: '/exception/500',
  },
  own: {
    name: '个人页',
    icon: 'switcher',
    url: null,
  },
  'own.center': {
    name: '个人中心',
    icon: 'switcher',
    url: '/own/center',
  },
  'own.setting': {
    name: '个人设置',
    icon: 'switcher',
    url: '/app/settings',
  },
  'bizcomponents': {
    name: '业务组件',
    icon: 'switcher',
    url: '/biz/components',
  },
  'bizcomponents.select': {
    name: '下拉选择',
    icon: 'switcher',
    url: '/biz/components/select',
  },
  'bizcomponents.numbercompare': {
    name: '数字比较',
    icon: 'switcher',
    url: '/biz/components/numbercompare',
  },
  'bizcomponents.picker': {
    name: '放大镜选择',
    icon: 'switcher',
    url: '/biz/components/picker',
  },
  'bizcomponents.suggestinput': {
    name: '联想输入',
    icon: 'switcher',
    url: '/biz/components/suggestinput',
  },
  'bizcomponents.cascader': {
    name: '级联选择',
    icon: 'switcher',
    url: '/biz/components/cascader',
  },
  'bizcomponents.treeselect': {
    name: '树形选择',
    icon: 'switcher',
    url: '/biz/components/treeselect',
  },
  charts: {
    name: '图表',
    icon: 'switcher',
    url: null,
  },
  'charts.linecharts': {
    name: '折线图',
    icon: 'switcher',
    url: '/charts/linecharts',
  },
  'charts.columncharts': {
    name: '柱状图',
    icon: 'switcher',
    url: '/charts/columncharts',
  },
  'charts.piecharts': {
    name: '饼图',
    icon: 'switcher',
    url: '/charts/piecharts',
  },
  'charts.pointcharts': {
    name: '点图',
    icon: 'switcher',
    url: '/charts/pointcharts',
  },
  'charts.areacharts': {
    name: '面积图',
    icon: 'switcher',
    url: '/charts/areacharts',
  },
  'charts.boxcharts': {
    name: '箱型图',
    icon: 'switcher',
    url: '/charts/boxcharts',
  },
  'charts.heatmap': {
    name: '热力图',
    icon: 'switcher',
    url: '/charts/heatmap',
  },
  'charts.dashboard': {
    name: '仪表盘',
    icon: 'switcher',
    url: '/charts/dashboard',
  },
  'charts.funnel': {
    name: '漏斗图',
    icon: 'switcher',
    url: '/charts/funnel',
  },
  'charts.map': {
    name: '地图',
    icon: 'switcher',
    url: '/charts/map',
  },
  'charts.radar': {
    name: '雷达图',
    icon: 'switcher',
    url: '/charts/radar',
  },
  'charts.facet': {
    name: '分面图',
    icon: 'switcher',
    url: '/charts/facet',
  },
  'charts.scene': {
    name: '场景',
    icon: 'switcher',
    url: '/charts/scene',
  },
  'charts.scene.template': {
    name: '柱状图+折线图',
    icon: 'switcher',
    url: '/charts/scene/template',
  },
  'charts.scene.template2': {
    name: '人群画像分析',
    icon: 'switcher',
    url: '/charts/scene/template2',
  },
  'charts.scene.template3': {
    name: '监控预警大屏-折线图',
    icon: 'switcher',
    url: '/charts/scene/template3',
  },
  'charts.scene.template4': {
    name: '可视化大屏',
    icon: 'switcher',
    url: '/charts/scene/template4',
  },

};
