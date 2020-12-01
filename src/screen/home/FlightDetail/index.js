import React, { Fragment, useEffect } from 'react'
import {
	ScrollView,
	View,
	Text,
	TouchableNativeFeedback,
	Image,
	StatusBar
} from 'react-native'
import { Button } from 'react-native-paper'
import { NavigationWhite, Navigation } from '../../../components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './flightdetail.style'
import { PlaneBig } from '../../../assets/'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Facilities } from '../../../components'
import { GetDetailFlight } from '../../../redux/actions/DetailFlight'
import { useDispatch, useSelector } from 'react-redux';
import { postTransfer } from '../../../redux/actions/Booking'


function FlightDetail(props) {
	const [loading, setLoading] = React.useState(false);
	const dispatch = useDispatch();
  const { data } = useSelector((state) => state.DetailFlight);
  // const { items } = route.params;


  const kembali = () => {
  	props.navigation.goBack('SearchResult')
  }

  const { adult, asal,  child,  tujuan,  classSuite,  depart } = props.route.params

    const berasal = asal.substring(0, 3)
    const bertujuan = tujuan.substring(0, 3)


    function ticketPrice(params){
    	if(params == 'Economy'){
    		let price = (14500 * adult) + (1200 * child)
    		return price
    	}else

		if(params == 'Bussiness'){
			let price = (15500 * adult) + (1300 * child)
			return price    			
		}

    	if(params == 'First Class'){
    		let price = (17500 * adult) + (2000 * child)
    		return price    			
    	}    	
    }

    





    const price = ticketPrice(classSuite)

	const getDetailFlight = () => {
		setLoading(true);
		const callbackHandler = (err, res) => {
			setLoading(false);
			

			if (err) return false;
		};
		dispatch(GetDetailFlight(5, callbackHandler));
	}

	useEffect(() => {
		StatusBar.setBarStyle("light-content");
		if (Platform.OS === "android") {
			StatusBar.setBackgroundColor("rgba(0,0,0,0)");
			StatusBar.setTranslucent(true);
		}
			

		


	}, []);


	return (
		<Fragment>
			<StatusBar />
			<ScrollView style={{ backgroundColor: '#FFFFFF' }}>
				<View style={{ zIndex: 2, position: 'relative' }}>
					<Image source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbf5d2183cb926b6cc3ed80/5fbf9db5112762381793143d/52756e740075b2e8523aa319aa3fc9d0/vector_02.png' }} style={styles.planeBackground} resizeMode="contain" />
				</View>

				<View style={styles.backgroundFlight} />

				<View style={{ position: 'absolute', zIndex: 2, marginTop: 20 }}>
					<NavigationWhite onPress={() => kembali()} />
				</View>



				<View style={styles.makeColumn}>
					<View style={styles.boxFlight}>

						<View style={[styles.innerBox, { marginTop: 30 }]}>

							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View>
  <Text style={styles.destinationText}>{berasal}</Text>
									<Text style={[styles.estimated, { textAlign: 'left' }]}>15:21</Text>
								</View>

								<View style={{ marginTop: 12 }}>
									<Icon name='plane-departure' size={20} color='#979797' />
								</View>

								<View style={{ flexDirection: 'column' }}>
  <Text style={styles.destinationText}>{bertujuan}</Text>
									<Text style={[styles.estimated, { textAlign: 'right' }]}>15:21</Text>
								</View>
							</View>

							<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

								<View style={{ width: null, height: 90, flex: 1, alignSelf: 'flex-start', marginRight: 120 }}>
									<Image source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fbf5d2183cb926b6cc3ed80/5fbfa30e036dff5048de74e2/494292fabaca3b65880ca368a77df23b/garuda-indonesia-logo-BD82882F07-seeklogo_3.png' }} style={{ width: null, height: 70 }} resizeMode="contain" />
								</View>

								<View style={{ flexDirection: 'column', marginTop: 10 }}>
									<AirbnbRating
										starContainerStyle={{ marginBottom: 7 }}
										showRating={false}
										defaultRating={2}
										selectedColor={'#FF7F23'}
										count={4}
										defaultRating={3}
										size={18}
										isDisabled={true}
									/>
									<Text style={styles.textReview}>{data.air_review} review</Text>
								</View>
							</View>

							<View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10 }}>

								<View style={{ flexDirection: 'column', flexBasis: 60 }}>
									<Text style={styles.detailTitle}>Code</Text>
  <Text style={styles.detailSubtitle}>{data.id}</Text>
								</View>

								<View style={{ flexDirection: 'column', flexBasis: 65 }}>
									<Text style={styles.detailTitle}>Class</Text>
                  						<Text>{classSuite}</Text>
								</View>


								<View style={{ flexDirection: 'column', flexBasis: 55 }}>
									<Text style={styles.detailTitle}>Terminal</Text>
  <Text style={styles.detailSubtitle}>{data.terminal}</Text>
								</View>


								<View style={{ flexDirection: 'column', flexBasis: 60 }}>
									<Text style={styles.detailTitle}>Gate</Text>
  <Text style={styles.detailSubtitle}>{data.gate}</Text>
								</View>

							</View>





						</View>

						<View style={styles.horizontalLine} />

						<View style={[styles.innerBox, { marginTop: 25 }]}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
								<View style={{ flexDirection: 'row' }}>
									<View style={{ backgroundColor: 'rgba(35, 149, 255, 0.18)', width: 38, height: 38, borderRadius: 100 / 2 }}>
										<Text style={{ textAlign: 'center', marginTop: 5, color: '#2395FF', fontSize: 18, fontFamily: 'Poppins-Bold' }}>{child}</Text>
									</View>
									<Text style={{ fontSize: 14, marginLeft: 10, marginTop: 7, fontFamily: 'Poppins-Regular' }}>Child</Text>
								</View>

								<View style={{ flexDirection: 'row' }}>
									<View style={{ backgroundColor: 'rgba(35, 149, 255, 0.18)', width: 38, height: 38, borderRadius: 100 / 2 }}>
										<Text style={{ textAlign: 'center', marginTop: 5, color: '#2395FF', fontSize: 18, fontFamily: 'Poppins-Bold' }}>{adult}</Text>
									</View>
									<Text style={{ fontSize: 14, marginLeft: 10, marginTop: 7, fontFamily: 'Poppins-Regular' }}>Adult	</Text>
								</View>
							</View>
						</View>

					</View>


				</View>

				<View>
					<View style={{ marginLeft: 30 }}>
						<Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#000000' }}>Facilities</Text>
					</View>

					<ScrollView horizontal={true} style={{ marginTop: 15, marginLeft: 15 }} showsHorizontalScrollIndicator={false}>
						<Facilities />
					</ScrollView>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginHorizontal: 25 }}>
						<View>
							<Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, lineHeight: 42 }}>Total you’ll pay</Text>
						</View>

						<View>
							<Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 24, color: '#2395FF' }}>$ {price}</Text>
						</View>
					</View>

				</View>

				<View style={[styles.makeColumn, { marginTop: 15, marginBottom: 14 }]}>
					<Button style={styles.buttonBooking}>
						<Text style={styles.textButtonBooking}>BOOK FLIGHT</Text>
					</Button>
				</View>

			</ScrollView>
		</Fragment>
	)
}

export default FlightDetail
