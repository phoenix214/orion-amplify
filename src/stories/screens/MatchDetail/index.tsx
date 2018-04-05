import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from "./styles";
export interface Props {
	navigation: any;
	data: any;
}
export interface State {}
class MatchDetail extends React.Component<Props, State> {
	render() {
		const { data } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{data ? data.Name : "Match Detail"}</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Grid>
						<Row style={styles.row}>
							<Col style={styles.column}>
							{
								data && data.Authorization && 
								data.Authorization.indexOf('Read Squadding') > -1 &&
								<Button rounded light style={styles.button} onPress={() => this.props.navigation.navigate('ViewSquadding')}>
									<Text style={styles.text}>View Squadding</Text>
								</Button>
							}
							</Col>
							<Col style={styles.column}>
								{
									data && data.Authorization && 
									data.Authorization.indexOf('Read Results') > -1 &&
									<Button rounded style={styles.button} onPress={() => this.props.navigation.navigate('ViewResults')}>
										<Text style={styles.text}>View Results</Text>
									</Button>
								}
							</Col>
						</Row>
						<Row style={styles.row}>
							<Col style={styles.column}>
							{
								data && data.Authorization && 
								data.Authorization.indexOf('Create Target Images') > -1 &&
								<Button rounded success style={styles.button} onPress={() => this.props.navigation.navigate('TakeTargetImage')}>
									<Text style={styles.text}>Take Target Image</Text>
								</Button>
							}
							</Col>
							<Col />
						</Row>
            <Row style={styles.row}>
							<Col style={styles.column}>
							{
								data && data.Authorization && 
								data.Authorization.indexOf('Create Target Images') > -1 &&
								<Button rounded info style={styles.button} onPress={() => this.props.navigation.navigate('TakeCalibrationImage')}>
									<Text style={styles.text}>Take Calibration Image</Text>
								</Button>
							}
							</Col>
							<Col style={styles.column}>
								{
									data && data.Authorization && 
									data.Authorization.indexOf('Read Incident Reports') > -1 &&
									<Button rounded danger style={styles.button} onPress={() => this.props.navigation.navigate('ViewIncidentReport')}>
										<Text style={styles.text}>View Incident Report</Text>
									</Button>
								}
							</Col>
						</Row>
          </Grid>
				</Content>
			</Container>
		);
	}
}

export default MatchDetail;