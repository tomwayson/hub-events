import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/TextField/style.css';
import { bind, debounce } from 'decko';

import style from './style';

export default class Home extends Component {
	state = {
		search: ''
	};

	@bind
	@debounce(1000)
	updateSearch(e) {
		this.setState({ search: e.target.value });
	}

	render({}, { search }) {
		return (
			<div class={style.home}>
				<TextField label="Search events" value={search} onInput={this.updateSearch} trailingIcon="search"  />
				<h1>Home route</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Home card</h2>
						<div class=" mdc-typography--caption">Welcome to home route</div>
					</div>
					<div class={style.cardBody}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
