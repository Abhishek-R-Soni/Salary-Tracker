export const saveDataReducer = (state=[], action) => {
    console.log(action);
    switch(action.type){
        case "SAVE":
            return {
                ...state,
                items: action.payload 
            }
        
        default:
            return state;
    }
}