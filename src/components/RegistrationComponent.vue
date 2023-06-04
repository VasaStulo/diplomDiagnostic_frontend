<template>
    <div class="registration">
      <div class="d-flex justify-space-around flex-wrap">
        <div class="d-flex flex-column">
          <p class="theme">О Вас</p>
          <InputText
              @input="setField('surname', $event)"
              :value="registrationForm.surname"
              :error="registrationFormValid.surname"
              :error-message="registrationFormErrors.surname"
              placeholder="Фамилия"/>
          <InputText
              @input="setField('name', $event)"
              :error="registrationFormValid.name"
              :error-message="registrationFormErrors.name"
              :value="registrationForm.name"
              placeholder="Имя"/>
          <InputText
              @input="setField('patronymic', $event)"
              :error="registrationFormValid.patronymic"
              :error-message="registrationFormErrors.patronymic"
              :value="registrationForm.patronymic"
              placeholder="Отчество"/>
        </div>
        <div class="ml-6 second_column">
          <p class="theme">О вашей профессии</p>
          <div class="d-flex">
            <SelectMain
                @change="setField('experience', $event)"
                :items="dataForRegistration.experience"
                :error="registrationFormValid.experience"
                :error-message="registrationFormErrors.experience"
                :value="registrationForm.experience"
                placeholder="Педагогический стаж"/>
            <SelectMain
                class="ml-5"
                @change="setField('post', $event)"
                :items="dataForRegistration.post"
                :error="registrationFormValid.post"
                :error-message="registrationFormErrors.post"
                :value="registrationForm.post"
                placeholder="Должность"/>
          </div>
          <SelectMain
              @change="setField('category', $event)"
              :items="dataForRegistration.category"
              :error="registrationFormValid.category"
              :error-message="registrationFormErrors.category"
              :value="registrationForm.category"
              placeholder="Категория"/>
          <div class="d-flex">
            <SelectMain
                @change="setField('region', $event)"
                :items="dataForRegistration.region"
                :error="registrationFormValid.region"
                :error-message="registrationFormErrors.region"
                :value="registrationForm.region"
                placeholder="Субъект РФ"/>
            <SelectMain
                class="ml-5"
                @change="setField('district', $event)"
                :items="dataForRegistration.district"
                :error="registrationFormValid.district"
                :error-message="registrationFormErrors.district"
                :value="registrationForm.district"
                placeholder="Муниципальный район"/>
          </div>
            <SelectMain
                @change="setField('typeOfArea', $event)"
                :items="dataForRegistration.typeOfArea"
                :error="registrationFormValid.typeOfArea"
                :error-message="registrationFormErrors.typeOfArea"
                :value="registrationForm.typeOfArea"
                placeholder="Тип населенного пункта"/>
            <InputText
                @input="setField('educationalOrganization', $event)"
                :error="registrationFormValid.educationalOrganization"
                :error-message="registrationFormErrors.educationalOrganization"
                :value="registrationForm.educationalOrganization"
                placeholder="Образовательная организация"/>
            <p class="theme mt-6">Данные для входа</p>
            <InputText
                @input="setField('email', $event)"
                :error="registrationFormValid.email"
                :error-message="registrationFormErrors.email"
                :value="registrationForm.email"
                placeholder="E-mail"/>
            <InputText
                @input="setField('password', $event)"
                :error="registrationFormValid.password"
                :error-message="registrationFormErrors.password"
                :value="registrationForm.password"
                placeholder="Пароль"/>

        </div>
        <ButtonMain class="mt-10 ml-5" @click="prepareRegister" text="Зарегистрироваться"/>
      </div>
    </div>
</template>

<script>

import InputText from "@/components/InputText";
import ButtonMain from "@/components/ButtonMain";
import SelectMain from "@/components/SelectMain";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "RegistrationComponent",
  components: {InputText, ButtonMain, SelectMain},
  methods: {
    ...mapActions('auth', ['toRegister', 'getRegisterData']),
    ...mapMutations('auth', ['CHANGE_VALUE_BY_FIELD_REGISTRATION', 'CHECK_VALIDATION_REGISTRATION']),
    setField(field, value){
      this.CHANGE_VALUE_BY_FIELD_REGISTRATION({field, value})
    },
    async prepareRegister(){
      this.CHECK_VALIDATION_REGISTRATION();
      if(!this.registrationInvalid){
        await this.toRegister();
      }
    },
  },
  async mounted(){
    await this.getRegisterData();
  },
  computed: {
    //MAP ФУНКЦИЯ ОБЛЕГЧАЕТ ДОСТУП К СТОРУ
    ...mapState('auth',['registrationForm', 'dataForRegistration', 'registrationFormValid', 'registrationFormErrors', 'registrationInvalid']),
  },
}
</script>

<style scoped lang="scss">
.registration{
  max-width: 1000px;
  padding: 30px 0 10px 0;
}

.theme{
  font-weight: 600;
  text-align: left;
}

</style>