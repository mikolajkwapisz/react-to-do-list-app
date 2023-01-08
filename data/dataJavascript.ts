type taskElement = {
    id: number,
    title: string,
    currentDay: string,
    category: string,
    priority: string,
    difficulty: string,
    endDay: string,
    status: boolean
}

 const items: taskElement[] = [
  {
    id: 1,
    title: 'Math homework',
    currentDay: 'Monday',
    category: 'Study',
    priority: 'High',
    difficulty: 'Medium',
    endDay: 'Thursday',
    status: true
  },

  {
    id: 2,
    title: 'Trening',
    currentDay: 'Monday',
    category: 'Fitness',
    priority: 'Medium',
    difficulty: 'Medium',
    endDay: 'Tuesday',
    status: true
  },

  {
    id: 3,
    title: 'English homework',
    currentDay: 'Monday',
    category: 'Study',
    priority: 'Low',
    difficulty: 'Low',
    endDay: 'Wednesday',
    status: false
  },
]

export default items