import React from 'react';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
	return (
		<aside className='journal__sidebar'>
			<div className='journal__sidebar-navbar'>
				<h3>
					<i className='far fa-moon'></i>
					<span>Ricardo</span>
				</h3>

				<button className='btn'>Logout</button>
			</div>

			<div className='journal__new-entry'>
				<div className='journal__new-entry-icon'>
					<i className='far fa-calendar-plus fa-4x'></i>
					<p className='mt-3'>New entry</p>
				</div>
			</div>

			<JournalEntries />
		</aside>
	);
};

export default Sidebar;
