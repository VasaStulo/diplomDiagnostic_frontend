<template>
    <div class="wrapper">
      <div class="window_auth">
        <div class="auth">
            <h2 class="title">Добро <br/>пожаловать!</h2>
          <div class="btn_enter">
            <ButtonText
                :class="{active_button: currentTab === index}"
                v-for="(button, index) in buttons"
                :text="button"
                :key="index"
                @click="changeTab(index)"
            />
          </div>
          <LoginComponent v-if="currentTab === 0"/>
          <RegistrationComponent v-else/>
        </div>
      </div>
  </div>
</template>

<script>
  import ButtonText from "@/components/ButtonText";
  import LoginComponent from "@/components/LoginComponent";
  import RegistrationComponent from "@/components/RegistrationComponent";
  export default {
    name: 'EnterPage',
    components: {RegistrationComponent, LoginComponent, ButtonText},
    data(){
      return {
        buttons: ['Вход', 'Регистрация'],
        currentTab: 0,
      }
    },
    methods: {
      changeTab(index) {
        console.log(index)
        this.currentTab = index;
      }
    }
  }
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-image: url("../assets/img/hands.png");
  background-position: center;
  background-size: cover;
}

.window_auth {
  padding-right: 40px;
  padding-left: 40px;
  background-color: white;
  height: 60vh;
  text-align: center;

  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.title {
  margin-top: 40px;
  font-weight: 500;
  font-size: 36px !important;
}

.active_button{
  color: #0968AD !important;
  font-weight: 700;
}
</style>