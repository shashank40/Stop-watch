 import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if(run){
      interval = setInterval(()=>{setTime((time)=>time+10)},10);
    }
    else if (!run){
      clearInterval(interval)
    }

    return () => clearInterval(interval); /// this is when we need to stop if k true hone k baad even though we dont enter else
    // kind of unmount in class component

  }, [run])

  return (
    <>
    <h1 class = "text-4xl pt-20 block text-center">Stop Watch</h1>
    <div class = "flex flex-col items-center space-y-10">
        <div class="pt-20">
          <span class="text-2xl">{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
          <span class="text-2xl">{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
          <span class="text-2xl">{("0" + ((time/10)%100)).slice(-2)}</span>
        </div>
        <div class="pt-10 space-x-8">
          {run ? 
          (<button class= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setRun(false)}}> stop </button> 
          ) : 
          (<button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setRun(true)}}> start </button>)}
          <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setTime(0)}}> reset </button> 
        </div> 
      </div> 
    </>
  );
}

export default App;
