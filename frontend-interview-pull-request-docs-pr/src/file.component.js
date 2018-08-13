import React from 'react';
import moment from 'moment';
import styles from './file.styles.css';

export default class File extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.row}>
					<div style={{borderLeft: `${this.props.indentationLevel * 20}px solid deepskyblue`}}>
						{this.props.file.name}
					</div>
					<div>
						{moment(this.props.file.dateAdded).format('l')}
					</div>
					{this.props.showUserDetails
						?
							<div onClick={this.userClicked} className={styles.name}>
								{this.props.file.addedBy.name}
							</div>
						:
							<div>
								{this.props.file.addedBy.name}
							</div>
					}
				</div>
			</div>
		);
	}
	userClicked = evt => {
		this.props.showUserDetails(evt, this.props.file.addedBy.id);
	}
}
