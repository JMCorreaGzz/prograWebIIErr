import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import OtrosNotesList from './components/OtrosNotesList';

const OtrosTablero = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
            img:"https://picsum.photos/id/40/600/300",
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
            img:"https://picsum.photos/id/60/600/300",
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
            img:"https://picsum.photos/id/80/600/300",
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
            img:"https://picsum.photos/id/100/600/300",
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

	return (
        <div>
			<div className='header'>
				<h1>Tablero de Marlon</h1>
			</div>
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<OtrosNotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
				/>
			</div>
		</div>
	);
};

export default OtrosTablero;