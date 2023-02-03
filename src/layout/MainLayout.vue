<template>
  <v-app>
      <v-list>
        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<!--video menu-->
<script>
export default {
  data(){
    return{
      menuItems: [
          //todo передвижение по ссылке, а не по простыне
        {title: 'Главная', link: '/'},
        {title: 'О проекте'},
        {title: 'Услуги'},
        {title: 'Контакты'},
        {title: 'Диагностика', link: '/diagnostic'},
        {title: 'Вход', link: '/enter'}
      ]
    }
  }
}
</script>