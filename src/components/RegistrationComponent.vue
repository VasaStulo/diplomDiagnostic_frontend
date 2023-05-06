<template>
    <div class="registration">
      <v-row no-gutters>
        <v-col cols="4" class="d-flex align-center mr-16">
          <v-row no-gutters>
            <v-col>
              <p class="theme">О Вас</p>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('surname', $event)"
                      :value="registrationForm.surname"
                      placeholder="Фамилия"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('name', $event)"
                      :value="registrationForm.name" placeholder="Имя"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('patronymic', $event)"
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
                      :value="registrationForm.experience"
                      placeholder="Педагогический стаж"/>
                </v-col>
                <v-col>
                  <SelectMain
                      @change="setField('post', $event)"
                      :items="dataForRegistration.post"
                      :value="registrationForm.post"
                      placeholder="Должность"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <SelectMain
                      @change="setField('region', $event)"
                      :items="dataForRegistration.region"
                      :value="registrationForm.region"
                      placeholder="Субъект РФ"/>
                </v-col>
                <v-col>
                  <SelectMain
                      @change="setField('district', $event)"
                      :items="dataForRegistration.district"
                      :value="registrationForm.district"
                      placeholder="Муниципальный район"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <SelectMain
                      @change="setField('typeOfArea', $event)"
                      :items="dataForRegistration.typeOfArea"
                      :value="registrationForm.typeOfArea"
                      placeholder="Тип населенного пункта"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('educationalOrganization', $event)"
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
                      :value="registrationForm.email"
                      placeholder="E-mail"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <InputText
                      @input="setField('password', $event)"
                      :value="registrationForm.password"
                      placeholder="Пароль"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <ButtonMain class="mt-10" @click="toRegister" text="Зарегистрироваться"/>
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
    ...mapActions('auth', ['toRegister']),
    ...mapMutations('auth', ['CHANGE_VALUE_BY_FIELD']),
    setField(field, value){
      this.CHANGE_VALUE_BY_FIELD({form: 'registrationForm', field, value})
    }
  },
  computed: {
    //MAP ФУНКЦИЯ ОБЛЕГЧАЕТ ДОСТУП К СТОРУ
    ...mapState('auth',['registrationForm', 'dataForRegistration']),
  },
}
</script>

<style scoped>
::v-deep(.col){
  padding: 10px !important;
}
.registration{
  max-width: 1000px;
  padding: 30px 70px 10px 60px;
}

.theme{
  font-weight: 600;
  text-align: left;
}

</style>