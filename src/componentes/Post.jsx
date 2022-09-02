import { Comment } from './comment';
import styles from './Post.module.css';

export function Post() {
  return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/mateussp97.png" alt="" />
        <div className={styles.authorInfor}>
         <strong>Mateus de Paula</strong>
          <span>Web Developer</span>
        </div>  
      </div> 
      <time title='11 de agosto ás 19:53' dateTime='2022-09-01 19:52:30-'>Publica há 1h</time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

     <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

     <p>👉{' '} <a href=''>jane.design/doctorcare</a></p>

   
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