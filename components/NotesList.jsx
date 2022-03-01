import styles from '../styles/NotesList.module.scss';
import clsx from 'clsx';

const NotesList = (props) => {

  let notes = props.notesList.map((noteObj, index) => {
    return (
      // <div key={index} className={clsx(styles.card, 'noteCard')}>
      <div id={`noteCard-${index}`} key={index} className={styles.card}>

        {noteObj}
      </div>
    )
  })
  return (
    <div className={styles.notesContainer}>{notes}</div>
    // <div></div>

  )
}

export default NotesList;