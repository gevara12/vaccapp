import React from 'react';
import { View } from 'react-native';

type SpaceProps = {
  gap: number;
  horizontal?: boolean;
};

export const Space = (props: SpaceProps) => {
  const { gap = 0, horizontal = false } = props;

  if (horizontal) return <View style={{ width: gap }} />;
  return <View style={{ height: gap }} />;
};
