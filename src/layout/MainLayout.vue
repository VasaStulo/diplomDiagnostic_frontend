<template>
  <div class="wrapper">
    <header class="header">
      <img v-if="['/', '/enter'].includes($router.currentRoute.path)" class="logo_image" src="../assets/img/logo_w.svg"/>
      <img v-else class="logo_image" src="../assets/img/logo_b.svg"/>
      <router-link
          :style="['/', '/enter'].includes($router.currentRoute.path) ? 'color: #fff' : 'color: #000F24'"
          class="menu_item"
          v-for="item in menuItems"  :key="item.title" :to="item.link">{{ item.title }}
      </router-link>
      <div class="change_el" v-if="!isAuth">
        <router-link
            :style="['/', '/enter'].includes($router.currentRoute.path) ? 'color: #fff' : 'color: #000F24'"
            class="menu_item_left"
            to="/enter"
            @click="toAuth">Вход</router-link>
        <ButtonMain class="ml-10" :type="['/', '/enter'].includes($router.currentRoute.path) ? 'secondary' : 'second'" text="РЕГИСТРАЦИЯ"/>
      </div>
      <div class="change_el" v-if="isAuth">
        <a class="menu_item_left"  :style="!['/', '/enter'].includes($router.currentRoute.path)
        ? 'color: #000F24'
        : 'color: #fff'"
        @click="$router.push('/')"
        >
          Выход
        </a>
        <v-avatar class="ava" :color="['/', '/enter'].includes($router.currentRoute.path) ? '#fff' : '#000F24'">
          <v-icon :dark="!['/', '/enter'].includes($router.currentRoute.path)">
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
    toRegister(){
      // this.CHANGE_AUTH();
      this.$router.push('/enter');
    },
    toAuth(){
      // this.CHANGE_AUTH();
      this.$router.push('/login');
    }
  },

  data(){
    return{

      menuItems: [
        //todo передвижение по ссылке, а не по простыне
        {title: 'Главная', link: '/'},
        {title: 'О проекте', link: '/'},
        {title: 'Услуги', link: '/'},
        {title: 'Контакты', link: '/'},
        {title: 'Диагностика', link: '/diagnostic-preview'}
      ]
    }
  }
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
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
}
.logo_image{
  margin-top: 30px;
  margin-right: 42px;
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
  margin-left: 42px;
}
.v-footer{
  background: map-get($blue, 'dark');
  flex: 0 0 auto;
}
</style>