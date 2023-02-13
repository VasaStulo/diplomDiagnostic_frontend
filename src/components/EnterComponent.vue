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
        <ButtonMain text="Войти в аккаунт"/>
      </div>
      <img class="right_image" src="../assets/img/hands.png"/>
    </div>
  </div>

</template>

<script>
  import InputText from "@/components/InputText";
  import ButtonText from "@/components/ButtonText";
  import ButtonMain from "@/components/ButtonMain";
  import {mapMutations, mapState} from "vuex";
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
    }
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