<template>
  <div id="app">
    <v-app>
      <MainLayout/>
    </v-app>
  </div>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
import {mapActions} from "vuex";
export default {
  components: {MainLayout},
  methods: {
    ...mapActions('auth', ['refreshSession']),
  },
  async mounted(){
    const refreshToken = localStorage.get('refresh_token')
    if(refreshToken){
        await this.refreshSession(refreshToken);
    }
  }
}
</script>

<style lang="scss">
@import "./scss/null_style";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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