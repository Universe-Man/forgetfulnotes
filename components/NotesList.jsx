import styles from '../styles/NotesList.module.scss';

const NotesList = (props) => {

  let notes = props.notesList.map((noteObj, index) => {
    return (
      <div key={index} className={styles.card}>
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