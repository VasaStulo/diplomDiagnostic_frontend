<template>
  <div>
    <div class="content-wrapper" v-if="isShowControl">
      <div class="control-question">
        Контрольный вопрос
      </div>
      <div class="question-title">
        {{ currentQuestion.control_question || '' }}
      </div>
      <div class="control-wrapper">
        <div class="checkboxes">
          <CheckboxMain
              v-for="(checkbox, index) in currentQuestion.control_answers"
              :key="index"
              @change="changeCheckboxState($event, index)"
              :label="checkbox"/>
        </div>
        <div class="d-flex flex-column justify-center align-center">
          <div class="buttons">
            <ButtonMain
                text="Пропустить вопрос"
                type="secondary"
                @click="skipControlQuestion()"
            />
            <ButtonMain
                text="Отправить"
                @click="checkControlAnswers()"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper" v-else>
      <div class="question-title">
        {{ currentQuestion.question || '' }}
      </div>
      <div class="buttons">
        <ButtonMain text="Не согласен" @click="SET_ANSWER_VALUE(0)"/>
        <ButtonMain text="Согласен" @click="toAgree()"/>
      </div>
    </div>
  </div>
</template>

<script>
// нарисовать в дипломе диаграмму состояний, заценят
/*
Есть список вопросов
Некоторые из них помечены флагом «контрольный»
**
Если на вопрос с таким флагом, пользак даёт утвердительный ответ, то ему должен быть задан контрольный вопрос
Затем проверяется правильно ли дан ответ
**
Да — в массив ответов записывается 1
Нет — 0
 */
import {mapGetters, mapMutations, mapState} from "vuex";
import ButtonMain from './ButtonMain';
import CheckboxMain from './CheckboxMain';
export default {
  name: "DiagnosticContent",
  components: {ButtonMain, CheckboxMain},
  data: () => ({isLoading: true, isShowControl: false, checkboxState: []}),
  computed: {
    ...mapState('diagnostic',
        ['currentStep', 'summaryStep', 'questions']),
    ...mapGetters('diagnostic', ['currentQuestion']),
  },
  methods: {
    ...mapMutations('diagnostic', [
      'SET_ANSWER_VALUE',
    ]),
    changeCheckboxState(value, index){
      this.checkboxState[index] = value;
    },
    preFillCheckboxState(){
      // заполняем все checkbox false значением
      this.checkboxState =
          new Array(this.currentQuestion?.control_answers?.length || 0).fill(false);
    },
    toAgree() {
      // если соглашаемся с обычным вопросом - просто ставим 1
      if (!this.currentQuestion.control) {
        this.SET_ANSWER_VALUE(1);
        return;
      }
      this.preFillCheckboxState();
      this.isShowControl = true;
    },
    clearControlState(){
      this.checkboxState = []
      this.isShowControl = false;
    },
    checkControlAnswers() {
      // пробегаемся по верным ответам
      // если находим неверный ответ - вопрос не засчитываем
        for (let i = 0; i < this.currentQuestion?.control_right_answers.length; i++) {
          if (Number(this.checkboxState[i]) !==
              this.currentQuestion?.control_right_answers[i]){
            this.SET_ANSWER_VALUE(0);
            this.clearControlState();
            return
        }
      }
      // если все ответы совпадают - вопрос засчитываем
      this.SET_ANSWER_VALUE(1);
      this.clearControlState();
    },
    skipControlQuestion(){
      this.SET_ANSWER_VALUE(0);
      this.clearControlState();
    }
  },
}
</script>

<style lang="scss" scoped>
.content-wrapper{
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.buttons {
  display: flex;
  position: absolute;
  bottom: 100px; // пока так, если будет много текста - будет наложение, найти другой способ
  justify-content: space-between;
  min-width: 500px;
  margin-top: 30px;
}

.checkboxes{
  min-width: 700px;
}

</style>