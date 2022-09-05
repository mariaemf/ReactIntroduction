import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';





export function Post(props) {

  return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar hasBorder={true} 
          src={props.author.avatarUrl} alt="" />
        <div className={styles.authorInfor}>
         <strong>{props.author.name}</strong>
          <span>{props.author.role}</span>
        </div>  
      </div> 
      <time title='11 de agosto ás 19:53' dateTime='2022-09-01 19:52:30-'>Publica há 1h</time>
    </header>
    <div className={styles.content}>
  
   
     <p>
      <a href=''>#novoprojeto </a>{'  '}
      <a href=''>#nlw </a>{'  '}
      <a href=''>#rocketseat</a></p>
    </div>
    <form className={styles.comentForm}>
      <strong>Deixe o seu Feedback </strong>
      <textarea 
      placeholder='Deixe um comentário'
      />
      <footer>
      <button type='submit'>Publicar</button></footer>
    </form>
    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />

    </div>
  </article>

  )
}