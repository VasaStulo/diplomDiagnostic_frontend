<template>
  <div class="wrapper">
    <div class="window_auth">
      <div class="auth">
          <h2>Добро <br/>пожаловать!</h2>
        <div class="btn_enter">
        <ButtonText :text="'Вход'"/>
          <ButtonText :text="'Регистрация'"/>
        </div>
        <div>
        <InputText :placeholder="'E-mail'" />
        <InputText :placeholder="'Password'" />
        </div>
      </div>
      <img class="right_image" src="../assets/img/hands.png"/>
    </div>
  </div>

</template>

<script>
  import InputText from "@/components/InputText";
  import ButtonText from "@/components/ButtonText";
  export default {
    name: 'EnterComponent',
    components: {ButtonText, InputText},
  }
</script>

<style scoped lang="scss">
.wrapper{
  padding: 60px 200px;
}

.window_auth{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60vh;
  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.right_image{
  max-width: 100%;
  border-radius: 0 0;
}

.auth{
}

h2{
  font-weight: 500;
  font-size: 36px;
}

</style>