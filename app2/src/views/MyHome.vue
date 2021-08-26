<template>
  <div>
    <div style="border: 1px solid red">app2</div>
    <!-- <dashboard />
    <my-home />-->
    <!-- <dynamic-my-home /> -->
    <dynamic-my-home-one />
  </div>
</template>
<script>
import { loadRemoteComponent } from '../utils/loadRemote.js';
import store from '../store';
export default {
  components: {
    // dashboard: () => import('app1/appHome'),
    // myHome: () => import('app1/myHome'),
    // dynamicMyHome: async () => {
    //   const component = await loadRemoteComponent({
    //     url: 'http://localhost:8889/dist/remoteEntry1.js',
    //     scope: 'app1',
    //     module: './myHome',
    //   });
    //   const storeOne = await loadRemoteComponent({
    //     url: 'http://localhost:8889/dist/remoteEntry1.js',
    //     scope: 'app1',
    //     module: './storeAppOne',
    //   });
    //   store.registerModule('storeAppOne', storeOne.options);
    //   return component;
    // },
    dynamicMyHomeOne: async () => {
      const [component, storeOne] = await Promise.all([
        loadRemoteComponent({
          url: 'http://localhost:9901/remoteEntry1.js',
          scope: 'app1',
          module: './myHome',
        }),
        loadRemoteComponent({
          url: 'http://localhost:9901/remoteEntry1.js',
          scope: 'app1',
          module: './storeAppOne',
        })
      ]);
      store.registerModule('storeAppOne', storeOne.options);
      return component;
    },
  },

  mounted () {
    console.log('this-app2', this);
  }
}
</script>