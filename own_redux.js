const createStore = (reducer, initialState) => {
    const store = {
        state : initialState,
        listners : []
    };

    store.getState = () => store.state;
    store.subscribe = (listner) => store.listners.push(listner);
    store.dispatch = (action) => {
        store.state = reducer(store.state, action);
        store.listners.forEach(listner => listner());
    }
    return store;
}


// use of this redux
function counterReducer(state = 0, action) {
    switch(action.type) {
        case "INC" :
            return state + 1
        case "DESC" : 
        return state - 1;
        default : return state;
    }
}

var store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type: "INC"});
