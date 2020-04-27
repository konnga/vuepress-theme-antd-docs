---
title: 快速上手
---

# 快速上手

<toc>

[[toc]]

</toc>

Wisdom UI 致力于提供给程序员**愉悦**的开发体验。

> 在开始之前，推荐先学习 [Vue](https://cn.vuejs.org) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 全家桶的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。

---

## 第一个例子

这是一个最简单的 Wisdom UI 示例。

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

<!-- <iframe
  src="https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="antd reproduction template"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/> -->

## 兼容性

Wisdom UI 支持所有的现代浏览器和 IE11+。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) 来解决浏览器兼容问题。

#### IE note

> `wisdom-ui` 不支持 IE8。

## 自行构建

## 按需加载

如果你在开发环境的控制台看到下面的提示，那么你可能使用了 `import { Button } from 'wisdom-vue-ui';` 的写法引入了 wisdom-vue-ui 下所有的模块，这会影响应用的网络性能。

```
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```

> ![控制台警告](https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png)

可以通过以下的写法来按需加载组件。

```js
import { InputTag } from 'wisdom-vue-ui';
```

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```js
import { InputTag } from 'wisdom-vue-ui';
```

插件会帮你转换成 `wisdom-vue-ui/lib/xxx` 的写法

> wisdom-vue-ui 内部处理了样式文件，无需手动引入

