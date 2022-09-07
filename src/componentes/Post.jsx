
import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';


export function Post({author, publishedAt, content}) {
  const publishedDateFormatted = new Intl.DateTimeFormat('PT-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar hasBorder={true} 
          src={author.avatarUrl} alt="" />
        <div className={styles.authorInfor}>
         <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>  
      </div> 
      <time title='07 de Setetembro às 17:17h' dateTime='2022-09-01 19:52:30-'> 
      {publishedDateFormatted}
      
      </time>
    </header>
    <div className={styles.content}>
      {content.map(line => { 
        if (line.type === 'paragraph') {
          return <p>{line.content}</p>
        } else if(line.type === 'link'){
          return <p><a href="#">{line.content}</a></p>
        }
      })}

  
   
     
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