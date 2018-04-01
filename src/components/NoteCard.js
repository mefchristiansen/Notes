import React from 'react';

class NoteCard extends React.Component {
	renderTags(note) {
		return note.tags.map((tag, index) => 
			// Including key property when iterating through list. React needs key to keep track of HTML elements and perform optimizations
			<span className="note-card-tag" key={index}> 
				{tag.name}
			</span>
		);
	}

	render() {
		const { note, getNote, deleteNote } = this.props;

		return (
			<div className="note-card-container">
				<div className="note-card-title">
					{note.title}
				</div>
				<div className="note-card-content">
					{note.content}
				</div>
				<div className="note-card-tags">
					{this.renderTags(note)}
				</div>
				<div className="note-card-delete" onClick={() => deleteNote(note.id)}>
					<i className="material-icons">close</i>
				</div>
				<div className="note-card-edit" onClick={() => getNote(note.id)}>
					<i className="material-icons">mode_edit</i>
				</div>
			</div>

		);
	}
}

export default NoteCard;