<template>
  <div style="width: 300px; height: 50px; background-color: pink;">
    <p class="vue2-style">{{name}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    name: {
      type: String,
      default: "app3"
    }
  },
  mounted() {
    console.log(this.name)
  }
}
</script>
