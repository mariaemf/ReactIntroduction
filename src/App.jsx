import { useState } from 'react';
import { Header } from './componentes/Header';
import {Post} from './componentes/Post';
import './global.css';
import  styles from './componentes/App.module.css';
import { Sidebar } from './componentes/sidebar';

const posts = [
  {
    id: 1,
    author: {
    avatarUrl: 'https://github.com//mariaemf.png',
    name:'Maria Freitas',  
    role: 'Desenvolvedora de Software'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisheAt: new Date('2022-09-05 20:00:00'),
  },
  {
    id: 2,
    author: {
    avatarUrl: 'https://github.com//mateussp97.png',
    name:'Mateus de Souza',  
    role: 'Engenheiro de Software'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisheAt: new Date('2022-09-07 20:00:00'),
  },
];




export function App() {
 
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
     <Sidebar/>

        <main>
        {posts.map(post => {
        
          return (
           <Post
           key={post.id}
           author={post.author} 
           content={post.content}
           publisheAt={post.publisheAt}
        
        />
      )
      })}
        </main>
      </div>
    </div>
  )
}
