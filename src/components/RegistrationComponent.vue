<template>
  <div class="wrapper">
    <div class="window">
      <div class="info_one">
        <p class="title_welcome">Добро пожаловать!</p>
        <p class="theme">О Вас</p>
        <InputText placeholder="Фамилия"/>
        <InputText placeholder="Имя"/>
        <InputText placeholder="Отчество"/>

      </div>
      <div class="info_two">
        <p class="theme">О вашей профессии</p>
      </div>
    </div>
  </div>
</template>

<script>

import InputText from "@/components/InputText";

export default {
  name: "RegistrationComponent",
  components: {InputText},

}
</script>

<style scoped>
  .wrapper{
    padding: 150px 250px 40px 250px;
  }

  .window{
    padding-top: 30px;
    padding-left: 40px;
    background-color: white;
    height: 60vh;
    border-radius: 20px;
    text-align: center;
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .info_one{
    padding-right: 60px;
  }

  .title_welcome{
    font-size: 36px !important;
    font-weight: 500;
  }

  .theme{
    font-weight: 600;
    text-align: left;
  }

</style>