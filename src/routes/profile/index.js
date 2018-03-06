import { h, Component } from 'preact';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Profile extends Component {
	// Note: `user` comes from the URL, courtesy of our router
	render({ user }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>
			</div>
		);
	}
}
