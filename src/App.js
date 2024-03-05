import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';


let Name="Varun"

function App() {

  const[comment,setComment]=useState("");
  const[comments,setComments]=useState([]);

  const onclickHandler= () => {
    setComment((comments) => [...comments ,comment]);
  };


  const onChangeHandler =(e) => {
    setComment(e.target.value);
  };


  return (
<>
   
<Navbar title="Navbar" aboutText="About us"/>
<div className='main-container'>
  {comment.map((text)=>(

<div className='comment-container py-3'>{text}</div>
  ))}
    

 <div className='comment-flexbox'>
  <h3 className='comment-text'>COMMENT</h3>
  <textarea value={comment} 
  onChange={onChangeHandler} 
  className='input-box'/>
  <button onClick={onChangeHandler} className='btn btn-primary'>Submit</button>
</div>
</div>
</>
    
  );
}

export default App;
