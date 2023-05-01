import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    opacity: 0.5,
  },
  image: {
    width: 56,
    height: 56,
    marginRight: 16,
    borderRadius: 4,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    height: 16,
    width: '100%',
    marginBottom: 4,
    borderRadius: 4,
  },
  description: {
    height: 16,
    width: '50%',
    borderRadius: 4,
  },
  separator: {
    paddingLeft: 16,
  },
  separatorLine: {
    height: 1,
  },
});
