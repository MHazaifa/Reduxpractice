import {useSelector , useDispatch} from "react-redux"
import './App.css';

function App() {
  // const Selector = useSelector()
  const Dispatch = useDispatch()

  const counter = useSelector(state => state.counter)
  const decrement = ()=>{
    if(counter === 0){
      
    }
    else{
      Dispatch({type: 'DECREMENT',})
    }
  }
  return (
    <div className="App"> 
      <h1>{counter}</h1>
      <button onClick={()=>Dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={decrement}>-</button>
     
    </div>
  );
}

export default App;
