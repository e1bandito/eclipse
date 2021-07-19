<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Список валют</router-link> |
        <router-link to="/converter">Конвертер</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchCurrencyList"]),
  },
  async mounted() {
    this.fetchCurrencyList();
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: teal;
}

#nav {
  padding: 30px;
  color: #ffffff;
  text-align: center;

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
