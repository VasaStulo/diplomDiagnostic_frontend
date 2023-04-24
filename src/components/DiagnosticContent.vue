<template>
  <div class="content-wrapper">
    <div class="control-question" v-if="currentQuestion.control">
      Контрольный вопрос
    </div>
    <div class="question-title">
      {{ currentQuestion.question || '' }}
    </div>
    <v-btn @click="NEXT_STEP">next</v-btn>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "DiagnosticContent",
  data: () => ({isLoading: true}),
  computed: {
    ...mapState('diagnostic',
        ['currentStep', 'summaryStep', 'questions']),
    currentQuestion(){
     return this.questions[this.currentStep-1]
    }
  },
  methods: {
    ...mapMutations('diagnostic', ['NEXT_STEP']),
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper{
  padding-top: 55px;
}
.control-question{
  text-align: center;
  color: #5E4D46;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
}
.question-title{
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #FFFFFF;
}
</style>