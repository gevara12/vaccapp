import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  host: {
    flex: 1,
    minHeight: 100,
    padding: 16,
    paddingBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  title: {
    marginBottom: 16,
    fontSize: 28,
    lineHeight: 36,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginRight: 8,
    marginBottom: 8,
  },
});
