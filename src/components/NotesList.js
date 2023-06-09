import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddImg,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					img={note.img}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} handleAddImg={handleAddImg} />
		</div>
	);
};

export default NotesList;