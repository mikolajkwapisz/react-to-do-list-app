import './taskStatus.css'


interface TaskStatusProps {
    priority: string,
    difficulty: number,
    endDay: string
}

interface StatusElementProps {
  colorValue: string | undefined
}


export default function TaskStatus ({priority, difficulty, endDay}: TaskStatusProps){
  let difficultyNumber: number = difficulty
  const priorityColor = getPriorityColor(priority)
  const day = endDay.slice(0, 3)
  
  function checkColorStyle(): undefined | string{
      // Checking if current difficulty block should be active 
      if(difficultyNumber > 0) {
        // If difficultyNumber is bigger than 0 then block should be active 
        difficultyNumber--
        return priorityColor
      } else {
        return "#D9D9D9"
      }
  }
  


  return (
    <>
      <div 
        className='task__status--end'
        style={{backgroundColor: `${priorityColor}`}}>{day}</div>
      <div className='task__status--priority'>

         <StatusElement colorValue={checkColorStyle()} />
         <StatusElement colorValue={checkColorStyle()} />
         <StatusElement colorValue={checkColorStyle()} />
      </div>
    </>
  )
}



function StatusElement ({colorValue}: StatusElementProps ) {
  return <div style={{backgroundColor: colorValue}}></div>
}
function getColorStyle(variableName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}

function getPriorityColor (value: string) {
  if(value.toLowerCase() === 'high') {
    return getColorStyle('--priority-color-high');
  } else if(value.toLowerCase() === 'medium') {
    return getColorStyle('--priority-color-medium');
  } else if (value.toLowerCase() === 'low'){
    return getColorStyle('--priority-color-low')
  }
}