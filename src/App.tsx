import { PlusCircle } from "phosphor-react";

import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";

import { HeaderTasks } from "./components/tasks/Header";
import { Empty } from "./components/tasks/Empty";
import { TaskItem } from "./components/tasks/TaskItem";

import styles from "./App.module.css";

import "./global.css";

export interface TaskData {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  return (
    <main>
      <Header />

      <section className={styles.taskInfo}>
        <div className={styles.addTask}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} fill="bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.taskList}>
          <HeaderTasks tasksCompleted={0} tasksCount={0} />

          <TaskItem />
        </div>
      </section>
    </main>
  );
}

export default App;
