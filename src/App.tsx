import "./App.css";
import { CreateTask, EditTask, Home, Navbar,  Missing } from "./containers";
import { Route, Routes } from "react-router-dom";
import { useQueryMutation } from "./context/QueryContext";





function App() {
  
  const { status, data, error} = useQueryMutation()
  console.log(data)


  if(status === "loading") return <h1 className="p__center">Loading ...</h1>
  if(error) return <h1>{JSON.stringify(error)}</h1>
  

  
  return (
    <div className="App">

      <Navbar />

      <Routes>
          <Route path="/" element={
            <Home 
              tasks = {data}
              />}
          />

        <Route path="/add" element={
          <CreateTask 
          newId = {data.length == 0 ? 1 : (data[ data.length -1 ].id + 1) }
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
