<template>
  <div id="app">
    <v-app>
      <MainLayout/>
    </v-app>
  </div>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
import {mapActions, mapState} from "vuex";
export default {
  components: {MainLayout},
  methods: {
    ...mapActions('auth', ['refreshSession', 'toLogin']),
  },
  computed: {
    ...mapState(['isAuth'])
  },
  async mounted(){
    const refreshToken = localStorage.getItem('refresh_token')
    if(refreshToken){
        await this.refreshSession(refreshToken);
    }

    if(this.isAuth && ['/registration', '/login'].includes(this.$route.path)){
      return this.$router.replace('/results');
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
a{
  text-decoration: none;
}
</style>