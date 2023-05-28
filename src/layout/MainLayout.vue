<template>
  <div class="wrapper">
    <div v-if="isBurgerOpen" class="burger-content">
      <v-btn @click="changeBurger" class="burger-close" icon :ripple="false" color="white">
        <v-icon x-large>mdi-close</v-icon>
      </v-btn>
      <div class="burger-items">
        <p class="burger-item"  v-for="item in burgerItems"
           :key="item.title"
           @click="item.click? item.click() && changeBurger() : changeBurger();
           $router.push(item.to)">
          {{ item.title }}
        </p>
      </div>
    </div>
    <header class="header"
            :style="isPageWithoutAuth ? 'position: absolute; top: 0' : '' ">
      <div class="logo">
        <img v-if="isPageWithoutAuth" class="logo_image" src="../assets/img/logo_w.svg" @click="$router.push('/')"/>
        <img v-else class="logo_image" src="../assets/img/logo_b.svg" @click="$router.push('/')" />
      </div>
      <div class="pc-header">
        <router-link
            :style="isPageWithoutAuth ? 'color: #fff' : 'color: #000F24'"
            class="menu_item"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to">
          {{ item.title }}
        </router-link>
        <div class="change_el" v-if="!isAuth">
          <router-link
              :style="isPageWithoutAuth ? 'color: #fff' : 'color: #000F24'"
              class="menu_item_left"
              v-if="!['/login', '/registration'].includes($router.currentRoute.path)"
              to="/login"
              @click="toAuth">Вход</router-link>
          <ButtonMain
              @click="$router.push('/registration')"
              class="ml-10"
              v-if="!['/login', '/registration'].includes($router.currentRoute.path)"
              :type="isPageWithoutAuth
              ? 'secondary'
              : 'second'"
              text="РЕГИСТРАЦИЯ" />
        </div>
      </div>
      <div class="change_el" v-if="isAuth && !isMobile">
        <a class="menu_item_left"
           :style="!isPageWithoutAuth
      ? 'color: #000F24'
      : 'color: #fff'"
           @click="logout()"
        >
          Выход
        </a>
        <v-avatar
            @click="$router.push('/profile')"
            class="ava" :color="isPageWithoutAuth ? '#fff' : '#000F24'">
          <v-icon :dark="!isPageWithoutAuth">
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </div>
      <v-btn @click="changeBurger" class="burger-menu" icon :ripple="false" :color="isPageWithoutAuth ? 'white' : '000F24'">
        <v-icon x-large>mdi-view-headline</v-icon>
      </v-btn>
      </header>
    <main class="main">
      <router-view/>
    </main>
    <v-footer padless>
      <v-row
          justify="center"
          no-gutters
      >
        <v-col
            class="py-4 text-center white--text"
            cols="12"
        > Все права защищены © Тьюторский центр 2020-2023<br>
          Developed by E. Tikhomirov, V. Batogova
        </v-col>
      </v-row>
    </v-footer>
  </div>

</template>


<script>
import {mapActions, mapGetters} from "vuex";
import ButtonMain from "@/components/ButtonMain";
export default {
  name: 'MainLayout',
  //РЕГИСТРАЦИЯ КОМПОНЕНТА
  components:{
    ButtonMain
  },
  //чтобы получать геттеры нам нужны компьютет свойства
  computed:{
    ...mapGetters(['isAuth']),
    isPageWithoutAuth(){
      return ['/', '/login', '/registration'].includes(this.$route.path);
    },

    isMobile(){
      return this.$vuetify.breakpoint.width < 1230;
    },
    burgerItems(){
      if(this.isAuth){
        return [
          ...this.menuItems,
          {title: 'Профиль', to: '/profile'},
          {title: 'Выход', click: this.logout},
        ]
      }
      return this.menuItems;
    },
  },

  methods: {
    ...mapActions('auth', ['logout']),
    toAuth(){
      this.$router.push('/login');
    },
    changeBurger(){
      this.isBurgerOpen = !this.isBurgerOpen;
    },

  },

  data(){
    return {
      isBurgerOpen: false,
      menuItems: [
        //todo передвижение по ссылке, а не по простыне
        {title: 'Главная', to: '/'},
        {title: 'О проекте', to: {
            name: 'MainPage',
            hash: '#about'}},
        {title: 'Услуги', to: {
            name: 'MainPage',
            hash: '#service'}},
        {title: 'Контакты', to: {
            name: 'MainPage',
            hash: '#contacts'}},
        {title: 'Диагностика', to: '/diagnostic-preview'}
      ]
    }
  },

}
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';
.main{
  flex: 1 0 auto;
}

.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F0F0F0;
}
.header{
  z-index: 3;
  padding: 40px 20px;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media(max-width: 1230px) {
    justify-content: space-between;
    padding: 40px 20px;
  }
}
.logo_image{
  margin-right: 42px;
  cursor: pointer;
}
.menu_item {
  margin-right: 42px;
  text-transform: uppercase;
}
.menu_item_left{
  text-transform: uppercase;
  color: #fff;
}
.btn_border{
  border: 1px solid #F7DC79;
  margin-left: 42px;
}
.change_el{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ava{
  cursor: pointer;
  margin-left: 42px;
}

.pc-header{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media(max-width: 1230px){
    display: none;
  }
}
.burger-menu{
  display: none;
  @media(max-width: 1230px){
    display: block;
  }
}

.burger-close{
  position: absolute;
  right: 20px;
}

.burger-content{
  position: absolute;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #2A293A;
  z-index: 100;
}

.burger-items{
  position: absolute;
  top: 95px;
  right: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.burger-item{
  color: #fff;
  cursor: pointer;
}

.v-footer{
  background-color:#2F3C50;
  flex: 0 0 auto;
}
</style>