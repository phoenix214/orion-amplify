import * as React from "react";
import { connect } from "react-redux";
import SquaddingList from "../../stories/screens/SquaddingList";
import fetchSquaddingList from "./actions";

export interface Props {
	navigation: any,
	fetchSquaddingList: Function,
	data: any;
}
export interface State {
	data: any;
}

export class SquaddingListContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		if(param) {
			this.props.fetchSquaddingList(param.matchID, param.eventName);
		}
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps;
		this.setState({ data })
	}

	render() {
		const { data } = this.state;
		return <SquaddingList navigation={this.props.navigation} list={data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchSquaddingList: (matchID, eventName) => dispatch(fetchSquaddingList(matchID, eventName)),
	};
}

const mapStateToProps = state => {
	return {
		data: state.squaddingListReducer.list,
		isLoading: state.squaddingListReducer.isLoading,
}};
export default connect(mapStateToProps, bindAction)(SquaddingListContainer);