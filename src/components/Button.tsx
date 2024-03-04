import styles from "./Button.module.css";

export function Button({
  children, ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return <button className={styles.button} {...props} >
    {children}
  </button>
}
