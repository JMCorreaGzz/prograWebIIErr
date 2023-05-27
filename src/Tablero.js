import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const Tablero = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
            img:"https://picsum.photos/id/20/600/300",
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
            img:"https://picsum.photos/id/20/600/300",
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
            img:"https://picsum.photos/id/20/600/300",
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
            img:"https://picsum.photos/id/20/600/300",
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (note, img) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: note,
            img: "https://picsum.photos/id/42/600/300",
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
        <div>
			<div className='container'>
				<Header/>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default Tablero;