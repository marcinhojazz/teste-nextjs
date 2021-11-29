import styles from '../styles/Layout.module.css'

interface ButtonProps {
  nome: string
  color: string
  radius: string
  onClick: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.botao}>
      {props.children}
    </button>
  )
}