import BG from '@components/atom/BG';
import Txt from '@components/atom/Txt';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStatusBarStyle} from '@hooks/useStatusBarStyle';
const LoadingScreen = () => {
  // 상태바 스타일 설정
  const BackColorType = 'solid';
  useStatusBarStyle(BackColorType);

  return (
    <SafeAreaView className="flex-1">
      <BG type={BackColorType}>
        <View className="flex-1 justify-center items-center">
          <View className="absolute top-[-100] w-full h-full">
            <LottieView
              style={{
                flex: 1,
              }}
              source={require('@assets/lottie/loadingDots.json')}
              autoPlay
              loop
            />
          </View>
          <Txt
            type="body3"
            text="잠시만 기다려주세요"
            className="text-gray300 mt-[65] mb-[28]"
          />
          <Txt
            type="title2"
            text={'따스한 마음을 담은\n목소리를 준비 중이에요.'}
            className="text-white text-center"
          />
        </View>
      </BG>
    </SafeAreaView>
  );
};

export default LoadingScreen;
