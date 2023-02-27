<template>
  <div class="wrapper">
    <div class="offer">
      <div class="offer_main_text">
        <h1 class="offer_text">Добро пожаловать на страницу<br/> диагностики профессиональной<br/> компетентности педагога</h1>
      </div>
      <div>
        <p class="offer_second_text">Для того, чтобы пройти тестирование и иметь возможность<br/> просматривать результаты пройденной диагностики,<br/> необходимо зарегистрироваться на данной платформе. Это<br/> займет не больше минуты. </p>
      </div>
     <ButtonMain class="offer-btn" text="ПРОЙТИ ДИАГНОСТИКУ"/>
    </div>
    <div class="about_section">
      <div class="about">
        <p class="title_about">О ПРОЕКТЕ</p>
        <p class="text_about">Тьюторский центр обеспечивает сопровождение непрерывного педагогического<br/> образования. Отправной точкой сопровождения является осознание педагогом<br/> своих профессиональных потребностей. Данный ресурс позволяет педагогу сделать<br/> шаг в профессиональном развитии. </p>
      </div>
        <div class="images">
          <v-img
              class="ellipse_big"
            src="../assets/img/ellipse_big.png"
          ></v-img>
          <v-img
              class="ellipse_med"
              src="../assets/img/ellipse_med.png"
          ></v-img>
          <v-img
              class="ellipse_med_two"
              src="../assets/img/ellipse_med.png"
          ></v-img>
          <v-img
              class="ellipse_teacher_one"
              src="../assets/img/ellipse_teacher_one.png"
          ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonMain from "@/components/ButtonMain";
  export default {
    name: 'MainPage',
    components: {ButtonMain},
  }
</script>
<style scoped lang="scss">
@import '../scss/colors.scss';
.offer{
  background-image: url("../assets/img/offer.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 120px;
  align-items: flex-end;
}

.offer_main_text{
  font-size: 48px;
  color: map-get($yellow,'base');
  font-weight: 700;
  margin-top: 140px;
}
.offer_text{
  text-align: right;
}
.offer_second_text{
  margin-top: 20px;
  font-size: 20px;
  color: #ffffff;
  text-align: right;
}
.hr{
  width: 300px;
  background-color: red;
  height: 40px;
}

.about_section{
  height: 80vh;
  position: relative;
}

.title_about{
  margin-top: 43px;
  font-size: 36px !important;
}

.images{
  position:absolute;
  top:0;
}

.ellipse_big{
 max-width: 85%;
  position: relative;
  float: right;
  left:1300px;
  top: 20px;
}

.ellipse_med{
  position: relative;
  max-width: 30%;
  top: 25px;
  left: 320px;
}

.ellipse_med_two{
  position: relative;
  max-width: 10%;
  left: 215px;
  top: 320px;
}

.ellipse_teacher_one{
  position: relative;
  left: 815px;
  top:270px;
}

</style>