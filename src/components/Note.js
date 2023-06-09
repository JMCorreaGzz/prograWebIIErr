import { MdDeleteForever } from "react-icons/md";
import { nanoid } from 'nanoid';


const Note = ({ id, text, date, img, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
            <img className='note-image' src={img} alt=" "></img>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;