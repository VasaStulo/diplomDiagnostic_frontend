<template>
    <div class="wrapper">
      <div class="window_auth">
        <div class="auth">
            <h2>Добро <br/>пожаловать!</h2>
          <div class="btn_enter">
          <ButtonText text="Вход"/>
            <ButtonText text="Регистрация"/>
          </div>
          <div class="inputs">
          <InputText @input="CHANGE_VALUE_BY_FIELD({field: 'email', value: $event})" placeholder="E-mail" :value="form.email"/>
          <InputText @input="CHANGE_VALUE_BY_FIELD({field: 'password', value: $event})" placeholder="Password" :value="form.password"/>
          </div>
          <ButtonMain @click="toLogin" text="Войти в аккаунт"/>
        </div>
      </div>
  </div>
</template>

<script>
  import InputText from "@/components/InputText";
  import ButtonText from "@/components/ButtonText";
  import ButtonMain from "@/components/ButtonMain";
  import {mapActions, mapMutations, mapState} from "vuex";
  export default {
    name: 'EnterComponent',
    components: {ButtonMain, ButtonText, InputText},

    props: {
      sizeW: {
        type: String,
        default: 'M'
      },
    },
    computed: {
      //MAP ФУНКЦИЯ ОБЛЕГЧАЕТ ДОСТУП К СТОРУ
      ...mapState('auth',['form']),
      getClasses: function () {
        return [
          'main-input',
          `sizeW-${this.sizeW}`
        ];
      },
    },
    methods:{
      ...mapMutations('auth',['CHANGE_VALUE_BY_FIELD']),
      ...mapActions('auth',['toLogin']),
    }
  }
</script>

<style scoped lang="scss">
.wrapper{
  padding: 140px 500px 80px 500px;
  background-image: url("../assets/img/hands.png");
  background-position: center;
  background-size: cover;
}

.window_auth{
  background-color: white;
  height: 60vh;
  border-radius: 20px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.15);
}

.right_image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
}

h2{
  font-weight: 500;
  font-size: 36px;
}

.inputs {
  padding: 30px
}


</style>