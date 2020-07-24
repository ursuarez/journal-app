import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					name=''
					id=''
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
				/>

				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					className='notes__textarea'
					placeholder='What happened today?'
				></textarea>

				<div className='notes__image'>
					<img
						src='https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png'
						alt='Imagen'
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteScreen;
