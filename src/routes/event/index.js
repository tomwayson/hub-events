import { h, Component } from 'preact';
import style from './style';

export default class EventDetails extends Component {
	state = {
		eventFeature: null
	};

	componentWillReceiveProps (nextProps, nextState) {
		setTimeout(() => {
			const response = {
feature: {
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
},
geometry: {
x: -77.08478999999994,
y: 38.89109000000008
}
}
};
			this.setState({
				eventFeature: response.feature
			})
		}, 300);
		console.log(nextProps, nextState);
	}
	// // gets called when this route is navigated to
	// componentDidMount() {
	// 	// start a timer for the clock:
	// 	this.timer = setInterval(this.updateTime, 1000);
	// }
	//
	// // gets called just before navigating away from the route
	// componentWillUnmount() {
	// 	clearInterval(this.timer);
	// }
	//
	// // update the current time
	// updateTime = () => {
	// 	this.setState({ time: Date.now() });
	// };
	//
	// increment = () => {
	// 	this.setState({ count: this.state.count+1 });
	// };

	// Note: `eventId` comes from the URL, courtesy of our router
	render({ eventId }, { eventFeature }) {
		const event = eventFeature && eventFeature.attributes;
		let content;
		if (event) {
			content = (
				<div class={style.event}>
					<h1>{ event.title }</h1>
					<p>{ event.description }</p>
				</div>
			);
		} else {
			content = <div class={style.event}><p>No event found with that id.</p></div>;
		}
		return content;
	}
}
