import React from 'react';

const NotesAppBar = () => {
	return (
		<div className='notes__appbar'>
			<span>28 de Agosto 2020</span>

			<div className='notes__appbar-actionButtons'>
				<div>
					<button className='btn btn-primary b-rad'>Picture</button>
				</div>
				<div>
					<button className='btn btn-primary b-rad'>Save</button>
				</div>
			</div>
		</div>
	);
};

export default NotesAppBar;
