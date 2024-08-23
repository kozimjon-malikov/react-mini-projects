import { Link, Routes } from 'react-router-dom'
import { BrowserRouter,Route,Router } from 'react-router-dom'
import Main from './controllers/Main'
import Task1 from './components/task-1/Task1'
import Task2 from './components/task-2/Task2'
import Task3 from './components/task-3/Task3'
import './assets/css/styles.css';
import Counter from './components/task-4-c/Counter'
import Timer from './components/task-5-c/Timer'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/task-1" element={<Task1 />} />
        <Route path='/task-2' element={<Task2/>} />
        <Route path='/task-3' element={<Task3/>} />
        <Route path='/task-4' element={<Counter/>} />
        <Route path='/task-5' element={<Timer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
