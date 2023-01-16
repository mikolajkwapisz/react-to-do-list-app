import React from "react";
import "./addTask.css";
import { BsPencilFill } from "react-icons/bs";
import Select from 'react-select'

const endDayOptions: object[] = [
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

const prioAndDiffOptions: object[] = [
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
]

const AddTask = () => {
  return (
    <main className="add main__margin ">
      <form className="add__form">
        <div className="add__title">
          <h1>
            {" "}
            <BsPencilFill /> Create task
          </h1>
        </div>
        <div className="add__form--task--name">
          <label htmlFor="task">Title</label>
          <input type="text" placeholder="Enter your task title" required />
        </div>
        <div className="add__form--task--specification">
          <div className="add__form--task--selector add__form--priority">
            <label htmlFor="priority">Priority</label>
            <Select 
              className="selectBox"
              name="priority" 
              id="add__form--priority" 
              options={prioAndDiffOptions}/>

          </div>
          <div className="add__form--task--selector add__form--endDay">
            <label htmlFor="end">Ending date</label>
            <Select 
              className="selectBox"
              name="end" 
              id="add__form--endDay"
              options={endDayOptions}/>
          </div>
          <div className="add__form--task--selector add__form--difficulty">
            <label htmlFor="difficulty">Difficulty</label>
            <Select 
              className="selectBox"
              name="difficulty" 
              id="add__form--difficulty"
              options={prioAndDiffOptions}
              styles= {{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.hover ? 'var(--color-orange)' : 'var(--nav-bg-secondary)',
                  
                })
              }}
              />
          </div>
        </div>
        <div className="add__form--task--category"></div>
        <div className="add__form--task--preview"></div>
        <div className="add__form--submit"></div>
      </form>
    </main>
  );
};

export default AddTask;
