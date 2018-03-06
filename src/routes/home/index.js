import { h, Component } from 'preact';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import { bind, debounce } from 'decko';
import { route } from 'preact-router';

import style from './style';

export default class Home extends Component {
	state = {
		search: '',
		eventFeatures: []
	};

	@bind
	@debounce(500)
	searchEvents(e) {
		const newSearch = e.target.value;
		const results = {
			features: [{
	attributes: {
	OBJECTID: 164,
	title: "testing",
	location: "Courthouse, Virginia",
	description: "testing",
	startDate: 1527360300000,
	endDate: 1527361200000,
	organizerId: null,
	organizerName: null,
	organizerEmail: null,
	url: "testing",
	pageId: "2794ec2e618246f19b48f0bffd2575ac",
	capacity: null,
	attendance: null,
	status: "public",
	isCancelled: null,
	groupId: "516be607ee6042a89440f401ab6bca89",
	siteId: "b89964dcb21a4e7eb9d97b47556ff572",
	initiativeId: "9cb9eee39b1947e0a0d18249df942995",
	surveyId: null,
	CreationDate: 1517510810767,
	Creator: "dcadminqa",
	EditDate: 1518188455371,
	Editor: "dcadminqa"
	}
	},
	{
	attributes: {
	OBJECTID: 168,
	title: "davidson event",
	location: "ESRI",
	description: "Doing the thing",
	startDate: 1527354000000,
	endDate: 1527357600000,
	organizerId: null,
	organizerName: null,
	organizerEmail: null,
	url: "davidson-event",
	pageId: "7aacf725e0d34d34bdf3c0b6c0dcfd90",
	capacity: null,
	attendance: null,
	status: "public",
	isCancelled: null,
	groupId: "02e7c55e724540bf87ce9c8b60cb0519",
	siteId: "b89964dcb21a4e7eb9d97b47556ff572",
	initiativeId: "9cb9eee39b1947e0a0d18249df942995",
	surveyId: null,
	CreationDate: 1517937966046,
	Creator: "dcadminqa",
	EditDate: 1518188451941,
	Editor: "dcadminqa"
	}
	}]
		};
		setTimeout(() => {
			this.setState({
				search: newSearch,
				eventFeatures: results.features
			});
		}, 300);
	}

	goToEvent(eventId) {
		console.log(eventId);
		route(`/event/${eventId}`, true);
	};

	render({}, { search, eventFeatures }) {
		const listItems = eventFeatures.map(feature => {
			const { OBJECTID: eventId, title, startDate } = feature.attributes;
			const startDateString = new Date(startDate).toDateString();
			return (<List.LinkItem onClick={() => this.goToEvent(eventId)}>
				<List.TextContainer>
					<List.PrimaryText>{ title }</List.PrimaryText>
					<List.SecondaryText>{ startDateString }</List.SecondaryText>
				</List.TextContainer>
			</List.LinkItem>);
	  });
		return (
			<div class={style.home}>
				<h1>Upcoming Events</h1>
				<TextField helperText="Search events" value={search} onInput={this.searchEvents} trailingIcon="search" fullwidth={true}  />
				<List two-line={true}>{ listItems }</List>
			</div>
		);
	}
}
