import styles from '../styles/Layout.module.css'
import Button from './Button'

export default function SearchBox(props) {
  return (
    <div className={styles.searchbox}>
      <div className={styles.boxgrid}>
        <div>
          <input type="text" placeholder="Buscar" />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  )
}