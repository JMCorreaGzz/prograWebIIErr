import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddNote = ({ handleAddNote, handleAddImg}) => {
	const [noteText, setNoteText] = useState('');
	const [file, setFile] = useState();
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			//handleAddNote.img(file);
			handleAddImg(file);
			setNoteText('');
			setFile('');
		}
	};

	/*const handleImage = (event) => {
		console.log(event.target.files);
        setFile(URL.createObjectURL(event.target.files[0]));
	};*/

	/*
	function handleImage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }*/
  
	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<input type="file" id="imgFile" accept=".jpg, .jpeg, .png" 
			onChange={(event) => {
				console.log(event.target.files);
        		setFile(URL.createObjectURL(event.target.files[0]));
			}}
			onClick={(e) => {
				e.target.value = null
			}} />
            <img src={file} alt=" " />
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;