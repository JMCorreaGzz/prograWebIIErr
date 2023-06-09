import { nanoid } from 'nanoid';


const OtrosNote = ({ id, text, date, img}) => {
	return (
		<div className='note'>
			<span>{text}</span>
            <img className='note-image' src={img} alt=" "></img>
			<div className='note-footer'>
				<small>{date}</small>
			</div>
		</div>
	);
};

export default OtrosNote;