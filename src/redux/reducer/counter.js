

const counterReducer=(state=0,action)=>{
    switch (action.type) {
        case 'ARTIR':
            return state+=1
        case 'AZALT':
            return state-=1
        default:
            return state;
    }
}
export default counterReducer;