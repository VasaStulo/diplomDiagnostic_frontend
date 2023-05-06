<template>
  <div id="app">
    <v-app>
      <MainLayout/>
    </v-app>
  </div>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
import {mapActions, mapMutations} from "vuex";
export default {
  components: {MainLayout},
  methods: {
    ...mapActions('auth', ['refreshSession', 'toLogin']),
    ...mapMutations('auth', ['CHANGE_VALUE_BY_FIELD']), // TODO: ВЫПИЛИТЬ КОСТЫЛЬ ПОКА НЕТ REFRESH
  },
  async mounted(){
    // const refreshToken = localStorage.getItem('refresh_token')
    // this.CHANGE_VALUE_BY_FIELD({field: 'password', value: 'admin',})
    // this.CHANGE_VALUE_BY_FIELD({field: 'email', value: 'admin',})
    // await this.toLogin();
    // if(refreshToken){
    //     await this.refreshSession(refreshToken);
    // }
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

::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #d9d9d9;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(149, 148, 150);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
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