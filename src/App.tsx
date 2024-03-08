import { PlusCircle } from "phosphor-react";

import { v4 as uuid } from "uuid";

import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";

import { HeaderTasks } from "./components/tasks/Header";
import { Empty } from "./components/tasks/Empty";
import { TaskItem } from "./components/tasks/TaskItem";

import styles from "./App.module.css";

import "./global.css";
import { useState } from "react";

export interface TaskData {
  id: string;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    const addNewTask: TaskData = {
      id: uuid(),
      text: newTaskText,
      isChecked: false,
    };

    setTasks([...tasks, addNewTask]);
    setNewTaskText("");
  }

  function handleNewTextTaskChange() {
    setNewTaskText(event?.target.value);
  }

  function handleDeleteTasks() {}

  return (
    <main>
      <Header />

      <section className={styles.taskInfo}>
        <div className={styles.addTask}>
          <Input onChange={handleNewTextTaskChange} value={newTaskText} />
          <Button onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={16} fill="bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.taskList}>
          <HeaderTasks tasksCompleted={0} tasksCount={0} />

          {tasks.length > 0 ? (
            
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                data={tasks}
                deleteTask={handleDeleteTasks}
              />              
            ))
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
