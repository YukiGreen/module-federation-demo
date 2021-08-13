<template>
  <div class="vue3-style">this is vue3 {{name}}{{li}}.</div>
</template>
<script>

export default {
  props: {
    name: {
      type: String,
      default: 'default value',
    }
  },
  data () {
    return {
      li: 'vue3-data-1'
    }
  },
  mounted () {
    console.log(this.name)
  }
}
</script>
<style>
div.vue3-style {
  width: auto;
  height: 50px;
  background-color: blueviolet;
}
</style>
