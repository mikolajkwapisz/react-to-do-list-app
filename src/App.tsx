import "./App.css";
import { AddTask, EditTask, Home, Navbar,  Missing } from "./containers";
import { Route, Routes } from "react-router-dom";
import Task from "./components/Task/Task";
import items from '../data/dataJavascript'
import { useState } from "react";






function App() {
  const [tasks, setTasks] = useState(items)


  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
        <Home 
          tasks = {tasks}
          />
          }
        />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
