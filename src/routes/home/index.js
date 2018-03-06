import { h, Component } from 'preact';
import List from 'preact-material-components/List';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import { bind, debounce } from 'decko';
import { route } from 'preact-router';
import { queryFeatures } from '@esri/arcgis-rest-feature-service';

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
		this.queryEvents(newSearch)
			.then(response => {
				this.setState({
					search: newSearch,
					eventFeatures: response.features
				});
			});
	};

	queryEvents(search) {
		const featureLayerUrl = 'https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/ArcGIS/rest/services/Hub%20Events%20(public)/FeatureServer/0';
		// TODO: base this on current time
		const now = '2018-03-06 13:00:00';
		const queryParams = {
			outFields: ['OBJECTID', 'title', 'startDate'],
			where: `startDate > DATE '${now}'`
		};
		if (search) {
			queryParams.where = queryParams.where + ` AND title LIKE '%${search}%'`;
		}
		return queryFeatures({ url: featureLayerUrl, params: queryParams });
	};

	goToEvent(eventId) {
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
