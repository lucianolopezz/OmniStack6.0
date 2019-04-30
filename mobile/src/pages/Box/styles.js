import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 60,
  },
  boxTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  file: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileTitle: {
    paddingLeft: 10,
  },
  fb: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 100,
    padding: 15,
    backgroundColor: '#7159c1',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE',
  }
});

export default styles;