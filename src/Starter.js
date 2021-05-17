import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store'; 
const Starter = () => {
    return (
        <div>
               <Provider store={store}>
                   <App />
               </Provider>

        </div>
    );
}

export default Starter;
