import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialState ={
  counter : 0
}
 const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {counter : state.counter + 1}
    case 'DECREMENT':
      return {counter : state.counter - 1}
    default:
      return state
  }
  
}


const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
