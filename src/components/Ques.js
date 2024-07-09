import React from 'react'
import {useLocation } from 'react-router-dom'

const Ques = () => {
    const {state}= useLocation();
    console.log("data from Navigate prop is:- ",state);
  return (
    <div>
      
    </div>
  )
}

export default Ques
