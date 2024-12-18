import "./App.css";
import { CreateTask, EditTask, Home, Navbar,  Missing } from "./containers";
import { Route, Routes } from "react-router-dom";
import { useQueryMutation } from "./context/QueryContext";
import { useState } from "react";
import { DeleteContainer } from "./components";





function App() {
  
  const { status, data, error} = useQueryMutation()
  const [isDeleteContainerVisible, setIsDeleteContainerVisible] = useState(false)
  console.log(data)



  if(status === "loading") return <h1 className="p__center">Loading ...</h1>
  if(error) return <h1 style={{textAlign: "center"}}>Failed to fetch data</h1>
  

  
  return (
    <div className="App">

      <div className="App__main">
      <Navbar setIsDeleteContainerVisible={setIsDeleteContainerVisible}/>
      <DeleteContainer isVisible ={isDeleteContainerVisible} setIsVisible = {setIsDeleteContainerVisible} data={data}/>
      </div>

      <Routes>
          <Route path="/" element={
            <Home 
              tasks = {data}
              />}
          />

        <Route path="/add" element={
          <CreateTask 
            newId = {data.length == 0 ? "1" : (Number(data[ data.length -1 ].id) + 1).toString()  }
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
