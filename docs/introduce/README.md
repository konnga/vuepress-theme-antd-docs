---
title: Wisdom UI of Vue
---
# Wisdom UI of Vue

`wisdom ui` 是基于 Wisdom 设计体系的 Vue UI 组件库，主要用于研发企业级中后台产品。

::: slot toc
[[toc]]
:::

<div class="pic-plus">
  <img width="150" src="../../assets/wc.png"/>
  <span>+</span>
  <img width="160" src="https://cn.vuejs.org/images/logo.png"/>
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
  margin: 20px auto;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 Vue 组件。
- ⚙️ 全链路开发和设计工具体系。
- 🎨 深入每个细节的主题定制能力。

## 支持环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。

## 版本

- 内测版：![Travis](https://img.shields.io/badge/wisdom--ui-0.0.1-red)

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install wisdom-vue-ui --save --registry http://nexus.wisdomcity.com.cn/repository/wisdomcity-npm-group/
```

```bash
$ yarn add wisdom-vue-ui --registry http://nexus.wisdomcity.com.cn/repository/wisdomcity-npm-group/
```

## 示例

```jsx
//  main.js
import { HelloWorld, InputTag } from 'wisdom-vue-ui'
Vue.use(HelloWorld);
Vue.use(InputTag);

// 业务页面
<template>
  <wc-input-tag
    v-model="receiptList"
    :add-tag-on-keys="[13, 32]"
    validate="isNumber"
    :limit="10" :add-tag-on-blur="true"
    placeholder="请输入票据号，回车、空格确认"
  />
  <hello-world />
</template>
<script>
export default {
  name: 'join_page',
  data () {
    return {
      receiptList: []
    }
  }
}
</script>
```

### 按需加载

> 注意：wisdom-vue-ui 暂不支持基于 ES module 的 tree shaking。

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", {
        "libraryName": "wisdom-vue-ui",
      }]
    ]
  }
  ```

  然后只需从 wisdom-vue-ui 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from 'wisdom-vue-ui';
  ```

- 手动引入

  ```jsx
  // wisdom-vue-ui 组件内部已经整合了样式，无需再手动引入样式
  import DatePicker from 'wisdom-vue-ui/lib/input-tag'; // 加载 JS
  ```

## 链接

- [首页](/)
- [组件库](/docs/react/introduce)
- [更新日志](/changelog)
- [设计规范速查手册](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88)
- [开发者说明](https://github.com/ant-design/ant-design/wiki/Development)
- [版本发布规则](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [定制主题](/docs/react/customize-theme)

## 谁在使用

- [智慧城科技](http://www.wisdomcity.com.cn/)

> 如果你的公司和产品使用了 Wisdom UI，欢迎到联系我们。
