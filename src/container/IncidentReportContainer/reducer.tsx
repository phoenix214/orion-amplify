const initialState = {
	list: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_INCIDENTREPORT_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "INCIDENTREPORT_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
