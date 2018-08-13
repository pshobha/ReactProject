import React from 'react';
import File from './file.component.js';
import moment from 'moment';
import styles from './folder.styles.css';

export default class Folder extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.row}>
					<div style={{borderLeft: `${this.props.indentationLevel * 20}px solid deepskyblue`}}>
						{this.props.folder.name}
					</div>
					<div>
						{moment(this.props.folder.dateAdded).format('l')}
					</div>
					<div onClick={this.userClicked} className={styles.name}>
						{this.props.folder.addedBy.name}
					</div>
				</div>
				{this.props.folder.folders.map(folder => (
					<Folder key={folder.id} folder={folder} indentationLevel={this.props.indentationLevel + 1} showUserDetails={this.props.showUserDetails} />
				))}
				{this.props.folder.files.map(file => (
					<File key={file.id} file={file} indentationLevel={this.props.indentationLevel + 1} showUserDetails={this.props.showUserDetails} />
				))}
			</div>
		);
	}
	userClicked = evt => {
		this.props.showUserDetails(evt, this.props.folder.addedBy.id);
	}
}
