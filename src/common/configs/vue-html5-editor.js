import Vue from 'vue'

import VueHtml5Editor from 'vue-html5-editor'

Vue.use(VueHtml5Editor, {
  // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
  // global component name
  name: 'vue-html5-editor',
  // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
  // if set true,will append module name to toolbar after icon
  showModuleName: false,
  // 自定义各个图标的class，默认使用的是font-awesome提供的图标
  // custom icon class of built-in modules,default using font-awesome
  icons: {
    text: 'iconfont icon-editor-text',
    color: 'iconfont icon-editor-color',
    font: 'iconfont icon-editor-font',
    align: 'iconfont icon-editor-align',
    list: 'iconfont icon-editor-list',
    link: 'iconfont icon-editor-link',
    unlink: 'iconfont icon-editor-unlink',
    tabulation: 'iconfont icon-editor-table',
    image: 'iconfont icon-editor-fileimage',
    hr: 'iconfont icon-editor-horizontal',
    eraser: 'iconfont icon-editor-remove',
    undo: 'iconfont icon-editor-undo',
    'full-screen': 'iconfont icon-editor-fullscreeen',
    info: 'iconfont icon-editor-about'
  },
  // 配置图片模块
  // config image module
  image: {
    // 文件最大体积，单位字节  max file size
    sizeLimit: 512 * 1024,
    // 上传参数,默认把图片转为base64而不上传
    // upload config,default null and convert image to base64
    upload: {
      url: null,
      headers: {},
      params: {},
      fieldName: {}
    },
    // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
    // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
    // set null to disable compression
    compress: {
      width: 1600,
      height: 1600,
      quality: 80
    },
    // 响应数据处理,最终返回图片链接
    // handle response data，return image url
    uploadHandler (responseText) {
      // default accept json data like  {ok:false,msg:'unexpected'} or {ok:true,data:'image url'}
      var json = JSON.parse(responseText)
      if (!json.ok) {
        alert(json.msg)
      } else {
        return json.data
      }
    }
  },
  // 语言，内建的有英文（en-us）和中文（zh-cn）
  // default en-us, en-us and zh-cn are built-in
  language: 'zh-cn',
  // 自定义语言
  i18n: {
    // specify your language here
    'zh-cn': {
      'align': '对齐方式',
      'image': '图片',
      'emoticon': '表情',
      'list': '列表',
      'link': '链接',
      'unlink': '去除链接',
      'table': '表格',
      'font': '文字',
      'full screen': '全屏',
      'text': '排版',
      'eraser': '格式清除',
      'info': '关于',
      'color': '颜色',
      'please enter a url': '请输入地址',
      'create link': '创建链接',
      'bold': '加粗',
      'italic': '倾斜',
      'underline': '下划线',
      'strike through': '删除线',
      'subscript': '上标',
      'superscript': '下标',
      'heading': '标题',
      'font name': '字体',
      'font size': '文字大小',
      'left justify': '左对齐',
      'center justify': '居中',
      'right justify': '右对齐',
      'ordered list': '有序列表',
      'unordered list': '无序列表',
      'fore color': '前景色',
      'background color': '背景色',
      'row count': '行数',
      'column count': '列数',
      'save': '确定',
      'upload': '上传',
      'progress': '进度',
      'unknown': '未知',
      'please wait': '请稍等',
      'error': '错误',
      'abort': '中断',
      'reset': '重置'
    }
  },
  // 隐藏不想要显示出来的模块
  // the modules you don't want
  hiddenModules: [
    'info'
  ],
  // 自定义要显示的模块，并控制顺序
  // keep only the modules you want and customize the order.
  // can be used with hiddenModules together
  visibleModules: [
    'text',
    'color',
    'font',
    'align',
    'list',
    'link',
    'unlink',
    'tabulation',
    'image',
    'emoticon',
    'hr',
    'eraser',
    'undo',
    'full-screen',
    'info'
  ],
  // 扩展模块，具体可以参考examples或查看源码
  // extended modules
  modules: [
    {
      // omit,reference to source code of build-in modules
      name: 'emoticon',
      icon: 'iconfont icon-editor-emoticon',
      i18n: 'emoticon',
      show: true,
      // init: function (editor) {
      //   console.log('init', editor)
      // },
      // handler: function (editor) {
      //   console.log('handler')
      //   editor.execCommand('insertHTML', '加入的内容')
      // },
      // destroyed: function (editor) {
      //   alert('destroyed')
      // },
      dashboard: {
        template: `
        <ul class="emoticon-list">
          <li v-for="(item, index) in emoticons" :key="index"
            @click="addTo(item)">
            <img :title="item.title" :src="item.src">
          </li>
        </ul>
        `,
        data () {
          return {
            emoticons: [
              { title: '大笑', src: 'http://img.baidu.com/hi/jx2/j_0015.gif' },
              { title: '流汗', src: 'http://img.baidu.com/hi/jx2/j_0016.gif' },
              { title: '惊讶', src: 'http://img.baidu.com/hi/jx2/j_0017.gif' },
              { title: '臭美', src: 'http://img.baidu.com/hi/jx2/j_0018.gif' },
              { title: '傻笑', src: 'http://img.baidu.com/hi/jx2/j_0019.gif' },
              { title: '抛媚眼', src: 'http://img.baidu.com/hi/jx2/j_0020.gif' },
              { title: '发怒', src: 'http://img.baidu.com/hi/jx2/j_0021.gif' },
              { title: '打酱油', src: 'http://img.baidu.com/hi/jx2/j_0022.gif' },
              { title: '俯卧撑', src: 'http://img.baidu.com/hi/jx2/j_0023.gif' },
              { title: '气愤', src: 'http://img.baidu.com/hi/jx2/j_0024.gif' },
              { title: '？', src: 'http://img.baidu.com/hi/jx2/j_0025.gif' },
              { title: '吻', src: 'http://img.baidu.com/hi/jx2/j_0026.gif' },
              { title: '怒', src: 'http://img.baidu.com/hi/jx2/j_0027.gif' },
              { title: '胜利', src: 'http://img.baidu.com/hi/jx2/j_0028.gif' }
            ]
          }
        },
        methods: {
          addTo (img) {
            this.$parent.execCommand('insertHTML', '<img src="' + img.src + '" title="' + img.title + '">')
          }
        }
      }
    }
  ]
})
