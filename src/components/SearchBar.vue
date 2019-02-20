<template>
  <div class="search-bar">
    <span class="search-bar__label">Поиск:</span>
    <input class="search-bar__input" type="text" @input="update" v-model="query">
    <div class="search-bar__result" v-for="(point, id) in results" :key="id">
      <router-link
        class="search-bar__result__link"
        @click.native="emitEvent(point)"
        :to="'#' + turnToSlug(point)"
      >{{ point }}</router-link>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import points_data from "@/data.js";
import { linkHandler } from "@/data.js";

export default {
  data() {
    return {
      query: "",
      results: []
    };
  },
  methods: {
    update: _.debounce(function() {
      this.results = [];
      if (this.query.trim() === "") {
        return;
      }
      this.searchFor(this.query.toLowerCase(), points_data);
    }, 300),
    searchFor: function(text, data) {
      for (var i = 0; i < data.length; i++) {
        let curr_point = data[i];
        if (
          curr_point.name
            .toLowerCase()
            .trim()
            .includes(text)
        ) {
          this.results.push(curr_point.name);
        }
        if (curr_point.children) {
          this.searchFor(text, curr_point.children);
        }
      }
    },
    turnToSlug: function(point) {
      let answ = point
        .replace(/(\.|,)/g, "")
        .replace(/ /g, "_")
        .toLowerCase();
      answ = answ[0].toUpperCase() + answ.slice(1);
      return answ;
    },
    emitEvent: function(point) {
      linkHandler.$emit("linkJump", this.turnToSlug(point));
    }
  }
};
</script>

<style lang="less">

.search-bar {
  &__label {
    display: block;
    margin: 5px 0px;
    font-size: 24px;
    font-weight: 600; 
  }
  &__input {
    width: 44%;
    padding: 5px 10px;
    font-size: 24px;
    font-weight: 500;
  }
  &__result {
    padding-left: 30px;
    margin-top: 14px;
    &__link {
      text-decoration: none;
      border-bottom: 1px black dashed;
      color: black;
      font-size: 22px;
    }
  }
}
</style>
