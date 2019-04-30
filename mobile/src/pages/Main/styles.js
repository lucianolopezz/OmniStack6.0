import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 30,
    color: '#7159c1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;