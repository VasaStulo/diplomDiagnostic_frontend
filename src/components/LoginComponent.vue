<template>
  <div>
    <div class="inputs">
      <InputText class="mb-1" @input="CHANGE_VALUE_BY_FIELD_LOGIN({field: 'email', value: $event})"
                 :error="loginFormValid.email"
                 :error-message="loginFormErrors.email"
                 placeholder="E-mail"
                 :value="loginForm.email"/>
      <InputText
          @input="CHANGE_VALUE_BY_FIELD_LOGIN({field: 'password', value: $event})"
          placeholder="Password"
          :error="loginFormValid.password"
          :error-message="loginFormErrors.password"
          :value="loginForm.password"/>
    </div>
    <ButtonMain @click="prepareLogin" text="Войти в аккаунт"/>
    <p class="error--text mt-1">{{errorLogin}}</p>
  </div>
</template>

<script>

import InputText from "@/components/InputText";
import ButtonMain from "@/components/ButtonMain";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "LoginComponent",
  components: {InputText, ButtonMain},
  methods:{
    ...mapMutations('auth',['CHANGE_VALUE_BY_FIELD_LOGIN', 'CHECK_VALIDATION_LOGIN']),
    ...mapActions('auth',['toLogin']),
    async prepareLogin(){
      this.CHECK_VALIDATION_LOGIN();
      if(!this.loginInvalid){
        await this.toLogin();
      }
    },
  },
  computed: {
    //MAP ФУНКЦИЯ ОБЛЕГЧАЕТ ДОСТУП К СТОРУ
    ...mapState('auth',['loginForm', 'loginInvalid', 'loginFormValid', 'loginFormErrors', 'errorLogin']),
  },
}
</script>

<style scoped>
.inputs {
  padding: 20px 20px 10px;
}
</style>