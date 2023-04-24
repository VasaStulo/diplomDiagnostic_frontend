export default{
    //field - название поля в стейте, value - значение
    CHANGE_VALUE_BY_FIELD(state,{field,value}){
        state[field]=value;
    },

    NEXT_STEP(state){
        state.currentStep++;
    }
}
