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