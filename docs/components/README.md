---
footer: MIT Licensed | Copyright © 2020-present WisdomCity Technology
footerColumn: 3
footerWrap:
- headline: 相关资源
  items:
  - title: 智慧城科技
    link: http://www.wisdomcity.com.cn
    details: 智慧社区
  - title: 绘管家
    link: http://www.huiguanjia.cn
    details: 物业综合管理云平台
- headline: 帮助
  items:
   - title: GitHub
     link: github.com
- headline: 更多产品
  items:
   - title: 绘服务
     link: huifuwu.com
     details: 高效
---

# components

组件推荐使用[按需加载](/introduce/getting-started/#按需加载)的方式。

在入口文件`main.js`中：

```js
import Vue from 'vue'
import { InputTag, HelloWorld } from 'wisdom-ui'

Vue.use(HelloWorld);
Vue.use(InputTag);
```

也可以在单文件组件中引入

```vue
<template>
  <w-hello-world />
</template>
<script>
import Vue from 'vue'
import { HelloWorld } from 'wisdom-ui'

Vue.use(HelloWorld);
</script>
```