import { h, Component } from 'preact';
import style from './style';
import { getFeature } from '@esri/arcgis-rest-feature-service';

export default class EventDetails extends Component {
	state = {
		event: null
	};

	componentWillMount () {
		// Note: `eventId` comes from the URL, courtesy of our router
		const eventId = this.props.eventId;
		if (eventId) {
			this.getEvent(eventId)
				.then(response => {
					this.setState({
						event: response.attributes
					});
				});
		}
	}

	getEvent(eventId) {
		const featureLayerUrl = 'https://servicesqa.arcgis.com/97KLIFOSt5CxbiRI/ArcGIS/rest/services/Hub%20Events%20(public)/FeatureServer/0';
		return getFeature({ url: featureLayerUrl, id: eventId });
	}

	render({ eventId }, { event }) {
		let content;
		if (event) {
			content = (
				<div>
					<h1>{ event.title }</h1>
					<p>{ event.description }</p>
				</div>
			);
		} else {
			content = <div class={style.event}><p>No event found with id { eventId }.</p></div>;
		}
		return (
			<div class={style.event}>
				{ content }
				<p><a href="/">Back</a></p>
			</div>
		);
	}
}
