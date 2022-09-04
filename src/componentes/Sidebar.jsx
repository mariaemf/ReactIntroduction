import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
export function Sidebar() {

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1660526224364-8f71a4a09514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" />
    <div className={styles.profile}>
     <Avatar hasBorder={true} src="https://github.com//mariaemf.png"/>

      <strong>Maria Freitas</strong>
      <span>Web Developer</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Edite seu perfil
      </a>
    </footer>
    </aside>
  )
}