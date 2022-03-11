import { useEffect } from 'react';
import styles from '../styles/NotesForm.module.scss'

const NotesForm = (props) => {

  const forgetNotes = (listOfNotes) => {

    // change notes
    // option of forgetting
    // totally forgot

    for (let i = 0; i < listOfNotes.length; i++) {
      listOfNotes[i].style.color = 'rgba(0,0,0,0)';
      // let random = Math.floor(Math.random() * 10) % 2 === 0;
      // let words = getWords(listOfNotes[i]);
      // const semiForgetPhrases = [
      //   "oh dear, what was it again?",
      //   "hmmm yes i just had it",
      //   "oh man it's right on the tip of my tongue",
      //   "i may need you to repeat some of this",
      //   "oh god i feel this one starting to slip",
      //   "oops, i think i wasn't recording",
      //   "uh-oh this one is slipping my mind",
      //   "oy vey! this is a lot to remember",
      //   "sorry i spaced out a bit there for a second",
      //   "this note was.....ughhhhh....",
      //   "oh this was about something, right?",
      //   "hmmm yeah i'm losing this one",
      // ];
      // const totalForgetPhrases = [
      //   "birds aren't real",
      //   "will you blame the code if i just say undefined",
      //   "this was definitely null, and no i've never heard of gaslighting",
      //   "yeah sorry i have no idea",
      //   "look over there! *runs away*",
      //   "yikes! there's not going to a quiz on these notes, right?",
      //   "i'm pretty sure you never told me anything",
      //   "oh no, i'm blind.....I'M BLIND!!",
      //   "renew car warranty",
      //   "i plead the fifth",
      //   "yeah sorry, i honestly have no idea what this note said",
      //   "in my defense, you've asked me to remember a lot of things",
      // ];
      setTimeout(() => {
        // debugger
        if (i === 0) {
          let words = getWords(listOfNotes[i]);
          listOfNotes[0].innerHTML = words;
        }
        if (i === 1) {
          const semiForgetPhrases = [
            "oh dear, what was it again?",
            "hmmm yes i just had it",
            "oh man it's right on the tip of my tongue",
            "i may need you to repeat some of this",
            "oh god i feel this one starting to slip",
            "oops, i think i wasn't recording",
            "uh-oh this one is slipping my mind",
            "oy vey! this is a lot to remember",
            "sorry i spaced out a bit there for a second",
            "this note was.....ughhhhh....",
            "oh this was about something, right?",
            "hmmm yeah i'm losing this one",
          ];
          listOfNotes[1].innerHTML = semiForgetPhrases[Math.floor(Math.random() * semiForgetPhrases.length)];
        };
        if (i === 2) {
          const totalForgetPhrases = [
            "birds aren't real",
            "will you blame the code if i just say undefined",
            "this was definitely null, and no i've never heard of gaslighting",
            "yeah sorry i have no idea",
            "look over there! *runs away*",
            "yikes! there's not going to a quiz on these notes, right?",
            "i'm pretty sure you never told me anything",
            "oh no, i'm blind.....I'M BLIND!!",
            "renew car warranty",
            "i plead the fifth",
            "yeah sorry, i honestly have no idea what this note said",
            "in my defense, you've asked me to remember a lot of things",
          ];
          listOfNotes[2].innerHTML = totalForgetPhrases[Math.floor(Math.random() * totalForgetPhrases.length)];
        };
        listOfNotes[i].style.color = 'rgba(0,0,0,1)';
      }, 1000);
    };
  };
  // TODO: still some issue on the number of loops and the 2nd iteration is getting over written with the replacement note
  const getWords = (note) => {
    let words = note.innerHTML.split(' ');
    if (words.length < 3) {
      // 1 or 2
      const shortPhrases = [
        `you said ${words[words.length - 1]}, right?`,
        `pretty sure it was something like ${words[words.length - 1]}`,
        `something like ${words[words.length - 1]}, yeah?`,
        `i know you mentioned ${words[words.length - 1]}`,
        `oh boy, maybe you mentioned ${words[words.length - 1]} or something`,
      ];
      return shortPhrases[Math.floor(Math.random() * shortPhrases.length)];
    } else if (words.length >= 3 && words.length < 5) {
      // 3 or 4
      const middlePhrases = [
        `maybe something ${words[words.length - 1]}`,
        `uhhhh, i know it started with ${words[0]}`,
        `${words[0]} or something with ${words[words.length - 1]}`,
        `i know you dropped ${words[2]} in there somewhere`,
        `okay so i know it ended with ${words[words.length - 1]}`,
      ];
      return middlePhrases[Math.floor(Math.random() * middlePhrases.length)];
    } else {
      // 5 +
      const longPhrases = [
        `${words[0]}...errr...also ${words[2]} and ${words[4]}`,
        `definitely ended with ${words[words.length - 1]}, but like that's all i got`,
        `i got ${words[2]} and ${words[3]}, but like that's it`,
        `started with ${words[0]}, ended with ${words[words.length - 1]}, got nothing else`,
        `i recall you mentioning ${words[0]} and ${words[2]}`,
      ];
      return longPhrases[Math.floor(Math.random() * longPhrases.length)];
    }

    // } else if (words.length === 5) {
    //   if (random) {
    //     return `${words[0]}...errr...ummm....also ${words[2]} and ${words[4]}`;
    //   } else {
    //     return `i know it ended with ${words[4]}`;
    //   };
    // } else {
    //   if (random) {
    //     return `${words[0]}......ummmm...i know you said ${words[2]} and ${words[3]} or like something to do with ${words[5]} but i don't really know`;
    //   } else {
    //     return `honestly, i have no idea but recall you mentioning a ${words[3]} and ${words[4]} or something`;
    //   };
    // };
  };

  useEffect(() => {
    document.getElementById('note-input').focus();
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
      <input className={styles.textInput} id="note-input" type="text" onChange={handleChange} placeholder="Enter Note Here" autoFocus="autofocus" />
      <input type="submit" value="Remember" className={styles.submitButton} />
    </form>
  )
};

export default NotesForm;