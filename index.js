//Library code
function createStore(reducer){
/*  - the state tree 
    - a way to get the state tree
    - a way to listen and respond to the state changing
    - a way to update the state */
    let state
    let listeners =[]

    const getState = () => state

    const subscribe = (listener) =>{
        listeners.push(listener)
        return () =>{
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
      }
    
      return {
        getState,
        subscribe,
        dispatch,
      }
}

//App code
//has to be a pure function
//state will be undefined for first time usage. if undefined it should be an empty array.
// also called as reducer function.
function todos (state = [],action){
    if(action.type ==='ADD_TODO'){
        return state.concat([action.todo])

    }
    return state
}
