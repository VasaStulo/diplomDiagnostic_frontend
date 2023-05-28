export default{
    //field - название поля, value - значение
    CHANGE_VALUE_BY_FIELD_REGISTRATION(state,{field,value}){
        state.registrationForm[field] = value;
        state.registrationFormValid[field] = false;
        state.registrationFormErrors[field] = '';
        state.registrationInvalid = false;
    },

    CHANGE_VALUE_BY_FIELD_LOGIN(state,{field,value}){
        state.loginForm[field] = value;
        state.errorLogin = '';
        state.loginFormValid[field] = false;
        state.loginFormErrors[field] = '';
        state.loginInvalid = false;
    },

    CHECK_VALIDATION_REGISTRATION(state){
        Object.keys(state.registrationForm).forEach((field)=>{
            if(field === 'email'){
                const reEmail = /\S+@\S+\.\S+/;
                if(!reEmail.test(state.registrationForm[field])){
                    state.registrationFormValid[field] = true;
                    state.registrationFormErrors[field] = 'Введите корректный Email';
                    state.registrationInvalid = true;
                }
            }

            if(!state.registrationForm[field]){
                state.registrationFormValid[field] = true;
                state.registrationFormErrors[field] = 'Поле должно быть заполнено';
                state.registrationInvalid = true;
            }
        })
    },

    CHECK_VALIDATION_LOGIN(state){
        Object.keys(state.loginForm).forEach((field)=>{
            if(!state.loginForm[field]){
                state.loginFormValid[field] = true;
                state.loginFormErrors[field] = 'Поле должно быть заполнено';
                state.loginInvalid = true;
            }
        })
    },
    SET_LOGIN_ERROR(state, error){
      state.errorLogin = error;
    },

    CLEAR_STATE(state){
        state.errorLogin = '';
        state.loginInvalid = false;
        state.registrationInvalid = false;
        state.registrationForm = {
            surname: '',
            name: '',
            patronymic: '',
            experience: '',
            post: '',
            region: '',
            district: '',
            typeOfArea: '',
            category: '',
            educationalOrganization : '',
            email : '',
            password : '',
        };
        state.registrationFormValid = {
            surname: false,
                name: false,
                patronymic: false,
                experience: false,
                post: false,
                region: false,
                district: false,
                category: false,
                typeOfArea: false,
                educationalOrganization : false,
                email : false,
                password : false,
        };
        state.registrationFormErrors = {
            surname: '',
                name: '',
                patronymic: '',
                experience: '',
                post: '',
                region: '',
                district: '',
                category: '',
                typeOfArea: '',
                educationalOrganization : '',
                email : '',
                password : '',
        };
        state.loginForm = {
            email: '',
            password: '',
        };
    },

    SET_DATA_FOR_REGISTRATION(state, {field, value}){
        state.dataForRegistration[field] = value;
    }
}
