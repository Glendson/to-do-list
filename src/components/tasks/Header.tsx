import styles from "./Header.module.css";

interface HeaderTasksProps {
  tasksCount: number;
  tasksCompleted: number;
}

export function HeaderTasks({ tasksCount, tasksCompleted }: HeaderTasksProps) {
  return (
    <header className={styles.headerTask}>
      <aside className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>{tasksCount}</span>
      </aside>

      <aside className={styles.completedTasks}>
        <p>Concluídas</p>
        <span>{tasksCompleted}</span>
      </aside>
    </header>
  );
}
