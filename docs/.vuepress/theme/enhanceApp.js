import store from './store';
import Antd from 'ant-design-vue';
import './styles/index.less';
// import HelloWorld from 'wisdom-ui/lib/hello-world/index'

export default ({ Vue, options, router, siteData }) => {
    Vue.mixin({ store });
    Vue.use(Antd);
    // Vue.component('w-hello-world', HelloWorld)
};
