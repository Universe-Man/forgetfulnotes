import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {
  // const NotesForm = ({notesList, ....}) => {

  // 3 notes = change note
  // 4 notes = change note more
  // 5 notes = honestly i can't remember this at all

  // const forgetNotes = () => {

  // };

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
      }, 2000);
    };
  };
  // console.log(listOfNotes);
  // listOfNotes.forEach((note) => {
  // note.style.color = 'rgba(0,0,0,0)';
  // setTimeout(() => {
  //   firstNote.innerHTML = 'umm...err...what?';
  //   secondNote.innerHTML = 'umm...err...what? even more!';
  //   thirdNote.innerHTML = 'omg i seriously have no idea.';
  //   firstNote.style.color = 'rgba(0,0,0,1)';
  //   secondNote.style.color = 'rgba(0,0,0,1)';
  //   thirdNote.style.color = 'rgba(0,0,0,1)';
  // }, 2000);

  // });




  // if ()
  // };

  // note.style.color = 'rgba(0,0,0,0)';

  // setTimeout(() => {
  //   firstNote.innerHTML = 'umm...err...what?';
  //   secondNote.innerHTML = 'umm...err...what? even more!';
  //   thirdNote.innerHTML = 'omg i seriously have no idea.';
  //   firstNote.style.color = 'rgba(0,0,0,1)';
  //   secondNote.style.color = 'rgba(0,0,0,1)';
  //   thirdNote.style.color = 'rgba(0,0,0,1)';
  // }, 2000);



  useEffect(() => {
    // let notes = document.getElementsByClassName('noteCard');
    // console.log(props.notesList) // [...9, 10, 11, 12, 13] length - 3/4/5
    // debugger;
    // 3 notes
    if (props.notesList.length < 3) {
      return;
    } else if (props.notesList.length === 3) {
      let firstNote = document.getElementById(`noteCard-0`);
      forgetNotes([firstNote]);
    } else if (props.notesList.length === 4) {
      let firstNote = document.getElementById(`noteCard-1`);
      let secondNote = document.getElementById(`noteCard-0`);
      forgetNotes([firstNote, secondNote]);
      // forgetNote(secondNote);
    } else if (props.notesList.length > 4) {
      let firstNote = document.getElementById(`noteCard-${props.notesList.length - 3}`);
      let secondNote = document.getElementById(`noteCard-${props.notesList.length - 4}`);
      let thirdNote = document.getElementById(`noteCard-${props.notesList.length - 5}`);
      forgetNotes([firstNote, secondNote, thirdNote]);
      // forgetNote(secondNote);
      // forgetNote(thirdNote);
    };


    // let firstNote = document.getElementById(`noteCard-${props.notesList.length - 3}`);
    // let secondNote = document.getElementById(`noteCard-${props.notesList.length - 4}`);
    // let thirdNote = document.getElementById(`noteCard-${props.notesList.length - 5}`);

    // firstNote.style.color = 'rgba(0,0,0,0)';
    // secondNote.style.color = 'rgba(0,0,0,0)';
    // thirdNote.style.color = 'rgba(0,0,0,0)';

    // setTimeout(() => {
    //   firstNote.innerHTML = 'umm...err...what?';
    //   secondNote.innerHTML = 'umm...err...what? even more!';
    //   thirdNote.innerHTML = 'omg i seriously have no idea.';
    //   firstNote.style.color = 'rgba(0,0,0,1)';
    //   secondNote.style.color = 'rgba(0,0,0,1)';
    //   thirdNote.style.color = 'rgba(0,0,0,1)';
    // }, 2000);


    // if (props.notesList.length === 3) { // [0, 1, 2] Length = 3
    // props.notesList[props.notesList.length - 3] // [0]
    // let note = document.getElementById(`noteCard-${props.notesList.length - 3}`);
    // console.log(note);
    // // debugger;
    // note.style.color = 'rgba(0, 0, 0, 0)';
    // setTimeout(() => {
    //   // debugger;
    //   note.innerHTML = 'umm...err...what?';
    //   note.style.color = 'rgba(0, 0, 0, 1)';
    // }, 2000);
    // setTimeout(() => {
    // }, 3000);

    // for (let i = 0; i < props.notesList.length; i++) {
    //   props.notesList
    // }
    // 3 NOTES
    // first note in list
    // fade out
    // let firstNote = document.getElementById('noteCard-0');
    // debugger;
    // console.log(firstNote, 'hi look');
    // firstNote.style.color = 'rgba(0, 0, 0, 0.1)';
    // firstNote.innerHTML = // new text



    // props.notesList[0] = 'yay'
    // notes[0].classList.remove('fade-away');

    // change text
    // fade in
    // } else if (props.notesList.length === 4) {
    // 4 NOTES
    // let note = document.getElementById(`noteCard-${props.notesList.length - 4}`);
    // console.log(note);
    // // debugger;
    // note.style.color = 'rgba(0, 0, 0, 0)';
    // setTimeout(() => {
    //   // debugger;
    //   note.innerHTML = 'umm...err...what? even more!';
    //   note.style.color = 'rgba(0, 0, 0, 1)';
    // }, 2000);


    // } else if (props.notesList.length >= 5) {
    // 5+ NOTES
    // }

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