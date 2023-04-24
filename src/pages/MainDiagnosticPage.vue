<template>
  <div class="wrapper">
    <div class="content" v-if="!isLoading">
      <div class="header">
        <div class="question-number">
        <span class="current">
          {{currentStep}}
        </span>
          <span class="summary">/ {{summaryStep}}
        </span>
        </div>
        <img
            @click="$router.push('/profile')"
            width="35px"
            height="35px"
            src="../assets/img/close.svg"
            class="close"
            alt="close">
      </div>
      <DiagnosticContent/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import DiagnosticContent from "@/components/DiagnosticContent";

export default {
  name: "MainDiagnosticPage",
  components: ({DiagnosticContent}),
  data: () => ({isLoading: true}),
  computed: {
    ...mapState('diagnostic', ['currentStep', 'summaryStep']),
  },
  methods: {
    ...mapActions('diagnostic', ['setQuestions'])
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
</style>