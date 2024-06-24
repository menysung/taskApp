import doneIcon from "./assets/check-mark-button.png";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";

import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

import { useEffect, useState } from "react";
import "./App.css";

//처음 시작할 떄 저장된 문자열 데이터를 갖고온다
const saveTasks = localStorage.getItem("tasks");
//각각의 3개의 컬럼에 맞는 타입의 데이터 전달
function App() {
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="할 일"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="진행중"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="완 료"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
