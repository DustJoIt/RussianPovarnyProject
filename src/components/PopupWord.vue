<template>
  <div class="popup-word" @mouseenter="showing = true" @mouseleave="showing = false">
    <transition name="slide-up">
      <div class="popup-word__invisible-padding" v-if="showing">
        <div class="popup-word__text-message">{{ popupText }}</div>
      </div>
    </transition>
    <span class="popup-word__wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ["popupText"],
  data() {
    return {
      showing: false
    };
  },
  methods: {
  }
};
</script>

<style lang="less">
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active, .slide-up-leave-active {
  transition: 0.4s;
}
.popup-word {
  display: inline-block;
  position: relative;
  &__wrapper {
    text-decoration: underline;
  }
  &__text-message {
    padding: 10px;
    border: 1px black solid;
    z-index: 100;
    width: max-content;
    max-width: 300px;
    box-sizing: border-box;
    background-color: white;
  }
  &__invisible-padding {
    position: absolute;

    top: 10px;
    left: -20px;
    padding: 20px;
  }
}
</style>
