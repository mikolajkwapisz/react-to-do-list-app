import "./App.css";
import { AddTask, EditTask, Home, Navbar,  Missing } from "./containers";
import { Route, Routes } from "react-router-dom";
import Task from "./components/Task/Task";
import { useEffect, useState } from "react";
// import apiRequest from "./api/apiRequest";





function App() {
  const API_URL = 'http://localhost:3500/tasks'

  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        setTasks(data)
        
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    } 

      fetchData()
  }, [])


  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
        <Home 
          tasks = {tasks}
          isLoading = {isLoading}
          />
          }
        />
        <Route path="/add" element={
        <AddTask 
          />
        } />
        <Route path="/edit/:id" element={<EditTask />} />
        {/* <Route path="/task/:id" element={<Task />} /> */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
