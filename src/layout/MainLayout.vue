<template>
  <div class="wrapper">
    <header class="header"
            :style="['/', '/login', '/registration'].includes($router.currentRoute.path) ? 'position: absolute; top: 0' : '' ">
        <img v-if="['/', '/login', '/registration'].includes($router.currentRoute.path)" class="logo_image" src="../assets/img/logo_w.svg" @click="$router.push('/')"/>
        <img v-else class="logo_image" src="../assets/img/logo_b.svg" @click="$router.push('/')" />
        <router-link
            :style="['/', '/login', '/registration'].includes($router.currentRoute.path) ? 'color: #fff' : 'color: #000F24'"
            class="menu_item"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to">
          {{ item.title }}
        </router-link>
        <div class="change_el" v-if="!isAuth">
          <router-link
              :style="['/', '/login', '/registration'].includes($router.currentRoute.path) ? 'color: #fff' : 'color: #000F24'"
              class="menu_item_left"
              v-show="!['/login', '/registration'].includes($router.currentRoute.path)"
              to="/login"
              @click="toAuth">Вход</router-link>
          <ButtonMain
              @click="$router.push('/registration')"
              class="ml-10"
              v-show="!['/login', '/registration'].includes($router.currentRoute.path)"
              :type="['/', '/login', '/registration'].includes($router.currentRoute.path)
              ? 'secondary'
              : 'second'"
              text="РЕГИСТРАЦИЯ" />
        </div>
        <div class="change_el" v-if="isAuth">
          <a class="menu_item_left"
             :style="!['/', '/login', '/registration'].includes($router.currentRoute.path)
        ? 'color: #000F24'
        : 'color: #fff'"
             @click="$router.push('/')"
          >
            Выход
          </a>
          <v-avatar
              @click="$router.push('/profile')"
              class="ava" :color="['/', '/login', '/registration'].includes($router.currentRoute.path) ? '#fff' : '#000F24'">
            <v-icon :dark="!['/', '/login', '/registration'].includes($router.currentRoute.path)">
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </div>
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
import {mapGetters, mapMutations} from "vuex";
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
  },

  methods: {
    ...mapMutations(['CHANGE_AUTH']),
    toAuth(){
      this.$router.push('/login');
    }

  },

  data(){
    return {
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
  padding-top: 10px;
  display: flex;
  background: transparent;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.logo_image{
  margin-top: 30px;
  margin-right: 42px;
  cursor: pointer;
}
.menu_item {
  margin-top: 30px;
  margin-right: 42px;
  text-transform: uppercase;

}
.menu_item_left{
  margin-top: 30px;
  text-transform: uppercase;
  color: #fff;
}
.btn_border{
  border: 1px solid #F7DC79;
  margin-left: 42px;
}
.change_el{
  margin-top: 30px;
  margin-left: 190px;
}
.ava{
  cursor: pointer;
  margin-left: 42px;
}
.v-footer{
  background-color:#2F3C50;
  flex: 0 0 auto;
}
</style>