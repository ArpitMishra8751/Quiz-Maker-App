import { Route, Routes } from 'react-router-dom';
import './App.css';
import Createquiz from './components/Createquiz';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShowQuiz from './components/ShowQuiz';
import Quiz from './components/Quiz';
import Ques from './components/Ques';
function App() {
  return (
    <div className="App bg-slate-900 w-full max-h-full min-h-screen">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/create-quiz' element={ <Createquiz/> } />
        <Route path='/quiz' element={ <ShowQuiz/> } />
        <Route path='/paper' element={ <Quiz/> } />
        <Route path="/ques" element={ <Ques/> } />
      </Routes>
    </div>
  );
}

export default App;
