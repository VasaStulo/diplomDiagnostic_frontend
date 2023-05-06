export default{
    //field - название поля, value - значение
    CHANGE_VALUE_BY_FIELD(state,{field,value, form}){
        state[form][field]=value;
    }
}
