import { Check, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import { TaskData } from "../../App";

interface TaskItemProps {
  data: TaskData;
  deleteTask: (id: number) => void;
}

export function TaskItem({ deleteTask, data }: TaskItemProps) {
  function handleDeleteTask() {
    deleteTask(data.id);
  }

  return (
    <div className={styles.taskItem}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly />
          <span className={styles.taskItemText}>
            <Check size={12} />
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            natus libero aut est eius! Voluptates quam dolorem nulla magnam.
          </p>
        </label>

        <button onClick={handleDeleteTask}>
          <Trash className={styles.trashIcon} size={16} color="#808080" />
        </button>
      </div>
    </div>
  );
}
