import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {
  // const NotesForm = ({notesList, ....}) => {

  // 3 notes = change note
  // 4 notes = change note more
  // 5 notes = honestly i can't remember this at all

  useEffect(() => {
    let notes = document.getElementsByClassName('noteCard');
    console.log(props.notesList)
    // debugger;
    // 3 notes
    if (props.notesList.length > 2) {
      // first note in list
      // fade out
      // console.log(props.notesList[0], '3 or more');
      // notes[0].classList.add('${styles.fade-away}');
      // props.notesList[0].style.color = 'rgba(0, 0, 0, 0.1)';
      let firstNote = document.getElementById('noteCard-0');
      // debugger;
      // console.log(firstNote, 'hi look');
      firstNote.style.color = 'rgba(0, 0, 0, 0.1)';
      firstNote.innerHTML = // new text



        props.notesList[0] = 'yay'
      // notes[0].classList.remove('fade-away');

      // change text
      // fade in
    }
  }, [props.notesList])

  const handleChange = (event) => {
    console.log(event.target.value)
    props.setCurrentNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (props.currentNote === '') {
      return;
    };
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
    props.setCurrentNote('');
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