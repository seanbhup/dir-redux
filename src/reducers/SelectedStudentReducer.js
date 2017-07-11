var SelectedStudentReducer = function(state = "No one", action){
    if (action.type === 'SELECT_STUDENT'){
        return action.payload
    // }else if(action.type === "TIMER_TICK"){
    //     var newState = state + action.payload;
    //     return newState;
    }else{
        return state;
    }
}

export default SelectedStudentReducer;
