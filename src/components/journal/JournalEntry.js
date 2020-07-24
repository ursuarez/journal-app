import React from 'react';

const JournalEntry = () => {
	return (
		<div className='journal__entry'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundColor: 'cover',
					backgroundImage: 'url(https://via.placeholder.com/150)',
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__main-title'>Un nuevo día</p>
				<p className='journal__main-content'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
