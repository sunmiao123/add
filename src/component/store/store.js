import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let chuang = (state = { data: [] }, action) => {
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'CHUANG':
            newstate.data = action.data
            console.log(newstate.data)
            return newstate;

        default:
            return newstate;
    }
}

let addname = (state={data:[]},action) =>{
    let newstate = JSON.parse(JSON.stringify(state))
    
    switch (action.type) {
        case 'NAME':
        newstate.data.push(action.data)
        console.log(newstate.data)
            return newstate;
        default:
            return newstate;
    }
}


let cunname = (state={data:[]},action) =>{
    let newstate = JSON.parse(JSON.stringify(state))
    
    switch (action.type) {
        case 'CUNNAME':
        newstate.data = action.data
        // console.log(newstate.data)
            return newstate;
        default:
            return newstate;
    }
}

let reducers = combineReducers({ chuang, addname,cunname})

let store = createStore(reducers,applyMiddleware(thunk))

export default store