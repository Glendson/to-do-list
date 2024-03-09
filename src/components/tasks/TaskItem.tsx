import { Check, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import { TaskData } from "../../App";

interface TaskItemProps {
  data: TaskData;
  onDeleteTask: (id: string) => void;
  onTaskSwitch: ({ id, value }: { id: string; value: boolean }) => void;
}

export function TaskItem({ onDeleteTask, onTaskSwitch, data }: TaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(data.id);
  }

  function handleTaskSwitch(){
    onTaskSwitch({id: data.id, value: !data.isChecked })
  }

  return (
    <div className={styles.taskItem}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskSwitch}>
          <input type="checkbox" readOnly checked={data.isChecked} />
          <span
            className={`${styles.checkBox} ${
              data.isChecked && styles.checkBoxChecked
            }`}
          >
            {data.isChecked && <Check size={12} />}
          </span>
          <p
            className={`${styles.taskItemText} ${
              data.isChecked && styles.taskItemTextChecked
            }`}
          >
            {data.text}
          </p>
        </label>

        <button onClick={handleDeleteTask}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
