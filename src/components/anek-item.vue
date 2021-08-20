<template>
  <li class="main__anek anek" :class="{ 'anek--liked': liked }">
    <p class="anek__text">{{ anek.text }}</p>

    <button class="anek__like" type="button" @click="toggleLiked">Like</button>
  </li>
</template>

<script>
export default {
  name: "AnekItem",

  props: {
    anek: {
      type: Object
    }
  },

  data() {
    return {
      liked: false
    };
  },

  methods: {
    toggleLiked() {
      this.liked = !this.liked;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.anek {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid $color-black;
  border-radius: 5px;
  padding: 18px;

  &--liked {
    background-color: $color-light-green;

    .anek__like {
      background-color: $color-light-red;

      &::before,
      &::after {
        background-color: $color-light-red;
      }
    }
  }
}

.anek__text {
  padding: 0;
  margin: 0;
  font-size: 28px;
  word-break: break-word;
}

.anek__like {
  font-size: 0;
  background-color: $color-red;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  padding: 0;
  position: relative;
  transform: rotate(-45deg);
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  &:before,
  &:after {
    position: absolute;
    content: "";
    background-color: $color-red;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  &:before {
    top: -15px;
    left: 0;
  }

  &:after {
    top: 0;
    left: 15px;
  }
}
</style>
