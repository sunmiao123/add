import {createStore,applyMiddleware,combineReducers} from 'redux'

import thunk from 'redux-thunk'

let chuang = (state={data:[]},action) =>{
    let newarr = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "CHUANG":
            
            return newarr;
    
        default:
            return newarr;
    }
}

let reducers = combineReducers({chuang})
let store = createStore(reducers,applyMiddleware(thunk))