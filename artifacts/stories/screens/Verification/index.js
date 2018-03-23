import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon } from "native-base";
class Verification extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 200 } },
                React.createElement(Body, { style: { alignItems: "center" } },
                    React.createElement(Icon, { name: "flash", style: { fontSize: 104 } }),
                    React.createElement(Title, null, "Verification"),
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } })))),
            React.createElement(Content, null,
                this.props.verificationForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onVerification() },
                        React.createElement(Text, null, "Verify User"))))));
    }
}
export default Verification;
//# sourceMappingURL=index.js.map