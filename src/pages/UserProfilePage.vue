<template>
  <div class="wrapper">
    <div class="profile">
      <div class="window_profile">
        <div class="name_line">
          <img
              class="ava"
              src="../assets/img/ava.svg"
          >
          <p class="name">{{user && user.name.split(' ')[0]}} {{user && user.name.split(' ')[1]}}</p>
        </div>
        <div class="profile_text">
          <div v-for="(item) in menuItems" :key="item.item">
            <p class="text_profile">
              {{item.item}}
            <p/>
          </div>
        </div>
      </div>
      <div class="window_data">
          <p class="text_blue_w">
            <b>Педагогический стаж: </b>{{user && user.teaching_exp}}
          <p/>
        <p class="text_blue_w">
            <b>Должность: </b>{{user && user.position}}
        <p/>
        <p class="text_blue_w">
          <b>Категория: </b>{{user && user.category}}
        <p/>
        <p class="text_blue_w">
          <b>Уровень компетентности: </b>
        <p/>
      </div>
    </div>

    <div class="result">
      <h2 class="title_res">Мои результаты</h2>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'UserProfilePage',
  computed: {
    ...mapState('user',['user']),
    // ...mapACtions('diagnostics',['getQuestions']),

},
  data: () => ({
    menuItems:
        [
          {
            item: 'Пройти  диагностику'
          },
          {
            item: 'Мои результаты'
          },
          {
            item: 'Поддержка'
          },
        ],
      }),
}
</script>


<style scoped lang="scss">
@import '../scss/colors';

.wrapper{
  //padding: 140px 500px 80px 700px;
  color: #070034;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.window_profile {
  margin-top: 135px;
  margin-left: 120px;
  background-color: white;
  height: 35vh;
  width: 50vh;
  text-align: center;
  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.window_data{
  margin-top: 30px;
  margin-left: 120px;
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
  font-size: 20px;
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
}

.profile_text{
  padding-left: 25px;
  padding-top: 5px;
  font-size: 18px;
}

.text_blue_w{
  text-align: left;
}

.result{
  margin-top: 135px;
}

.title_res{
  font-size: 36px;
  font-weight: 500;
}

</style>
