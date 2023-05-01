<template>
  <div class="wrapper">
    <div class="offer">
      <div class="offer_main_text">
        <h1 class="offer_text">Добро пожаловать на страницу<br/> диагностики профессиональной<br/> компетентности педагога</h1>
      </div>
      <div>
        <p class="offer_second_text">Для того, чтобы пройти тестирование и иметь возможность<br/> просматривать результаты пройденной диагностики,<br/> необходимо зарегистрироваться на данной платформе. <br/>Это займет не больше минуты. </p>
      </div>
     <ButtonMain class="offer-btn" text="ПРОЙТИ ДИАГНОСТИКУ" @click="$router.push('/enter')"/>
    </div>


    <div id="about" class="about_section">
      <p class="title_about">О ПРОЕКТЕ</p>
      <p class="text_about">Тьюторский центр обеспечивает сопровождение непрерывного педагогического<br/> образования. Отправной точкой сопровождения является осознание педагогом<br/> своих профессиональных потребностей. Данный ресурс позволяет педагогу сделать<br/> шаг в профессиональном развитии. </p>
      <div class="about_section-images">
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
            class="about_section-teacher ellipse_teacher_one"
            src="../assets/img/ellipse_teacher_one.png"
        ></v-img>
        <v-img
            class="about_section-teacher ellipse_teacher_two"
            src="../assets/img/ellipse_teacher_two.png"
        ></v-img>
        <v-img
            class="about_section-teacher ellipse_teacher_three"
            src="../assets/img/ellipse_teacher_three.png"
        ></v-img>
    </div>
    </div>

    <div class="services_section">
      <div class="service">
        <p class="title_about">УСЛУГИ</p>
        <p class="text_about_med">Тьюторский центр оказывает следующие услуги</p>
        <hr class="hr_serv"/>
        <div class="services">
          <div v-for="(item, index) in servicesItems" :key="item.src" class="service_item">
            <img
                class="icons_service"
                :src="require(`../assets/img/icons_service/icon_${index+1}.svg`)"
            >
            <p class="text_serv">
            {{item.title}}
              <p/>
          </div>
        </div>
      </div>
    </div>

    <div class="contacts">
      <div class="content_contact">
      <p class="title_contacts">КОНТАКТЫ</p>
      <hr class="hr_serv"/>
      <hr class="hr_contacts"/>
      <div class="contact_text">
        <p class="text_contact">Руководитель проекта: Тихомирова Ольга Вячеславовна</p>
        <p class="text_contact"> Написать на почту:
          <a class="text_contact" href="mailto:ask@tutor-in@yandex.ru"> tutor-in@yandex.ru </a>
        </p>
        <ButtonMain class="btn_contact" text="ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ К ТЬЮТОРУ"/>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
  import ButtonMain from "@/components/ButtonMain";
  export default {
    name: 'MainPage',
    data: () => ({servicesItems:
          [
              {
                title: 'Конструирование индивидуальных образовательных маршрутов педагогов на основе данных диагностики профессиональной компетентности'
              },
            {

                title: 'Поддержка профессиональных обучающихся сообществ учителей'},
          {

                title: 'Навигация по образовательному пространству профессионального педагогического образования'},
          {

                title: 'Сопровождение горизонтального обучения учителей'},
          {

                title: 'Создание информационных, методических и образовательных ресурсов для самообразования учителей'},
           {

                title: 'Подготовка и сопровождение муниципальных тьюторских команд профессионального развития педагога'},
          ]}),
    components: {ButtonMain},
  }
</script>
<style scoped lang="scss">
@import '../scss/colors';
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
  font-size: 56px;
  color: map-get($yellow,'base');
  font-weight: 700;
  margin-top: 180px;
}
.offer_text{
  text-align: right;
  line-height: 1.2;
}
.offer_second_text{
  margin-top: 10px;
  font-size: 22px;
  line-height: 1.3;
  color: #ffffff;
  text-align: right;
}
.hr_serv{
  border: 2px solid map-get($yellow,'base');
  margin: 0 38vw 30px;
  text-align: center;
}

.hr_contacts{
  border: 2px solid map-get($yellow,'base');
  margin: 0 40vw 30px;
  text-align: center;
}

.about_section{
  padding-top: 43px;
  height: 70vh;
  position: relative;
  text-align: center;
  &-teacher{
    position: absolute;
  }
  &-images{
    //z-index: -1; TODO: разобраться почему не работает
    position:absolute;
    top:0;
  }
}

.title_about{
  text-align: center;
  font-size: 36px !important;
  font-weight: 500;
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
  width: 186px;
  height: 186px;
  left: 815px;
  top: 260px;
}

.ellipse_teacher_two{
  width: 126px;
  height: 126px;
  left: 423px;
  top: 300px;
}

.ellipse_teacher_three{
  width: 180px;
  height: 180px;
  left: 50px;
}

.text_about_med{
  font-size: 20px !important;
  font-weight: 500;
  text-align: center;
}

.services{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  height: 300px;
  padding-right: 122px;
  padding-left: 122px;
}

.icons_service{
  width: 60px;
  height: 60px;

}

.service{
  display: flex;
  flex-direction: column;
}

.service_item{
  display: flex;
}

.text_serv{
  margin-left: 20px;
}


.contact_text{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts{
  margin-top: 50px;
  background-image: url(../assets/img/hand_phone.svg);
  height: 60vh;
  background-size: cover;
}

.title_contacts{
  text-align: center;
  font-size: 36px !important;
  color: map-get($yellow,'base');
  font-weight: 500;
}

.text_contact{
  font-size: 20px !important;
  text-align: center;
  font-weight: 500;
  color: #fff;
}

.content_contact{
  padding-top:74px ;
}

.btn_contact{
  text-align: center;
}
</style>