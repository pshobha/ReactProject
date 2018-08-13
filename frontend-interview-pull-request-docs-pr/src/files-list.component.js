import React from 'react';
import styles from './files-list.styles.css';
import {getFiles} from './files.resource.js';
import TableHeaders from './table-headers.component.js';
import Folder from './folder.component.js';
import UserDetails from './user-details.component.js';

export default class FilesList extends React.Component {
	state = {
		folders: null,
		userDetails: {
			show: false,
			userId: null,
			top: null,
			right: null,
		},
	}
	componentDidMount() {
		getFiles()
		.subscribe(
			folders => this.setState({folders}),
			err => {throw err}
		);
	}
	render() {
		return (
			<div className={styles.table}>
				<h1>
					Ye olde files
				</h1>
				<TableHeaders />
				{this.state.folders &&
						this.state.folders.map(folder => (
							<Folder
								key={folder.id}
								folder={folder}
								indentationLevel={1}
								showUserDetails={this.showUserDetails}
							/>
						))
				}
				{this.state.userDetails.show &&
					<UserDetails
						{...this.state.userDetails}
						close={this.closeUserDetails}
						folders={this.state.folders}
					/>
				}
			</div>
		);
	}
	showUserDetails = (evt, userId) => {
		evt.stopPropagation();

		this.setState({
			userDetails: {
				show: true,
				userId: userId,
				top: evt.target.offsetTop + evt.target.offsetHeight,
				right: evt.target.offsetRight,
			},
		}, this.keepDetailsOpenOnClick);
	}
	closeUserDetails = () => {
		this.setState({
			userDetails: {
				show: false,
				userId: null,
				top: null,
				right: null,
			},
		});
	}
	keepDetailsOpenOnClick = evt => {
		document.getElementById('user-details').addEventListener('click', evt => {
			evt.stopPropagation();
		});
	}
}
