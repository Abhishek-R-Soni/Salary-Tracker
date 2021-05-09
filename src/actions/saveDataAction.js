export const saveData = (data = []) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('PaymentEntry').add({
            ...data,

        }).then(() => {
            dispatch({type: 'SAVE'}, data)
        }).catch((err) => {
            dispatch({type: 'SAVE'}, err)
        })
    }
};

