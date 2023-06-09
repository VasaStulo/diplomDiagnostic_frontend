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
        <div
            v-if="['/login', '/registration'].includes($router.currentRoute.path)"
            class="account_exit" @click="$router.back()">
          <v-icon color="#fff" x-medium>mdi-keyboard-backspace</v-icon>
          Назад
        </div>
        <div v-if="!isPageWithoutAuth">
          <router-link
              :class="['menu_item', {active_link: $route.path === item.to}]"
              v-for="item in menuItems"
              :key="item.title"
              :to="item.to">
            {{ item.title }}
          </router-link>
        </div>
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
        <div class="open_account" @click="changeIsAccountOpen(!isAccountOpen)">
          {{cutName}}
          <img class="open_account-icon" src="../assets/img/arrow_down.svg" alt="icon_down">
        </div>
        <div v-if="isAccountOpen" class="account_window">
          <p>
            <b>Педагогический стаж: </b>{{user && user.teaching_exp}}
          <p/>
          <p>
            <b>Должность: </b>{{user && user.position.toLowerCase()}}
          <p/>
          <p>
            <b>Категория: </b>{{user && user.category.toLowerCase()}}
          <p/>
          <p>
            <b>Уровень компетентности: </b>{{ competence || 'неизвестен'}}
          <p/>
          <div class="account_window-logout" @click="toLogout">
            <v-icon color="#0968AD" x-medium>mdi-logout</v-icon>
            Выход
          </div>
        </div>
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
import {mapActions, mapGetters, mapState} from "vuex";
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
    ...mapState('user',['user', 'competence']),
    isPageWithoutAuth(){
      return ['/', '/login', '/registration'].includes(this.$route.path);
    },

    cutName(){
      const [surname, name] = this.user?.name.split(' ');
      return `${surname || 'Неизвестен'} ${name.substr(0,1) || ''}.`
    },

    isMobile(){
      return this.$vuetify.breakpoint.width < 1300;
    },
    burgerItems(){
      if(this.isAuth){
        return [
          ...this.menuItems,
          {title: 'Результаты', to: '/results'},
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
      // блокируем скролл всего body если бургер меню открыто
      this.$root.$el.parentNode.style.overflow = this.isBurgerOpen ? 'hidden' : ''
    },
    changeIsAccountOpen(value){
      console.log('value', value)
      this.isAccountOpen = value;
    },
    async toLogout(){
      this.isBurgerOpen = false;
      this.isAccountOpen = false;
      await this.logout()
    }
  },

  data(){
    return {
      isBurgerOpen: false,
      isAccountOpen: false,
      menuItems: [
        {title: 'Главная', to: '/'},
        {title: 'Диагностика', to: '/diagnostic-preview'},
        {title: 'Мои результаты', to: '/results'},
        {title: 'Рекомендации', to: '/recommendations'},
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
  padding: 40px 120px;
  display: flex;
  background: transparent;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media(max-width: 1230px) {
    justify-content: space-between;
    padding: 40px 20px;
  }
}
.account_exit{
  color:#fff;
  font-weight: 600;
  cursor: pointer;
}

.logo_image{
  margin-right: 42px;
  cursor: pointer;
  float: left;
  padding: 0;
}
.menu_item {
  color: #000F24;
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

.open_account{
  padding: 5px 10px;
  background: #D9D9D9;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  &-icon{
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
  &:hover{
    background: #c0c0c0;
  }
}

.account_window{
  width: 480px;
  height: 261px;
  top: 100px;
  right: 100px;
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 32px 45px;
  &-logout{
    cursor: pointer;
    font-weight: 500;
    line-height: 20px;
    color: #0968AD;
  }
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

.active_link{
  font-weight: 600;
  color: #0968AD;
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