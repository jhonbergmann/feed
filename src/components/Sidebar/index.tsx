import {PencilLine} from 'phosphor-react'

import {Avatar} from '@/components'
import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://raw.githubusercontent.com/jhonbergmann/feed/main/src/assets/users/leslie-alexander.png?token=GHSAT0AAAAAACTG2WD5UUPRMM7LVMDTTW24ZT7KFRA" />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
