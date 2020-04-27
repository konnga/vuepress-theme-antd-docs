# `wisdom-site`

本项目是使用 vuepress 开发的文档平台，用于在线展示 Wisdom UI 组件的使用方式及相关文档。

## Usage

### 安装依赖
```shell
yarn --registry http://nexus.wisdomcity.com.cn/repository/wisdomcity-npm-group/
```

### 编写组件文档

#### 1. 新建文件


在 components 目录下创建 md 文件，每个组件的md文件需要放置在单个文件夹中，文件命名为README.md。

> 文档格式为md，更多高级写法需要了解 vuepress

#### 2. 使用目录索引

`toc` 为全局的vue组件，在组件文档中引入，可以根据md文件的格式自动生成当前文档目录索引。

```md
<toc>

[[toc]]

</toc>
```

> 最好在一级标题的下一行引入，示例请参照introduce目录。

#### 3. 配置侧边栏

侧边栏配置文件为`docs/.vuepress/config.js`，配置方式参照`sidebar`字段。

```js
'/components/': [
    {
        title: 'hello world',
        path: '/components/hello-world/',
        collapsable: false,
        sidebarDepth: 1
    },
    {
        title: 'input tag',
        path: '/components/input-tag/',
        collapsable: false,
        sidebarDepth: 1
    },
]
```

#### 4. 使用 Wisdom UI 组件

> 使用 Wisdom UI 之前请注意版本

因为 vuepress 的静态页面是通过node.js渲染的，涉及[浏览器API](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)的使用会有所限制。

1. 以展示HelloWorld为例，在`.vuepress/components`中创建`hello-world.vue`组件：

```html
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('wisdom-ui/lib/hello-world/index').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

2. 在文件md文件使用引入的组件

```md
# Hello World

<!-- 此时的组件引用名称与上一步创建的.vue文件同名 -->
<hello-world />
```

#### 5. 配置查看代码

组件的文档书写参照开源的 ant design 或 element-ui 的书写格式。

在md文件中，使用`::: details` 关键字来配置自定义容器

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
