import { StyleSheet } from 'react-native';

const SPACING = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING,
    paddingBottom: 0,
  },
  separator: {
    paddingBottom: SPACING,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: SPACING,
  },
  headRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING,
  },
  logo: {
    maxWidth: 48,
    minHeight: 32,
  },
  headText: {
    marginLeft: 8,
    fontSize: 20,
    // lineHeight: 40,
  },
  contentContainerStyle: {
    paddingVertical: SPACING,
  },
});
