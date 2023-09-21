import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useCallback, useMemo } from 'react';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DiscoveryBottomTabIcon from 'src/assets/icons/ui/DiscoveryBottomTab.svg';
import MainBottomTabIcon from 'src/assets/icons/ui/MainBottomTab.svg';
import { MainScreen } from 'src/features/main';
import { useTheme } from 'src/hooks';
import { InfectionScreen } from 'src/screens/InfectionScreen';
import { InformationScreen } from 'src/screens/InformationScreen';
import { BottomBarParamList, RootStackParamList } from 'src/types';

import HeaderLeft from './components/HeaderLeft';
import TabIcon from './components/TabIcon';
import styles from './styles';

const TabBar = createBottomTabNavigator<BottomBarParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const renderHeaderLeft = ({ label }: HeaderBackButtonProps) => (
  <HeaderLeft label={label} />
);

const BottomTabBar = () => {
  const colors = useTheme();
  const insets = useSafeAreaInsets();

  const renderMainIcon = useCallback(
    ({ color, focused }: { color: string; focused: boolean }) => (
      <TabIcon focused={focused}>
        <MainBottomTabIcon color={color} />
      </TabIcon>
    ),
    [],
  );

  const renderInformationIcon = useCallback(
    ({ color, focused }: { color: string; focused: boolean }) => (
      <TabIcon focused={focused}>
        <DiscoveryBottomTabIcon color={color} />
      </TabIcon>
    ),
    [],
  );

  return (
    <TabBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderColor: colors.PRIMARY,
          borderTopColor: colors.PRIMARY,
          backgroundColor: colors.BACKGROUND,
          height: 58 + insets.bottom,
          ...styles.bar,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: colors.SECONDARY,
      }}>
      <TabBar.Screen
        name="MainTab"
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
          tabBarLabelStyle: styles.label,
          tabBarIcon: renderMainIcon,
        }}
      />
      <TabBar.Screen
        name="InformationTab"
        component={InformationScreen}
        options={{
          tabBarLabel: 'Information',
          tabBarLabelStyle: styles.label,
          tabBarIcon: renderInformationIcon,
        }}
      />
    </TabBar.Navigator>
  );
};

const Navigation = () => {
  const colors = useTheme();

  const navTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: colors.BACKGROUND,
      },
    };
  }, [colors]);

  return (
    <NavigationContainer
      theme={navTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <StatusBar backgroundColor={colors.BACKGROUND} barStyle="dark-content" />
      <RootStack.Navigator initialRouteName="Root">
        <RootStack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.BACKGROUND,
            },
          }}>
          <RootStack.Screen
            name="Root"
            component={BottomTabBar}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="Infection"
            component={InfectionScreen}
            options={{
              headerShadowVisible: true,
              headerStyle: {
                backgroundColor: colors.BACKGROUND,
              },
              title: '',
              headerLeft: renderHeaderLeft,
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
