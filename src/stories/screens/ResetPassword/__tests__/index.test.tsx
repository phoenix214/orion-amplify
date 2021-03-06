import React from "react";
import ResetPassword from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onResetPassword = jest.fn();
const navigation = { state: jest.fn() };
const resetPasswordForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<ResetPassword onResetPassword={onResetPassword} navigation={navigation} resetPasswordForm={resetPasswordForm} />).toJSON();
	expect(tree).toMatchSnapshot();
});
