import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {

  const forgetNotes = (listOfNotes) => {
    // console.log(listOfNotes[0].innerHTML.split(' '));


    // let rememberedWords = [];





    for (let i = 0; i < listOfNotes.length; i++) {
      listOfNotes[i].style.color = 'rgba(0,0,0,0)';
      let words = getWords(listOfNotes[i]);
      console.log('yoyoyo', words);

      setTimeout(() => {
        listOfNotes[0].innerHTML = words;
        if (i === 1) {
          listOfNotes[1].innerHTML = words;
        };
        if (i === 2) {
          listOfNotes[2].innerHTML = 'yeah sorry, i honestly have no idea what this note was.';
        };
        listOfNotes[i].style.color = 'rgba(0,0,0,1)';
      }, 1000);
    };
  };
  // 2 words (2) / 3 words (3) / 4 words (1/4) / 5 words (1/3/5) / 6+ words (1/3/4/6)
  const getWords = (note) => {
    let words = note.innerHTML.split(' ');
    let random = Math.floor(Math.random() * 10);
    // console.log(random);

    // return words;
    if (words.length === 1) {
      if (random % 2 === 0) {
        return 'umm...what?';
      } else {
        return 'yeah i spaced out there';
      };
    } else if (words.length === 2) {
      if (random % 2 === 0) {
        return `something ${words[1]}`;
      } else {
        return `uuuhhhh....${words[1]}?`;
      };
    } else if (words.length === 3) {
      if (random % 2 === 0) {
        return `maybe something ${words[2]}`;
      } else {
        return `uuuhhhh....${words[2]}?`;
      };
    } else if (words.length === 4) {
      if (random % 2 === 0) {
        return `${words[0]} maybe something ${words[3]}`;
      } else {
        return `it's like ${words[0]} or yeah like and ${words[3]}...maybe?`;
      };

    } else if (words.length === 5) {
      if (random % 2 === 0) {
        return `${words[0]}...errr...ummm....also ${words[2]} and ${words[4]}`;
      } else {
        return `i know it ended with ${words[4]}`;
      };
    } else {
      if (random % 2 === 0) {
        return `${words[0]}......ummmm...i know you said ${words[2]} and ${words[3]} or like something to do with ${words[5]} but i don't really know`;
      } else {
        return `honestly, i have no idea but recall you mentioning a ${words[3]} and ${words[4]} or something`;
      };
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