import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login';
import MemberInfoWriteScreen from '@screens/Login/MemberInfoWrite';
import NicknameWriteScreen from '@screens/Login/NicknameWrite';
import RoleSelectScreen from '@screens/Login/RoleSelect';
import VolunteerNoticeScreen from '@screens/Login/VolunteerNotice';
import VolunteerOnboardingScreen from '@screens/Login/VolunteerOnboarding';
import YouthEatScreen from '@screens/Login/YouthEat';
import YouthMemberInfoWriteScreen from '@screens/Login/YouthMemberInfoWrite';
import YouthNoticeScreen from '@screens/Login/YouthNotice';
import YouthOnboardingScreen from '@screens/Login/YouthOnboarding';
import YouthSleepTimeScreen from '@screens/Login/YouthSleepTime';
import YouthWakeUpTimeScreen from '@screens/Login/YouthWakeUpTime';

export type AuthStackParamList = {
  LoginScreen: undefined;
  NicknameWriteScreen: undefined;
  RoleSelectScreen: {nickname: string; imageUri: string};
  MemberInfoWriteScreen: {nickname: string; imageUri: string; role: string};
  VolunteerOnboardingScreen: undefined;
  VolunteerNoticeScreen: undefined;
  YouthOnboardingScreen: {nickname: string; imageUri: string; role: string};
  YouthMemberInfoWriteScreen: {
    nickname: string;
    imageUri: string;
    role: string;
  };
  YouthWakeUpTimeScreen: {
    nickname: string;
    imageUri: string;
    role: string;
    birthday: string;
    gender: string;
  };
  YouthEatScreen: {
    nickname: string;
    imageUri: string;
    role: string;
    birthday: string;
    gender: string;
    wakeUpTime: string;
  };
  YouthSleepTimeScreen: {
    nickname: string;
    imageUri: string;
    role: string;
    birthday: string;
    gender: string;
    wakeUpTime: string;
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  YouthNoticeScreen: {
    nickname: string;
    imageUri: string;
    role: string;
    birthday: string;
    gender: string;
    wakeUpTime: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    sleepTime: string;
  };
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
      <AuthStack.Screen
        name="NicknameWriteScreen"
        component={NicknameWriteScreen}
        options={{title: '닉네임 입력'}}
      />
      <AuthStack.Screen
        name="RoleSelectScreen"
        component={RoleSelectScreen}
        options={{title: '역할 선택'}}
      />
      <AuthStack.Screen
        name="MemberInfoWriteScreen"
        component={MemberInfoWriteScreen}
        options={{title: '조력자 정보 입력'}}
      />
      <AuthStack.Screen
        name="VolunteerOnboardingScreen"
        component={VolunteerOnboardingScreen}
        options={{title: '조력자 온보딩'}}
      />
      <AuthStack.Screen
        name="VolunteerNoticeScreen"
        component={VolunteerNoticeScreen}
        options={{title: '조력자 주의사항'}}
      />
      <AuthStack.Screen
        name="YouthOnboardingScreen"
        component={YouthOnboardingScreen}
        options={{title: '청년 온보딩'}}
      />
      <AuthStack.Screen
        name="YouthMemberInfoWriteScreen"
        component={YouthMemberInfoWriteScreen}
        options={{title: '청년 정보 입력'}}
      />
      <AuthStack.Screen
        name="YouthWakeUpTimeScreen"
        component={YouthWakeUpTimeScreen}
        options={{title: '청년 기상 정보 입력'}}
      />
      <AuthStack.Screen
        name="YouthEatScreen"
        component={YouthEatScreen}
        options={{title: '청년 식사 정보 입력'}}
      />
      <AuthStack.Screen
        name="YouthSleepTimeScreen"
        component={YouthSleepTimeScreen}
        options={{title: '청년 취침 정보 입력'}}
      />
      <AuthStack.Screen
        name="YouthNoticeScreen"
        component={YouthNoticeScreen}
        options={{title: '청년 주의사항'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;
