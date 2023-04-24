export default{
    //field - название поля, value - значение
    CHANGE_VALUE_BY_FIELD(state,{field,value}){
        state.form[field]=value;
    }
}
