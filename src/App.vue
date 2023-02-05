<template>
  <div id="app">
    <v-app>
    <MainLayout/>
    <!--    <v-app>
      <v-app-bar app></v-app-bar>
      <v-main>
        <v-container>
          Hello World
        </v-container>
      </v-main>
    </v-app>-->
    <router-view/>
    </v-app>
  </div>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
export default {
  components: {MainLayout}
}
</script>

<style lang="scss">
@import "./scss/null_style";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

v-app-bar{
  height: 400px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>