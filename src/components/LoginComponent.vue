<template>
  <div>
    <div class="inputs">
      <InputText class="mb-6" @input="CHANGE_VALUE_BY_FIELD({form: 'loginForm', field: 'email', value: $event})" placeholder="E-mail" :value="loginForm.email"/>
      <InputText @input="CHANGE_VALUE_BY_FIELD({form: 'loginForm', field: 'password', value: $event})" placeholder="Password" :value="loginForm.password"/>
    </div>
    <ButtonMain @click="toLogin" text="Войти в аккаунт"/>
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
    ...mapMutations('auth',['CHANGE_VALUE_BY_FIELD']),
    ...mapActions('auth',['toLogin']),
  },
  computed: {
    //MAP ФУНКЦИЯ ОБЛЕГЧАЕТ ДОСТУП К СТОРУ
    ...mapState('auth',['loginForm']),
  },
}
</script>

<style scoped>
.inputs {
  padding: 20px;
}
</style>