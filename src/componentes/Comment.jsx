import { LinkSimple, ListChecks, LockSimple, ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

export function Comment({ content, onDeleteComment }){

  function handleDeleteComment(){
    onDeleteComment(content);
  }
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src='https://github.com//mariaemf.png'/>
     <div className={style.commentBox}>
     
      <div className={style.commentContent}>
       <header>
          <div className={style.authorAndTime}>

            <strong>Maria Freitas</strong>
            <time title='11 de agosto ás 19:53' dateTime='2022-09-01 19:52:30-'>Cerca de 1 hora atrás</time>
     
          </div>

          <button onClick={handleDeleteComment} title='Deletar Comentário'>
            <Trash size={24} />
          </button>
        </header>

        <p>{content}</p>
     </div>
      
        <footer>
          <button>
          <ThumbsUp size={24} />
            Aplaudir <span>2</span>
          </button> 
        </footer>
     </div>
    </div>
  )
}
