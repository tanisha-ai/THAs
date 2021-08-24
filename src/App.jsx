
import './App.css';

import {name,email} from './actions/action'
import {useDispatch, useSelector} from 'react-redux'

 




function App() {
  const input_name=  useSelector(state => state.name);
  const input_email = useSelector(state => state.email)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>REDUX FORM</h1>
    <input onChange={(e)=>{
      dispatch(name(e.target.value))
    }} type="text" placeholder="name"/>
    <input onChange={(e)=>{
      dispatch(email(e.target.value))
    }} type="text" placeholder="email"/>
    <div className="output">
      <h1>DATA</h1>
      <span>name:{input_name}</span>
      <span>email:{input_email}</span>
    </div>
    </div>
  );
}

export default App;
