const reducer=(state=0, action)=>{
    if(action.type==='DEPOSIT'){
        console.log('Reducer: Handling DEPOSIT action');
        return state+action.payload;
    }

    else if(action.type==='WITHDRAW'){
        console.log('Reducer: Handling WITHDRAW action');
        return state-action.payload;
    }
    else{
        console.log('Reducer: No matching action, state unchanged');
        return state;
    }
}

export default reducer;