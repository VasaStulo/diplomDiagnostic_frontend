<template>
    <div class="registration">
      <v-row no-gutters>
        <v-col cols="4" class="d-flex align-center first-col">
          <v-row no-gutters>
            <v-col>
              <p class="theme">О Вас</p>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('surname', $event)"
                      :value="registrationForm.surname"
                      :error="registrationFormValid.surname"
                      :error-message="registrationFormErrors.surname"
                      placeholder="Фамилия"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('name', $event)"
                      :error="registrationFormValid.name"
                      :error-message="registrationFormErrors.name"
                      :value="registrationForm.name"
                      placeholder="Имя"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('patronymic', $event)"
                      :error="registrationFormValid.patronymic"
                      :error-message="registrationFormErrors.patronymic"
                      :value="registrationForm.patronymic"
                      placeholder="Отчество"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <p class="theme">О вашей профессии</p>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <SelectMain
                      @change="setField('experience', $event)"
                      :items="dataForRegistration.experience"
                      :error="registrationFormValid.experience"
                      :error-message="registrationFormErrors.experience"
                      :value="registrationForm.experience"
                      placeholder="Педагогический стаж"/>
                </v-col>
                <v-col>
                  <SelectMain
                      @change="setField('post', $event)"
                      :items="dataForRegistration.post"
                      :error="registrationFormValid.post"
                      :error-message="registrationFormErrors.post"
                      :value="registrationForm.post"
                      placeholder="Должность"/>
                </v-col>
              </v-row>
              <v-col>
                <SelectMain
                    @change="setField('category', $event)"
                    :items="dataForRegistration.category"
                    :error="registrationFormValid.category"
                    :error-message="registrationFormErrors.category"
                    :value="registrationForm.category"
                    placeholder="Категория"/>
              </v-col>
              <v-row>
              </v-row>
              <v-row>
                <v-col>
                  <SelectMain
                      @change="setField('region', $event)"
                      :items="dataForRegistration.region"
                      :error="registrationFormValid.region"
                      :error-message="registrationFormErrors.region"
                      :value="registrationForm.region"
                      placeholder="Субъект РФ"/>
                </v-col>
                <v-col>
                  <SelectMain
                      @change="setField('district', $event)"
                      :items="dataForRegistration.district"
                      :error="registrationFormValid.district"
                      :error-message="registrationFormErrors.district"
                      :value="registrationForm.district"
                      placeholder="Муниципальный район"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <SelectMain
                      @change="setField('typeOfArea', $event)"
                      :items="dataForRegistration.typeOfArea"
                      :error="registrationFormValid.typeOfArea"
                      :error-message="registrationFormErrors.typeOfArea"
                      :value="registrationForm.typeOfArea"
                      placeholder="Тип населенного пункта"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('educationalOrganization', $event)"
                      :error="registrationFormValid.educationalOrganization"
                      :error-message="registrationFormErrors.educationalOrganization"
                      :value="registrationForm.educationalOrganization"
                      placeholder="Образовательная организация"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <p class="theme mt-6">Данные для входа</p>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('email', $event)"
                      :error="registrationFormValid.email"
                      :error-message="registrationFormErrors.email"
                      :value="registrationForm.email"
                      placeholder="E-mail"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('password', $event)"
                      :error="registrationFormValid.password"
                      :error-message="registrationFormErrors.password"
                      :value="registrationForm.password"
                      placeholder="Пароль"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <ButtonMain class="mt-10" @click="prepareRegister" text="Зарегистрироваться"/>
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
::v-deep(.col){
  padding: 5px !important;
}
.registration{
  max-width: 1000px;
  padding: 30px 70px 10px 60px;
}

.theme{
  font-weight: 600;
  text-align: left;
}

.first-col{
  margin-right: 200px;
  @media(max-width: 800px){
    margin-right: 60px;
  }
}
</style>