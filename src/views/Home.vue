<template>
  <div class="main-wrap">
    <div class="book-title">
      <h1 class="book-title__h1">РУССКАЯ ПОВАРНЯ,</h1>
      <h3 class="book-title__h3">ИЛИ</h3>
      <h2 class="book-title__h2">НАСТАВЛЕНИЕ</h2>
      <h3
        class="book-title__h3"
      >О ПРИГОТОВЛЕНИИ ВСЯКОГО РОДА НАСТОЯЩИХ РУССКИХ КУШАНЬЕВ И О ЗАГОТОВЛЕНИИ ВПРОК РАЗНЫХ ПРИПАСОВ.</h3>
      <h2 class="book-title__h2 book-title__h2_light">Сочинение</h2>
      <h2 class="book-title__h2 book-title__h2_light">В. ЛЕВШИНА.</h2>
    </div>
    <div class="line_pretty"></div>
    <div class="contents">
      <h1 class="contents__title">Оглавление русской поварни.</h1>
      <v-table></v-table>
    </div>
    <div class="line_pretty"></div>
    <v-content></v-content>
  </div>
</template>

<script>
import Table from '@/components/table.vue'
import Content from '@/views/Content.vue'

export default {
  components: {
    'v-table': Table,
    'v-content': Content
  }
};
</script>

<style lang="less">
.book-title {
  margin: 120px auto 120px;
}
.book-title__h1 {
  text-align: center;
  font-size: 2.8em;
}
.book-title__h2 {
  text-align: center;
  font-size: 1.8em;
}
.book-title__h2_light {
  font-weight: 100;
}
.book-title__h3 {
  text-align: center;
  max-width: 900px;
  margin: 20px auto 20px;
  font-size: 1.3em;
}
.line_pretty {
  border-bottom: 1.3px rgba(0, 0, 0, 0.7) solid;
  margin: 60px auto 60px;
  width: 80%;
}
.contents__title {
  text-align: center;
}
</style>
