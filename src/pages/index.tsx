import styles from '../styles/Layout.module.css'
import Layout from '../components/Layout'
import SearchBox from '../components/SearchBox'



export default function Home() {
  return (
    <div className={styles.container}>
      <Layout className={styles.layout}>
        <div>
          <h1>Teste Datlo</h1>
        </div>

        <SearchBox />
      </Layout>
    </div>
  )
}
