<template>
  <v-container fluid class="profile-page">
    <v-row no-gutters>
      <v-col md="4" class="profile-column">
        <div class="window_profile">
          <div class="name_line">
            <img
                class="ava"
                src="../assets/img/ava.svg"
            >
            <p class="name">{{user && user.name.split(' ')[0]}} {{user && user.name.split(' ')[1]}}</p>
          </div>
          <div class="profile_text">
            <p class="text_profile">
              <router-link to="/diagnostic-preview"> Пройти  диагностику </router-link>
            <p/>
            <div v-for="(item, index) in menuTabs" :key="item.item">
              <p @click="changeTab(index)" :class="['text_profile', {active_tab: index === currentTab}]">
                {{item}}
              <p/>
            </div>
          </div>
        </div>
        <div class="window_data">
          <p class="text_blue_w">
            <b>Педагогический стаж: </b>{{user && user.teaching_exp}}
          <p/>
          <p class="text_blue_w">
            <b>Должность: </b>{{user && user.position.toLowerCase()}}
          <p/>
          <p class="text_blue_w">
            <b>Категория: </b>{{user && user.category.toLowerCase()}}
          <p/>
          <p class="text_blue_w">
            <b>Уровень компетентности: </b>{{competence || 'неизвестен'}}
          <p/>
        </div>
      </v-col>
      <v-col>
        <MyResults v-if="currentTab === 0"/>
        <MyRecommendations v-else/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import MyResults from "@/components/MyResults";
import MyRecommendations from "@/components/MyRecommendations";
export default {
  name: 'UserProfilePage',
  computed: {
    ...mapState('user',['user', 'competence']),
},
  components: {MyResults, MyRecommendations},
  methods: {
    ...mapActions('user', ['getResults']),
    ...mapActions('diagnostic', ['setAllQuestions']),
    changeTab(tab){
      this.currentTab = tab;
    }
  },
  data: () => ({
    currentTab: 0,
    menuTabs:
        ['Мои результаты', 'Рекомендации']
      }),
  async mounted(){
    await this.setAllQuestions();
    await this.getResults();
  }
}
</script>


<style scoped lang="scss">
@import '../scss/colors';
.profile-page{
  padding: 40px 40px;
}
.window_profile {
  background-color: white;
  height: 35vh;
  width: 50vh;
  text-align: center;
  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.window_data{
  margin-top: 30px;
  margin-bottom: 60px;
  padding-left: 20px;
  padding-top: 30px;
  background-color: map-get($blue, 'light');
  height: 27vh;
  width: 50vh;
  text-align: center;
  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.name{
  font-size: 18px;
  font-weight: 700;
  padding-top: 15px;
  padding-left: 20px;
}

.ava{
  width: 48px;
  height: 48px;
}
.name_line{
  display: flex;
  padding: 29px 0 0 30px;
}

.text_profile{
  padding-left: 70px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
}

.text_profile a{
  color: #000;
}

.active_tab{
  font-weight: 500;
  color: #0968AD;
}

.profile_text{
  padding-left: 25px;
  padding-top: 5px;
  font-size: 18px;
}

.text_blue_w{
  text-align: left;
}

</style>
