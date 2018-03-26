import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon } from "native-base";
//import styles from "./styles";
export interface Props {
	forgotPasswordForm: any;
	onResetPassword: Function;
}
export interface State {}
class ForgotPassword extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>Forgot Password?</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.forgotPasswordForm}
					<View padder>
						<Button block onPress={() => this.props.onResetPassword()}>
							<Text>Reset Password</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default ForgotPassword;
