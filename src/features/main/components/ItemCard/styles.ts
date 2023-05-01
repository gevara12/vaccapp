import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  host: {
    flex: 1,
    minHeight: 100,
    padding: 16,
    paddingBottom: 8,
    borderRadius: 8,
    // borderWidth: 1,
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
