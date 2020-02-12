function createStore(){
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

    return {
        getState,
        subscribe
    }
}
