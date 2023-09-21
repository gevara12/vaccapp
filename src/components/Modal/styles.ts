import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(48, 44, 40, 0.6)',
  },
  content: {
    padding: 24,
    borderRadius: 28,
  },
  buttons: {
    marginTop: 24,
  },
  buttonsTwoWay: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontFamily: 'RobotoFlex-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
});
