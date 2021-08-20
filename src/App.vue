<template>
  <main class="main">
    <input
      class="main__input"
      type="text"
      placeholder="Введите слово для поиска среди анекдотов..."
      v-model="search"
    />

    <css-spinner v-if="spinner" />

    <ul v-else-if="filteredAneks.length" class="main__anek-list">
      <anek-item v-for="anek in filteredAneks" :anek="anek" :key="anek.id" />
    </ul>

    <p v-else class="main__no-aneks">
      Нет анеков содержащих "{{ search.trim().toLowerCase() }}" :`(
    </p>
  </main>
</template>

<script>
import AnekItem from "./components/anek-item.vue";
import CssSpinner from "./components/css-spinner.vue";

import { getJokes } from "./api.js";

export default {
  name: "App",

  components: {
    AnekItem,
    CssSpinner
  },

  data() {
    return {
      aneks: [],

      search: "",
      spinner: true
    };
  },

  computed: {
    filteredAneks() {
      return this.aneks.filter(anek =>
        anek.text.toLowerCase().includes(this.search.trim().toLowerCase())
      );
    }
  },

  async mounted() {
    this.aneks = await getJokes();

    this.spinner = false;
  }
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

.main__no-aneks {
  margin-top: 20px;
  font-size: 24px;
}
</style>
