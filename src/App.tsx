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
import { ChangeEvent, useState } from "react";

export interface TaskData {
  id: string;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const taskEmpty = newTaskText.length == 0;

  function handleCreateNewTask() {
    if (taskEmpty) return;

    const addNewTask = {
      id: uuid(),
      text: newTaskText,
      isChecked: false,
    };

    setTasks([...tasks, addNewTask]);
    setNewTaskText("");
  }

  function handleNewTextTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleDeleteTask(id: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(taskWithoutDeletedOne);
  }

  return (
    <main>
      <Header />

      <section className={styles.taskInfo}>
        <div className={styles.addTask}>
          <Input onChange={handleNewTextTaskChange} value={newTaskText} />
          <Button onClick={handleCreateNewTask} disabled={taskEmpty}>
            Criar
            <PlusCircle size={16} fill="bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.taskList}>
          <HeaderTasks tasksCompleted={0} tasksCount={tasks.length} />

          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                data={tasks}
                onDeleteTask={handleDeleteTask}
                isChecked={true}
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
