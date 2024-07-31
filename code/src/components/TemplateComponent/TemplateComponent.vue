<!--
 * @Author: hfxie
 * @Date: 2024-07-30 16:20:54
 * @LastEditors: haifeng_xie haifeng_xie@kingdee.com
 * @LastEditTime: 2024-07-31 09:40:53
 * @Description: 组件
-->
<template>
  <div class="TemplateComponent">
      
  </div>
</template>

<script>
export default {
  name: "TemplateComponent",
  data() {
    return {

    };
  },
  components: {

  },
  props: {
    title: {
      type: String,
      default: () => { return "标题"; },
    },
  },
  computed: {

  },
  methods: {
    
  },
};
</script>

<style scoped lang='less'>
@import './TemplateComponent.less';

</style>
