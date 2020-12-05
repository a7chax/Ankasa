import React, {useState, useEffect, Fragment} from 'react';
import {
	ScrollView,
	View,
	Text,
	Image,
	StatusBar,
	Dimensions,
} from 'react-native';
import styles from './detailbooking.style.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Barcode from 'react-native-barcode-builder';
import NavigationDotted from '../../../components/navigationDotted/';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailBooking} from '../../../redux/actions/DetailBooking.js';
import moment from 'moment';

function DetailBooking({route, navigation}) {
	const {id} = route.params;
	const {token} = useSelector((s) => s.Auth);
	const {data} = useSelector((s) => s.DetailBooking);
	const [loading, setLoading] = useState(true);
	const {username, type, departure_at, gate, unique_code} = data;
	console.log(data);
	console.log('data di profile');
	const [date, setDate] = useState(new Date());
	const [imgWidth, setImgWidth] = useState('');
	const [imgHeight, setImgHeight] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const callbackHandler = (err, res) => {
			setLoading(false);

			if (err) return false;
			// navigation.replace('HomeProfile');
		};
		dispatch(getDetailBooking(id, token, callbackHandler));
	}, []);

	function formatDateView(param) {
		const dateString = param;
		const dateObj = new Date(dateString);
		const momentObj = moment(dateObj);
		const momentString = momentObj.format('dddd, D MMMM YYYY');

		return momentString;
	}

return (
	<Fragment>

		<StatusBar backgroundColor="#2395FF" barStyle="light-content" animated />

		<ScrollView style={{backgroundColor: '#2395FF'}}>
			<NavigationDotted pageTitle="Booking Pass"onPress={() => navigation.pop()} />
			
			<View style={styles.makeColumn}>
				<View style={styles.boxBooking}>
					<View style={styles.innerBox}>
						<View>
							<Image source={{uri: data.airport_photo, }} style={{width: null, height: 70, flex: 1}} resizeMode="contain"/> 
						</View>

						<View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 34, }}>
							 <View>
								<Text style={styles.destinationText}>{data.from}</Text>
							</View>

							<View style={{marginHorizontal: 20}}>
								<Icon name="plane-departure" size={25} color="#979797" />
							</View>

							<View>
								<Text style={styles.destinationText}>{data.city}</Text>
							</View>
						</View>

						<View style={styles.makeColumn}>
							<View
								style={[
									styles.boxStatus,
									{
										backgroundColor:
											data.status === 0 ? '#FF7F23' : '#4FCF4D',
									},
								]}>
								<Text style={styles.statusDesc}>
									{data.status === 0 ? 'Wait for payment' : 'Success'}
								</Text>
							</View>
						</View>

						<View style={{paddingTop: 20}}>
							<View style={styles.horizontalLine} />
						</View>

						<View style={{flex: 2}}>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									flexWrap: 'wrap',
									marginTop: 20,
									marginHorizontal: 36,
								}}>
								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Passenger</Text>
									<Text style={styles.textSub}>{username}</Text>
								</View>

								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Class</Text>
									<Text style={styles.textSub}>
										{type === 1
											? 'Economy'
											: type === 2
											? 'Business'
											: 'First Class'}
									</Text>
								</View>
							</View>

							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									flexWrap: 'wrap',
									marginTop: 20,
									marginHorizontal: 36,
								}}>
								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Departure</Text>
									<Text style={styles.textSub}>
										{formatDateView(departure_at)}
									</Text>
								</View>

								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Time</Text>
									<Text style={styles.textSub}>
										{departure_at
											? departure_at.split('T')[1].split(':', 2).join(':')
											: 'null'}
									</Text>
								</View>
							</View>

							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									flexWrap: 'wrap',
									marginTop: 20,
									marginHorizontal: 36,
								}}>
								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Gate</Text>
									<Text style={styles.textSub}>{gate}</Text>
								</View>

								<View style={{flexDirection: 'column', flexBasis: 100}}>
									<Text style={styles.textTitle}>Seat</Text>
									<Text style={styles.textSub}>21 B</Text>
								</View>
							</View>
						</View>

						{data.status == 1 ? (
							<>
								<View style={{paddingTop: 20}}>
									<View style={styles.horizontalLine} />
								</View>

								<View style={{marginTop: 20, alignItems: 'center'}}>
									<Barcode
										format="CODE128"
										value={unique_code ? unique_code : 'No Fill'}
										height={68}
										width={1.12}
									/>
									<View style={styles.makeColumn}>
										<Text>{unique_code ? unique_code : 'No Fill'}</Text>
									</View>
								</View>
							</>
						) : null}
					</View>
				</View>
			</View>
		</ScrollView>
	</Fragment>
);
}

export default DetailBooking;