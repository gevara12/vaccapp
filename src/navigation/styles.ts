import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -12,
    marginRight: 5,
  },
  bar: {
    marginLeft: 4,
    marginRight: 4,
    paddingTop: 4,
    paddingBottom: 8,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    // borderWidth: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
});
