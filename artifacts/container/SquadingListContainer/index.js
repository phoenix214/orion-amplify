import * as React from "react";
import { connect } from "react-redux";
import SquaddingList from "../../stories/screens/SquaddingList";
import { fetchSquaddingList } from "./actions";
export class SquadingListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        const param = this.props.navigation.state.params;
        if (param)
            this.props.fetchSquaddingList(param.id);
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({ data });
    }
    render() {
        const { data } = this.state;
        return React.createElement(SquaddingList, { navigation: this.props.navigation, data: data });
    }
}
function bindAction(dispatch) {
    return {
        fetchMatch: matchID => dispatch(fetchSquaddingList(matchID, "Individual")),
    };
}
const mapStateToProps = state => {
    return {
        data: state.squaddingListReducer.list,
        isLoading: state.squaddingListReducer.isLoading,
    };
};
export default connect(mapStateToProps, bindAction)(fetchSquaddingList);
//# sourceMappingURL=index.js.map