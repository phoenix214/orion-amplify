import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon } from "native-base";
class ForgotPassword extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 200 } },
                React.createElement(Body, { style: { alignItems: "center" } },
                    React.createElement(Icon, { name: "flash", style: { fontSize: 104 } }),
                    React.createElement(Title, null, "Forgot Password?"),
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } })))),
            React.createElement(Content, null,
                this.props.forgotPasswordForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onResetPassword() },
                        React.createElement(Text, null, "Reset Password"))))));
    }
}
export default ForgotPassword;
//# sourceMappingURL=index.js.map