export default{
    //field - название поля, value - значение
    CHANGE_VALUE_BY_FIELD(state,{field,value, form}){
        state[form][field]=value;
    },

    CLEAR_STATE(state){
        state.registrationForm = {
            surname: '',
            name: '',
            patronymic: '',
            experience: '',
            post: '',
            region: '',
            district: '',
            typeOfArea: '',
            educationalOrganization : '',
            email : '',
            password : '',
        };
        state.loginForm = {
            email: '',
            password: '',
        };
    }
}
