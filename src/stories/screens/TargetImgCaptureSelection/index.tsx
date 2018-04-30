import * as React from "react";

import {
	Content,
	Text,
	View,
	Button,
	Icon,
	Thumbnail,
	List,
	ListItem,
	Left,
	Body,
} from "native-base";
import { Image } from 'react-native';

export interface Props {
	targetStages: any;
	participant: any;
}
export interface State {}

class TargetImgCaptureSelection extends React.Component<Props, State> {
	render() {
		const { targetStages, participant } = this.props;
		return (
			<Content>
				<List>
				{
					targetStages && targetStages.map((targetStage, index)=> (
						<ListItem
							key={index}
						>
							<Left>
								<Icon name="ios-checkmark" />
							</Left>
							<Body>
								<Text>OrionTarget Stage</Text>
								<Text>{targetStage.Name}</Text>
							</Body>
						</ListItem>
					))
				}
				</List>
			</Content>
		);
	}
}

export default TargetImgCaptureSelection;
