import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProfileTabParamList = {
  Profile: undefined;
};

export type InformationTabParamList = {
  Information: undefined;
};

export type BottomBarParamList = {
  MainTab: undefined;
  InformationTab: NavigatorScreenParams<InformationTabParamList>;
  ProfileTab: NavigatorScreenParams<ProfileTabParamList>;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomBarParamList>;
  Infection: { id: string };
  Course: {
    courseId: number;
    days: number;
    area: string;
  };
  DeleteAccount: undefined;
  Markdown: {
    url: string;
  };
};

export type AuthStackParamList = {
  Welcome: undefined;
  LogIn: undefined;
  ForgotPassword: {
    email: string;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;
