import { Trash } from 'phosphor-react';
import style from './Comment.module.css';

export function Comment(){
  return (
    <div className={style.comment}>
      <img src='https://github.com//mariaemf.png'/>
     <div className={style.commentBox}>
     
      <div className={style.commentContent}>
       <header>
          <div className={style.authorAndTime}>
        
          
            <strong>Maria Freitas</strong>
        
            <time title='11 de agosto ás 19:53' dateTime='2022-09-01 19:52:30-'>Cerca de 1 hora atrás</time>
     
      
         
          </div>
          <button title='Deletar Comentário'>
            <Trash size={20} />
          </button>
        </header>

        <p>Muito bom Heloisa, parabéns</p>
     </div>
      
        <footer>
          <button>
            <thumbsUp />
            Aplaudir <span>2</span>
          </button> 
        </footer>
     </div>
    </div>
  )
}
