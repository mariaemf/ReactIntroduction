import styles from './Avatar.module.css'

export function Avatar(props) {
  
  return(
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.Avatar}
       src={props.src} />


  );
}