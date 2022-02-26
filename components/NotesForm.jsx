import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {
  // const NotesForm = ({notesList, ....}) => {


  useEffect(() => {
    console.log(props.notesList[0])
  }, [props.notesList])

  const handleChange = (event) => {
    console.log(event.target.value)
    props.setCurrentNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.setNotesList([...props.notesList, props.currentNote])//,

    // setTimeout(() => {
    //   console.log(props.notesList);

    // }, 5000)
    // console.log(props.notesList, 'yo'),
    // HOW TO SET UP THE ANONOMOUS CALLBACK TO SHOW UPDATED STATE
    // () => {
    //   return console.log(props.notesList, 'yo again')
    // }
    // console.log(props.notesList, 'yay');
    document.getElementById('note-input').value = '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.textInput} id="note-input" type="text" onChange={handleChange} placeholder="Enter Note Here" />
      <input type="submit" className={styles.submitButton} />
    </form>
  )
}

export default NotesForm;