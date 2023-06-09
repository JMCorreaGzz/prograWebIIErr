import OtrosNote from './OtrosNote';

const OtrosNotesList = ({
	notes
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<OtrosNote
					id={note.id}
					text={note.text}
					img={note.img}
					date={note.date}
				/>
			))}
		</div>
	);
};

export default OtrosNotesList;