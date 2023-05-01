import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  host: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 16,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  elevation: {
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  },
  icon: {
    paddingRight: 8,
  },
  text: {
    flexShrink: 1,
    fontFamily: 'RobotoFlex-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
  endSlot: { paddingLeft: 12 },
});
