<template>
  <div class="table">
    <table-item v-for="(point, index) in points" :key="index" :point="point"></table-item>
  </div>
</template>

<script>
import TableItem from "./item.vue";
import points_data from '@/data.js'

export default {
  data() {
    return {
      points: points_data
    };
  },
  components: {
    "table-item": TableItem
  }
};
</script>

<style lang="less" scoped>
.table {
  max-width: 80%;
  margin: 40px auto;
}
</style>
