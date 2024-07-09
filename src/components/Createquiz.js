import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { add } from './redux/slices/QuizSlice';
import {useForm} from 'react-hook-form'
import {toast} from "react-hot-toast"

const Createquiz = () => {
    const [ques,setQues] = useState([]);
    const {quizData} = useSelector((state)=> state.quiz);
    useEffect(()=>{
      console.log("quiz data is:- ",quizData);
      localStorage.setItem("quizData",JSON.stringify(quizData));
      console.log("local Storage Item:- ",localStorage.getItem("quizData"));
    },[quizData])  
    const dispatch = useDispatch();
    const [quesflag,setquesflag] = useState(false);
    const [flag,setFlag] = useState(false);
    function saveQuiz(){
      dispatch(add(ques));
      setCnt(0);
      setQues([]);
      toast.success("Quiz Created Successfully");
      localStorage.removeItem("quesData");
      setquesflag(false);
      setFlag(false);
    }
    const { register , handleSubmit } = useForm();
    function handleCreateQuiz(){
        console.log("Hello");
        setFlag(true);
    }
    function submitHandler(e){
        console.log("form is submitted with data... ",e);
    }
    function QuesFlagHandler(){
      setquesflag(true);
    }
    //localStorage.removeItem("quesData");
    //localStorage.removeItem("quizData");
    const [cnt,setCnt] = useState(0);
    function addingques(data){
      console.log("data.quizname ",data.quizname);
      if(data.quizname.replaceAll(" ","") === "" 
      ||data.ans.replaceAll(" ","") === "" 
      || data.option1.replaceAll(" ","") === "" 
      || data.option2.replaceAll(" ","") === ""
      || data.option3.replaceAll(" ","") === ""
      || data.option4.replaceAll(" ","") === ""
      || data.ques.replaceAll(" ","") === ""    
    ){
        toast.error("All fields are Required ,Fill it.");
        return;
      }
      console.log("data is:- ",data);
      data.quizname=data.quizname+quizData.length;
      
      console.log("data.quizname after editing ",data.quizname);
      setQues([ 
        ...ques,
        {data:data,id:cnt},
      ]);
      setCnt(cnt+1);
      console.log("Ques data is:- ",ques);
      toast.success("question added successfully");
      setquesflag(false);
    }
  return (
    <div className=" " >
      
      <button onClick={handleCreateQuiz}>Tap to Create Quiz</button>
      {
        flag ? ( <div>
            <form onSubmit={handleSubmit(submitHandler)} >
            <div>
                < label htmlFor='quizname' > Enter quiz name </label>
                <br/>
                < input
                className='text-black  border-2 rounded-md'
                { ...register(`quizname`)}
                type='text'
                id='quizname' 
                />
            </div>
            </form>
            <div>
              {quesflag ? (
              <div>
                <form onSubmit={handleSubmit(addingques)} >
                <div>
                <label htmlFor='ques' > Enter the Question</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`ques`)}
                type='text'
                id='ques' 
                />
                </div>
                <div>
                <label htmlFor='option1' > Enter Option 1</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`option1`)}
                type='text'
                id='option1' 
                />
                </div>
                <div>
                <label htmlFor='option2' > Enter Option 2</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`option2`)}
                type='text'
                id='option2' 
                />
                </div>
                <div>
                <label htmlFor='option3' > Enter Option 3</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`option3`)}
                type='text'
                id='option3' 
                />
                </div>
                <div>
                <label htmlFor='option4' > Enter Option 4</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`option4`)}
                type='text'
                id='option4' 
                />
                </div>
                <div>
                <label htmlFor='ans'> Enter Answer</label>
                <br/>
                <input
                className='text-black  border-2 rounded-md'
                {...register(`ans`)}
                type='text'
                id='ans' 
                />
                </div>
                <button>Add above ques</button>
                </form>
                </div>
            ) : (<div><button onClick={QuesFlagHandler} className=' border-2 rounded-md hover:text-purple-600 ' >Add Ques</button> 
            <div></div> 
            <button onClick={saveQuiz} className=' border-2 rounded-md hover:text-purple-600 ' >Create Quiz</button></div>)}
            </div>

            </div>) : (<h1> {" "} </h1>)
      }
    </div>
  )
}

export default Createquiz