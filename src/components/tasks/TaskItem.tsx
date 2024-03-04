import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div className={styles.taskItem}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly />
          <span className={styles.taskItemText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            natus libero aut est eius! Voluptates quam dolorem nulla magnam.
          </span>
        </label>

        <button>
            <Trash size={16} color="#808080" />
        </button>
      </div>
    </div>
  );
}
