const redux = require('redux');


/**
 * The reducer function manages data in the store.
 * The reducer will create a new state snapshot whenever an action reaches it.
 * When we run the code for the first time, the reducer will also be executed with a default action.
*/
const counterReducer = (state = {counter:0}, actions)=>{

    if(actions.type === 'increment')
    {
        return {
            counter: state.counter+1
        };
    }
    if(actions.type === 'decrement')
    {
        return {
            counter: state.counter-1
        };
    }
    return state;
};

/**
 * The Reducer function need to pass to createstore function. 
 * Beacuse Store needs to know which reducer is responsible for changing. 
 */

const store = redux.createStore(counterReducer);

console.log(store.getState())

/**
 * Now we need to subscribe to the store and then dispatch an action.
 */

const counterSubscriber = ()=>{

    // It will give me the latest snapshot of the state. 
    const latestState = store.getState();
    console.log(latestState);
}

/**
 * Now we need to tell redux regarding the subscriber function
 * 
 */

store.subscribe(counterSubscriber);

/**
 * Dispatch and Actions 
 */

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})
store.dispatch({type: "print"})






