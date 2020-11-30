import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  colorContainer: {
    backgroundColor: '#D5CDDC',
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    resizeMode: 'cover',
  },
  topBar: {
    backgroundColor: '#2395FF',
  },
  topBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  customerService: {
    flexDirection: 'row',
    marginLeft: '5%',
    alignItems: 'center',
  },
  profPic: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  topBarText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
    marginLeft: '2%',
  },
  botChat: {
    backgroundColor: '#FAFCFF',
    padding: 20,
    margin: 20,
    width: '50%',
    borderRadius: 20,
  },
  chatSent: {
    backgroundColor: '#FAFCFF',
    padding: 20,
    margin: 20,
    width: '50%',
    borderRadius: 20,
    marginLeft: 'auto',
  },
  input: {
    backgroundColor: '#FFF',
    paddingLeft: 20,
    fontSize: 17,
    borderRadius: 30,
    width: '80%',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: 50,
    height: 50,
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: 12,
  },
});
