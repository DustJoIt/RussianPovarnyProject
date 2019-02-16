<template>
  <div class="table__element">
    <div @click="changeType">
      <span v-if="ifFolder" class="table__element__name">{{point.name}}</span>
      <!-- <router-link :to="'#' + compName">Test</router-link> -->
      <router-link @click.native="emitEvent" :to="'#' + compName" v-if="!ifFolder" 
      class="table__element__name table__element__name_link">{{point.name}}</router-link>
      <span class="table__element__button" v-if="ifFolder"> ({{ open ? '-' : '+'}})</span>
    </div>
    <ul class="table__element__children" v-if="ifFolder" v-show="open">
      <item v-for="(child, index) in point.children" :key="index" :point="child"></item>
    </ul>
  </div>
</template>

<script>
import { linkHandler } from '@/data.js'

export default {
  props: ["point"],
  name: "item",
  data() {
    return {
      open: false
    };
  },
  methods: {
    changeType: function() {
      this.open = !this.open;
    },
    emitEvent : function() {
      linkHandler.$emit('linkJump', this.compName)
    }
  },
  computed: {
    ifFolder: function() {
      return this.point.children && this.point.children.length;
    },
    compName: function() {
      let temp = this.point.name.replace(/(\.|,)/g, '')
      return temp.replace(/ /g, '_')
    }
  }
};
</script>

<style lang="less">
.table__element {
  padding-left: 10px;
  font-size: 24px;
  position: relative;

  &__children {
    margin: 5px 0px;
  }

  &__name {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &_link {
      border-bottom: 1px black dashed;
    }
  }
}
.table__element::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  left: -5px;
  top: 13px;
  background-color: black;
  border-radius: 100px;
}
</style>
