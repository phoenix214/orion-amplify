import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { AsyncStorage } from 'react-native';
import { Auth } from 'aws-amplify';
import Login from "../../stories/screens/Login";

const required = value => (value ? undefined : "Required");

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}
class LoginForm extends React.Component<Props, State> {
	textInput: any;
	username: any;
	password: any;

	constructor(props) {
		super(props);
	}

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "email" ? "person" : "unlock"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === "email" ? "Email" : "Password"}
					autoCapitalize="none"
					secureTextEntry={input.name === "password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	login() {
		if(this.props.valid) {
			Auth.signIn(this.username.toLowerCase(), this.password)
			.then(async user => {
				console.log('Logged in:', user);
				try {
					await AsyncStorage.setItem('@Orion:username', user.username);
					this.props.navigation.navigate("Drawer");
				} catch (error) {
					// Error saving data
				}
      })
			.catch(err => {
				Toast.show({
					text: err.message,
					duration: 2000,
					position: "top",
					type: "danger",
					textStyle: { textAlign: "center" },
				});
			})
		} else {
			Toast.show({
				text: "Enter Valid UserName & password!",
				duration: 2000,
				position: "top",
				type: "warning",
				textStyle: { textAlign: "center" },
			});
		}
	}

	signUp = () => {
		this.props.navigation.navigate("Signup");
	}

	forgotPassword = () => {
		this.props.navigation.navigate("ForgotPassword");
	}
  
	onChangeEmail = e => {
		this.username = e.nativeEvent.text;
	}

	onChangePassword = e => {
		this.password = e.nativeEvent.text;
	}
	
	render() {
		const form = (
			<Form>
				<Field name="email" component={this.renderInput} validate={[required]} onChange={this.onChangeEmail} value={this.username} />
				<Field
					name="password"
					component={this.renderInput}
					validate={[required]}
					onChange={this.onChangePassword}
					value={this.password}
				/>
			</Form>
		);
		return <Login loginForm={form} onLogin={() => this.login()} onSignup={this.signUp} onForgotPassword={this.forgotPassword} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
