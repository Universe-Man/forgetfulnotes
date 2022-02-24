const NotesForm = (props) => {

  const handleChange = (event) => {
    console.log(event.target.value)
    props.setCurrentNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.setNotesList([...props.notesList, props.currentNote]),
      // console.log(props.notesList, 'yo'),
      () => {
        return console.log(props.notesList, 'yo again')
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <input type="submit" />

    </form>

  )
}

export default NotesForm;