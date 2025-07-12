import React, { useState } from 'react';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import VideoTask from './pages/VideoTask';

const App = () => {
  const [activeTask, setActiveTask] = useState("task1");

  return (
    <div>
      
      <div className="bg-gray-200 p-4 flex gap-4 justify-center">
        <button onClick={() => setActiveTask("task1")}>Task 1</button>
        <button onClick={() => setActiveTask("task2")}>Task 2</button>
        <button onClick={() => setActiveTask("task3")}>Task 3</button>
        <button onClick={() => setActiveTask("video")}>Video Task</button>
      </div>

      
      <div className="p-4">
        {activeTask === "task1" && <Task1 />}
        {activeTask === "task2" && <Task2 />}
        {activeTask === "task3" && <Task3 />}
        {activeTask === "video" && <VideoTask/>}
      </div>
    </div>
  );
};

export default App;
