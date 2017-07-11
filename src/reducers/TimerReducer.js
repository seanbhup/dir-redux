var TimerReducer = function(state = new Date().toLocaleTimeString(), action){
    if(action.type === "TIMER_TICK"){
        return action.payload.toLocaleTimeString()
    }else{
        return state;
    }
}

export default TimerReducer;
