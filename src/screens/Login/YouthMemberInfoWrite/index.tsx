import AppBar from '@components/atom/AppBar';
import BG from '@components/atom/BG';
import Button from '@components/atom/Button';
import Txt from '@components/atom/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@stackNav/Auth';
import {Gender} from '@type/api/member';
import {useState} from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'YouthMemberInfoWriteScreen'
>;

const YouthMemberInfoWriteScreen = ({
  route,
  navigation,
}: Readonly<AuthProps>) => {
  const {nickname, imageUri, role} = route.params;
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);

  const handleNext = async () => {
    navigation.navigate('YouthWakeUpTimeScreen', {
      nickname,
      imageUri,
      role,
      birthday,
      gender: gender!,
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <BG type="main">
        <AppBar
          goBackCallbackFn={() => {
            navigation.goBack();
          }}
          className="absolute top-[0] w-full"
        />
        <View className="w-[25%] h-[3] bg-yellowPrimary absolute top-[63]" />
        <View className="flex-1 mt-[50]">
          <View className="items-center pt-[80]">
            <Txt
              type="title2"
              text={`${nickname ?? ''} 님,\n당신에 대해 알려주세요`}
              className="text-white mt-[26] text-center"
            />

            <View className="mt-[30] px-[46] w-full">
              <TextInput
                value={birthday}
                onChangeText={setBirthday}
                placeholder="생년월일 (YYYYMMDD)"
                placeholderTextColor={'#A0A0A0'}
                className={`text-white py-[12] px-[23] font-r w-full inline-block border ${
                  birthday
                    ? 'border-yellow200 bg-white/20'
                    : 'border-white/10 bg-white/10'
                } mt-[31]`}
                style={{fontSize: 16, borderRadius: 10}}
              />

              <View className="mt-[28] flex-row">
                <Pressable
                  className={`flex-1 h-[121] items-center justify-center border mr-[22] ${
                    gender === 'MALE'
                      ? 'bg-white/20 border-yellowPrimary'
                      : 'bg-white/10 border-white/10'
                  }`}
                  style={{borderRadius: 10}}
                  onPress={() => setGender('MALE')}>
                  <Txt
                    type="title3"
                    text="남성"
                    className="text-white text-center"
                  />
                </Pressable>
                <Pressable
                  className={`flex-1 h-[121] items-center justify-center border ${
                    gender === 'FEMALE'
                      ? 'bg-white/20 border-yellowPrimary'
                      : 'bg-white/10 border-white/10'
                  }`}
                  style={{borderRadius: 10}}
                  onPress={() => setGender('FEMALE')}>
                  <Txt
                    type="title3"
                    text="여성"
                    className="text-white text-center"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Image
          source={require('@assets/pngs/background/background_youth5.png')}
          className="w-full h-auto flex-1 mt-[177]"
        />
        <View className="absolute left-0 bottom-[30] w-full px-[40]">
          <Button
            text="다음"
            onPress={handleNext}
            disabled={!birthday || !gender}
          />
        </View>
      </BG>
    </SafeAreaView>
  );
};

export default YouthMemberInfoWriteScreen;
