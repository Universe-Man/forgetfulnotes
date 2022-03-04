import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {

  const forgetNotes = (listOfNotes) => {
    for (let i = 0; i < listOfNotes.length; i++) {
      listOfNotes[i].style.color = 'rgba(0,0,0,0)';
      setTimeout(() => {
        listOfNotes[0].innerHTML = 'umm...err...what?';
        if (i === 1) {
          listOfNotes[1].innerHTML = 'umm...err...what? even more!';
        };
        if (i === 2) {
          listOfNotes[2].innerHTML = 'omg i seriously have no idea.';
        };
        listOfNotes[i].style.color = 'rgba(0,0,0,1)';
      }, 1000);
    };
  };

  useEffect(() => {
    if (props.notesList.length < 3) {
      return;
    } else if (props.notesList.length === 3) {
      let firstNote = document.getElementById(`noteCard-0`);
      forgetNotes([firstNote]);
    } else if (props.notesList.length === 4) {
      let firstNote = document.getElementById(`noteCard-1`);
      let secondNote = document.getElementById(`noteCard-0`);
      forgetNotes([firstNote, secondNote]);
    } else if (props.notesList.length > 4) {
      let firstNote = document.getElementById(`noteCard-${props.notesList.length - 3}`);
      let secondNote = document.getElementById(`noteCard-${props.notesList.length - 4}`);
      let thirdNote = document.getElementById(`noteCard-${props.notesList.length - 5}`);
      forgetNotes([firstNote, secondNote, thirdNote]);
    };
  }, [props.notesList]);

  const handleChange = (event) => {
    console.log(event.target.value);
    props.setCurrentNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (props.currentNote === '') {
      return;
    };
    props.setNotesList([...props.notesList, props.currentNote]);
    props.setCurrentNote('');
    document.getElementById('note-input').value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.textInput} id="note-input" type="text" onChange={handleChange} placeholder="Enter Note Here" />
      <input type="submit" value="Remember" className={styles.submitButton} />
    </form>
  )
};

export default NotesForm;