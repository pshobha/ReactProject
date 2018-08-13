import React from 'react';
import styles from './user-details.styles.css';
import File from './file.component.js';
import {noop} from 'lodash';

export default class UserDetails extends React.Component {
	componentDidMount() {
		document.addEventListener('click', this.props.close);
	}
	render() {
		const relevantFiles = this.props.folders.reduce(this.findFilesForUser, []);
		return (
			<div id="user-details" className={styles.root} style={{top: `${this.props.top}px`, right: `${this.props.right}px`}}>
				{relevantFiles.map(file => (
					<File
						key={file.id}
						file={file}
						indentationLevel={0}
					/>
				))}
			</div>
		);
	}
	componentWillUnmount() {
		document.addEventListener('click', this.props.close);
	}
	findFilesForUser = (relevantFiles, folder) => {
		return [
			...folder.folders.reduce(this.findFilesForUser, relevantFiles),
			...folder.files.filter(file => file.addedBy.id === this.props.userId),
		];
	}
	detailsClicked = () => {
		event.stopPropogation();
	}
	header = () => {
		return (
			<div>
				Files for {this.props.userId}
			</div>
		)
	}
}
