import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Buy foods", deadline: "Tomorrow" },
      { id: 5, title: "Ex",description: "Just forget it", deadline: "yesterday" }

    ]
  });

  return (
    // <div className="container">
    //   <h1>Tasky</h1>
    //   <Task title="Dishes" deadline="Today" description="Empty diswasher"/>
    //   <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"/>
    //   <Task title="Tidy" deadline="Today" description="nope"/>
    // </div>
    <div className="container">
      <h1>Tasky</h1>
      {/* <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} /> */}
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />

    //这个地方我用自己的话来看明白一点吧
    //首先是map() 这个功能，自带遍历，数组里的每一个元素都要被处理
    //被谁处理？被传进去的函数处理
    //然后这个传进去的函数，就是拿着每一个task，将其按一定格式初始化
    //现在，有一个问题，就是，我知道数组里的每一个元素都可以被这样处理
    //那么，这个每一个元素，我怎么抓住他，
    //如果是随便明明，那是不是传进去元素被抓住的方法太单一
  ))} 
    
    </div>
  );
}

export default App;
