import styles from '../styles/Layout.module.css'
import Button from './Button'
import { IconSearch } from './Icones'

export default function SearchBox(props) {
  return (
    <div className={styles.searchbox}>
      <div className={styles.boxgrid}>
        <div className={styles.inputicon}>
          {IconSearch}
          <Button color="" className={styles.icons}>
            {
              
            }
          </Button>
          <input type="text" placeholder="Buscar" />
        </div>
        <Button color="red" >Filtrar por</Button>
      </div>
    </div>
  )
}