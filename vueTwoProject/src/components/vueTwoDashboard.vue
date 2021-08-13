<template>
  <div style="width: 300px; height: 50px; background-color: pink;">
    <div>
      <span>this is vue2.x</span>
      <span>{{`this is prop ${name}`}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      default: "default name"
    }
  }
}
</script>

<style>
</style>