export default {
    recommendations: (state, _, __, rootGetters)=>{
        const recommendations = [];
        state.dppsh.forEach((res)=>{
            const question = rootGetters['diagnostic/getDppshQuestions'][res.index-1]?.question || ''
            recommendations.push({
                ...res,
                pollPosition: `${res.index}. ${question}`,
                typeOfDiagnostic: 'ДППШ',
            })
        })
        state.standard.forEach((res)=>{
            const question = rootGetters['diagnostic/getStandardQuestions'][res.index-1]?.question || ''
            recommendations.push({
                ...res,
                pollPosition: `${res.index}. ${question}`,
                typeOfDiagnostic: 'СТАНДАРТНАЯ',
            })
        })

        return recommendations.sort((a,b)=>a.index-b.index)
    }
}