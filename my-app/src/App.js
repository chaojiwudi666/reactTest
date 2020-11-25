import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
function App() {
  const [condition,setCondition] = useState({
    num:0
  }) 
  const dom = useRef();
  // const synthesisClick = ()=>{
   
  //   console.log(`synthesisClick(beforeSet):${condition.num}`);
  //   let num = condition.num+1;
  //   console.log(num);
  //   setCondition({
  //     num:num
  //   });
  //   console.log(`synthesisClick(AfterSet):${condition.num}`);
  // }
  const realClick = ()=>{
   
    console.log(`realClick(beforeSet):${condition.num}`);
    let num = condition.num+1;
    console.log(num);
    setCondition({
      num:num
    });
    console.log(`realClick(AfterSet):${condition.num}`);
  }
  useEffect(() => {
    document.body.addEventListener('click', realClick, false)
    // setCondition({
    //   num:1
    // });
    // console.log(`lifeSet:${condition.num}`);
    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" id="dom" alt="logo" ref={dom} 
        // onLoad={()=>{
        //       // let dom = document.getElementById('dom');
           
        //       dom.current.onclick = function(){
        //         alert(1);
        //       };
        //       // dom.addEventListener('click',function(){
        //       //   alert(1111);
        //       // });
        //       console.log(dom.current);
        // }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
          // onClick = {()=>synthesisClick()}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
