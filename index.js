function createStore(){
/*  - the state tree 
    - a way to get the state tree
    - a way to listen and respond to the state changing
    - a way to update the state */
    let state
    let listeners =[]

    const getState = () => state

    return {
        getState,
        subscribe
    }
}

const store = createStore()
store.subscribe(() =>{
    console.log('The new state is: ',store.getState())
})
store.subscribe(() =>{
    console.log('The store changed.')
})