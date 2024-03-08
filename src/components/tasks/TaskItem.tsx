import { Check, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import { TaskData } from "../../App";

interface TaskItemProps {
  data: TaskData;
  onDeleteTask: (id: string) => void;
}

export function TaskItem({ onDeleteTask, data }: TaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(data.id);
  }

  return (
    <div className={styles.taskItem}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly />
          <span className={styles.taskItemText}>
            {data.isChecked && <Check size={12} />}
          </span>
          <p>{data.text}</p>
        </label>

        <button onClick={handleDeleteTask}>
          <Trash className={styles.trashIcon} size={16} color="#808080" />
        </button>
      </div>
    </div>
  );
}
