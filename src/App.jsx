import { useState } from 'react';
import { Header } from './componentes/Header';
import {Post} from './Post';
import './global.css';
import  styles from './componentes/App.module.css';
import { Sidebar } from './componentes/sidebar';


export function App() {
 
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
     <Sidebar/>
        <main>
        <Post 
        author="Maria Freitas" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum fuga animi quam est consectetur voluptatem dolor? Qui ipsam ducimus consequuntur nam numquam doloribus debitis, quibusdam, repudiandae veritatis esse illo."
      />
      <Post
      author="Mateus Souza"
      content="Novo Site muito legal"
      />
        </main>

      </div>
   
    </div>
  )
}
