export default{
    //мутация принимает state и payload(объект)
    CHANGE_VALUE_RESULTS(state,payload){
        state.standard = payload.standard;
        state.competence = payload.competence;
        state.dppsh = payload.dppsh;
    },

    CHANGE_VALUE_BY_FIELD(state,{field,value}){
        state[field]=value;
    }
}
