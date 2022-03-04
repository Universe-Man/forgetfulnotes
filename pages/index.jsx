import React, { useState } from 'react';
import styles from '../styles/Home.module.scss'
import NotesList from '../components/NotesList'
import NotesForm from '../components/NotesForm'

const Home = () => {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState('');


  return (
    <>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.green}>Forgetful</span> Notes
        </h1>
        <h2>(did I already tell you that?)</h2>
      </div>
      <div className={styles.body}>
        <div>
          <h3>Feel free to enter a note below and I&apos;ll do my best to remember it.</h3>
        </div>
      </div>
      <div>
        <NotesForm setNotesList={setNotesList} currentNote={currentNote} setCurrentNote={setCurrentNote} notesList={notesList} />
        <NotesList notesList={notesList} />
      </div>
    </>
  )
}

export default Home;