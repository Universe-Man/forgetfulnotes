// import Head from 'next/head'
// import Image from 'next/image'
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
          Welcome to Forgetful Notes
        </h1>
        <h2>(Did I already tell you that?)</h2>
      </div>
      <div className={styles.body}>
        <div>
          <h3>Feel free to enter a note below and I'll do my best to remember it.</h3>
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