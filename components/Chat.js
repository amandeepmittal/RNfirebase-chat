import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from '../config/firebaseSDK';

export default class Chat extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: (navigation.state.params || {}).name || 'Chat!'
	});

	state = {
		messages: []
	};

	get user() {
		return {
			name: this.props.navigation.state.params.name,
			email: this.props.navigation.state.params.email,
			avatar: this.props.navigation.state.params.avatar,
			id: firebaseSDK.uid,
			_id: firebaseSDK.uid
		};
	}

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={firebaseSDK.send}
				user={this.user}
			/>
		);
	}

	componentDidMount() {
		firebaseSDK.refOn(message =>
			this.setState(previousState => ({
				messages: GiftedChat.append(previousState.messages, message)
			}))
		);
	}
	componentWillUnmount() {
		firebaseSDK.refOff();
	}
}
