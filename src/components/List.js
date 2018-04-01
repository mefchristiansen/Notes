import React from 'react';
import NoteCard from './NoteCard';

class List extends React.Component {

	componentWillMount() {
		this.props.getNotes(); //getNotes method passed to List component as prop
	}

	render() {
		const { notes, getNote } = this.props;

		const cards = notes.map((note, index) => {
			return (
				<NoteCard 
					key = {index}
					index = {index}
					note = {note}
					getNote = {getNote}
				/>
			);
		});

		return (
			<div className="list-container">
				{cards}
			</div>


		);
	}
}

export default List;