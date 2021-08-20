<template>
  <main class="main">
    <input
      class="main__input"
      type="text"
      placeholder="Введите слово для поиска среди анекдотов..."
    />

    <ul class="main__anek-list">
      <li class="main__anek anek">
        <p class="anek__text">Text</p>

        <button class="anek__like" type="button">Like</button>
      </li>

      <li class="main__anek anek anek--liked">
        <p class="anek__text">Text</p>

        <button class="anek__like" type="button">Like</button>
      </li>

      <li class="main__anek anek">
        <p class="anek__text">Text</p>

        <button class="anek__like" type="button">Like</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";

* {
  box-sizing: border-box;
}

.main {
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.main__input {
  font-size: 24px;
  padding: 12px;
  border: 2px solid $color-black;
  border-radius: 5px;
}

.main__anek-list {
  list-style: none;
  border: 2px solid $color-black;
  border-radius: 5px;
  padding: 20px;
  margin: 0;
  margin-top: 18px;
  display: flex;
  gap: 20px;
  flex-direction: column;
}

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
      background-color: $color-dark-red;

      &::before,
      &::after {
        background-color: $color-dark-red;
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
