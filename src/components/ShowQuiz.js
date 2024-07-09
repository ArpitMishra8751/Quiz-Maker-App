import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, NavLink} from 'react-router-dom';
import { IoIosFastforward } from "react-icons/io";

const ShowQuiz = () => {
    const {quizData} = useSelector((state)=>state.quiz);
    const [flag,setFlag] = useState(false);
    const [id,setId] = useState();
    function clickHandler (idd){
      setId(idd);
      setFlag(true); 
    }
  return (
    <div >
      <div>
      Select Any Quiz to Practice
      </div>
      {/* <div> */}
      {/* Total Quizes are {quizData?.length} */}
      {/* </div> */}
      {console.log("Total quiz are:- ",quizData)}
      {
        quizData?.length > 0 ? ( 
          <div>
          { 
            quizData.map( 
              (array)=>(
                <div key={array[0].data.quizname} >
                {console.log("array :- ",array)}
                  {array[0].data.quizname}
                  {
                    (flag && (id===array[0].data.quizname)) ? ( <div>
                      {console.log("array data is:- ",array)}
                      <Navigate to={"/paper"} state={{array}} />
                      </div> ) : ( < button onClick={()=> 
                      clickHandler(array[0].data.quizname) 
                    }> <IoIosFastforward />
                    </button> )
                  }
                  
                </div>
              )
            )
          } 
          </div> ) : ( <div> 
            No Quizzes are Found
            <div></div>
            <NavLink to="/create-quiz"> Tap To Create Quiz </NavLink>
          </div> )
      }
    </div>
  )
}

export default ShowQuiz