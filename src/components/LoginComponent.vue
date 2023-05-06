<template>
  <div>
    <div class="inputs">
      <InputText @input="CHANGE_VALUE_BY_FIELD({field: 'email', value: $event})" placeholder="E-mail" :value="form.email"/>
      <InputText @input="CHANGE_VALUE_BY_FIELD({field: 'password', value: $event})" placeholder="Password" :value="form.password"/>
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
    ...mapState('auth',['form']),
  },
}
</script>

<style scoped>
.inputs {
  padding: 20px;
}
</style>