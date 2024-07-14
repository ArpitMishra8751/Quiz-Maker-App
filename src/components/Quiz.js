import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {  useLocation } from 'react-router-dom'
// import { IoIosFastforward } from "react-icons/io";

const Quiz = () => {
    const {state} = useLocation();
    console.log("data from Navigate prop is:- ",state);
    const [ans,setAns] = useState("");
    function eventHandler(e){
      console.log(e);
      // console.log(e.target.innerHTML);
      console.log(e.target.innerText);
      setAns(e.target.innerText);
    }
    const [score,setScore] = useState(0);
    // const [ansflag,setAnsflag] = useState(false);
    // const [ID,setId] = useState();
    // function checkAns(correctAns,id){
    //   if(ans===""){
    //     toast.error("No option has been selected");
    //     return;
    //   }
    //   const ans1 = correctAns?.replaceAll(" ","").toLowerCase();
    //   console.log("selected Answer is:- ",ans1);
    //   const ans2 = ans?.replaceAll(" ","").toLowerCase();
    //   console.log("Correct Ans is :- ",ans2);
    //   if(ans2===ans1){
    //     setScore(score+4);
    //   }
    //   else{
    //     setScore(score-1);
    //   }
    //   setId(id);
    //   setAnsflag(true);
    //   setAns("");
    // }
    const [scorearr,setScorearr] = useState([]);
    async function checkAns(correctAns,idd){
      if(ans===""){
        toast.error("No option has been selected");
        return;
      }
      const ans1 = correctAns?.replaceAll(" ","").toLowerCase();
      console.log("selected Answer is:- ",ans1);
      const ans2 = ans?.replaceAll(" ","").toLowerCase();
      if(ans2===ans1){
        setScorearr([...scorearr,{id:idd,mark:4}]);
      }
      else{
        setScorearr([...scorearr,{id:idd,mark:-1}]);
      }
      setAns("");
    }
    const [flag,setFlag] = useState(true);
     function submitHandler(){
      let marks=0;
       scorearr.map((data)=>(marks=marks+data.mark));
      setScore(marks);
      setFlag(!flag);
      setScorearr([]);
      // setScore(0);
    }
    // const [flagg,setFlagg] = useState(false);
    // function clickHandler(){
    //   setFlagg(true);
    // }
  return (
    <div> { 
    flag? (
       <div> 
      <h1 className=' text-4xl ' key={state.array[0].data.quizname} >{state.array[0].data.quizname.toUpperCase()}</h1>
      <div>
        { state.array.map((val)=>
        (
        <div key={val.id} >
          {/* {console.log("val is ",val)} */}
          <h2 className='' > {val.id + 1} {". "} {val.data.ques} ? </h2>
          {/* {
            flagg ? (<Navigate to="/ques" state={{val}} />) : ( < button onClick={()=> 
              clickHandler() 
            }> <IoIosFastforward />
            </button> )
          } */}
          <div>
          <span>a.{ ")"}</span><span onClick = { eventHandler }  className='text-blue-600 visited:text-purple-600 hover:text-red-500 ' >  {val.data.option1}</span>
          </div>
          <div>
          <span>b.{ ")"}</span><span onClick = { eventHandler } className='text-blue-600 visited:text-purple-600 hover:text-red-500 ' >  {val.data.option2}</span>
          </div>
          <div>
            <span>c.{ ")"}</span><span onClick = { eventHandler } className='text-blue-600 visited:text-purple-600 hover:text-red-500 ' >  {val.data.option3}</span>
            </div>
            <div>
              <span>d.{ ")"}</span><span onClick = { eventHandler } className='text-blue-600 visited:text-purple-600 hover:text-red-500 ' >  {val.data.option4}</span>
            </div>
          {
            // ansflag && (val.id===ID) ?
            scorearr.some((p) => p.id === val.id) ?
            ( <button className=' border-2 rounded-md hover:text-purple-600 '  >  Answer Saved </button>) :
            ( <button onClick={()=>checkAns(val.data.ans,val.id)} className=' border-2 rounded-md hover:text-purple-600 ' > Save Ans </button>)
          }
          
        </div>
        )
        )}
      </div>
     <button onClick={submitHandler} >Submit</button>
      </div>
) : ( 
  <div>
  <h1>{state.array[0].data.quizname}</h1>
<div>Your Total Score is {score} </div>
</div> )
}
    </div>
  )
}

export default Quiz
