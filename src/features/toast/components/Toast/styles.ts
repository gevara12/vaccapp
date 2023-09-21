import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 4,
  },
  text: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flex: 1,
  },
  button: {
    flexShrink: 0,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
