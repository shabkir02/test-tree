import type { NextPage } from 'next'
import { Folder } from '../components/folder'
import { data } from '../shared/mock'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      {data.map((folder) => (
        <Folder key={folder.id} folderData={folder} />
      ))}
    </div>
  )
}

export default Home
