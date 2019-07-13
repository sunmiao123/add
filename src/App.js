import React from 'react';
import Index from './component/index'
import {Provider} from 'react-redux'
import store from './component/store/store'

// import Yk from './component/yk/inndex'

class App extends React.Component{
  render(){
    return (
      <>
        <Provider store={store}>

            <Index/>
        </Provider>
        {/* <Yk/> */}
      </>
    )
  }
}

export default App;
