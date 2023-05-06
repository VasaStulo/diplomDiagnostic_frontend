<template>
  <div class="wrapper">
    <div class="content" v-if="!isLoading">
      <div class="header">
        <div class="question-number">
        <span class="current">
          {{isEnd ? currentStep : currentStep+1}}
        </span>
          <span class="summary">/ {{summaryStep}}
        </span>
        </div>
        <img
            v-if="!isEnd"
            @click="$router.push('/profile')"
            width="35px"
            height="35px"
            src="../assets/img/close.svg"
            class="close"
            alt="close">
      </div>
      <div class="end-title" v-if="isEnd">
        <p>
          Поздравляем!
        </p>
        <p>
          Вы прошли диагностику!
        </p>
        <ButtonMain
            text="Перейти к результатам"
            class="to-results"
            @click="endPoll"
        />
      </div>
      <DiagnosticContent v-if="!isEnd"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import DiagnosticContent from "@/components/DiagnosticContent";
import ButtonMain from '../components/ButtonMain';
export default {
  name: "MainDiagnosticPage",
  components: ({DiagnosticContent, ButtonMain}),
  data: () => ({isLoading: true}),
  computed: {
    ...mapState('diagnostic', ['currentStep', 'summaryStep']),
    ...mapGetters('diagnostic', ['isEnd'])
  },
  methods: {
    ...mapActions('diagnostic', ['setQuestions', 'sendAnswers']),
    async endPoll() {
      await this.sendAnswers();
      await this.$router.push('/profile');
    }
  },
  async mounted() {
    // устанавливаем вопросы в зависимости от типа
    await this.setQuestions(this.$route.params?.type);
    this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  background: #897268;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  position: fixed;
  padding: 50px 122px 20px;
}
.header{
  display: flex;
  justify-content: space-between;
}
.close{
  cursor: pointer;
}
.question-number{
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  width: 50%;
}
.current{
  color: #5E4D46;
}
.summary{
  color: #fff
}
.end-title{
  margin-top: 81px;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #FFFFFF;
}
.to-results{
  margin-top: 130px;
}
</style>