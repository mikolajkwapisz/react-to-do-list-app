import { useState, useEffect, useRef } from "react";
import "./createTask.css";
import { BsPencilFill } from "react-icons/bs";
import Select from '../../../components/Select/Select'
import { SelectOption, TaskType } from "../../../types/types";
import useWindowSize from "../../../hooks/useWindowSize";
import { TaskPreview } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useQueryMutation } from "../../../context/QueryContext";

interface CreateTaskProps {
  newId: any
}

const endDayOptions: SelectOption[] = [
  {
    value: "Monday",
    label: "Monday"
  },
  {
    value: "Tuesday",
    label: "Tuesday",
  },
  {
    value: "Wednesday",
    label: "Wednesday",
  },
  {
    value: "Thursday",
    label: "Thursday",
  },
  {
    value: "Friday",
    label: "Friday",
  },
  {
    value: "Saturday",
    label: "Saturday",
  },
  {
    value: "Sunday",
    label: "Sunday",
  },
];

const priorityOptions: SelectOption[] = [
  {
    value: 'Low',
    label: 'Low'
  },
  {
    value: 'Medium',
    label: 'Medium'
  },
  {
    value: 'High',
    label: 'High'
  }
];

const difficultyOptions: SelectOption[] = [
  {
    value: 1,
    label: 'Low'
  },
  {
    value: 2,
    label: 'Medium'
  },
  {
    value: 3,
    label: 'High'
  }
]

const categoryOptions: SelectOption[] = [
  {
    value: 'School',
    label: 'School'
  },
  {
    value: 'Work',
    label: 'Work'
  },
  {
    value: 'Home',
    label: 'Home'
  },
  {
    value: 'Fitness',
    label: 'Fitness'
  },
  {
    value: 'Study',
    label: 'Study'
  },
]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const date = new Date()
const dayIndex = date.getDay()
const currentDay = days[dayIndex]



const CreateTask = ({ newId}: CreateTaskProps) => {
  const [titleValue, setTitleValue] = useState('')
  const [priorityValue, setpriorityValue] = useState< typeof priorityOptions[0] | undefined >(priorityOptions[0])
  const [difficultyValue, setdifficultyValue] = useState< typeof difficultyOptions[0] | undefined >(difficultyOptions[0])
  const [endDayValue, setendDayValue] = useState< typeof endDayOptions[0] | undefined >(endDayOptions[0])
  const [categoryValue, setCategoryValue] = useState< typeof categoryOptions[0] | undefined >(categoryOptions[0])
  const {width} = useWindowSize()
  const navigate = useNavigate()
  const { addTaskMutation } = useQueryMutation()


  const [options, setOptions] = useState({
     id: newId, 
     title: titleValue == '' ? 'Title' :  titleValue,
     currentDay,
     category: categoryValue?.value,
     priority: priorityValue?.value,
     difficulty: difficultyValue?.value,
     endDay: endDayValue?.value,
     status: true
    })

  
  useEffect(() => {
    setOptions({
     id: newId, 
     title: titleValue == '' ? 'Title' :  titleValue,
     currentDay,
     category: categoryValue?.value,
     priority: priorityValue?.value,
     difficulty: difficultyValue?.value,
     endDay: endDayValue?.value,
     status: true
    })

  }, [titleValue, priorityValue, difficultyValue, endDayValue, categoryValue])


  return (
    <main className="add main__margin ">
      <form className="add__form" onSubmit={(e) => {
        e.preventDefault()
        navigate("/")
        }}>
        <div className="add__title">
          <h1>
            {" "}
            <BsPencilFill /> Create task
          </h1>
        </div>
        <div className="add__form--task--name">
          <label htmlFor="task">Title</label>
          <input 
            autoFocus
            type="text"
            placeholder="Enter your task title"
            maxLength={30}
            value={titleValue}
            onChange={ (e) => setTitleValue(e.target.value)}/>
        </div>
        <div className="add__form--task--specification">
          <div className="add__form--task--selector add__form--priority">
            <label htmlFor="priority">Priority</label>
            <Select 
              options={priorityOptions}
              value={priorityValue}
              onChange = {o => setpriorityValue(o)}
              fullWidth = { width < 1100 ? true : false}
              hoverColor = 'var(--color-orange)'
               />
          </div>
          <div className="add__form--task--selector add__form--endDay">
            <label htmlFor="end">Ending date</label>
            <Select 
              options={endDayOptions}
              value={endDayValue}
              onChange = {o => setendDayValue(o)}
              fullWidth = { width < 1100 ? true : false}
              hoverColor = 'var(--color-orange)'
               />
          </div>
          <div className="add__form--task--selector add__form--difficulty">
            <label htmlFor="difficulty">Difficulty</label>
            <Select 
              options={difficultyOptions}
              value={difficultyValue}
              onChange = {o => setdifficultyValue(o)}
              fullWidth = { width < 1100 ? true : false}
              hoverColor = 'var(--color-orange)'
               />
          </div>
        </div>
        <div className="add__form--task--category">
          <label htmlFor="category">Category</label>
          <Select 
              options={categoryOptions}
              value={categoryValue}
              onChange = {o => setCategoryValue(o)}
              fullWidth = {true}
              hoverColor = 'var(--color-orange)'
               />
        </div>
        <div className="add__form--task--preview">
          <label htmlFor="preview">Preview</label>
          <TaskPreview
            options = {options}/>

        </div>
        <div className="add__form--submit">
          <button
            onClick={ () => addTaskMutation.mutate(options)}>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default CreateTask;
