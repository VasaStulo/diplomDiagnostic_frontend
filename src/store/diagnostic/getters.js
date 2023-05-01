export default {
    currentQuestion: (state) =>
        state.questions[state.currentStep],

    isEnd: (state) =>
        state.currentStep === state.questions.length
}