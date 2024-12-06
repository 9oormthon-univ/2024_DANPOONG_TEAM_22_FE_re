import {EmotionType, LetterResponseData} from '@type/api/providedFile';
import FightingIcon from '@assets/svgs/emotion/emotion_fighting.svg';
import LoveIcon from '@assets/svgs/emotion/emotion_love.svg';
import StarIcon from '@assets/svgs/emotion/emotion_star.svg';
import ThumbIcon from '@assets/svgs/emotion/emotion_thumb.svg';
import {ReactNode} from 'react';

const currentDate = new Date().toISOString();

const LETTERS_DATA: LetterResponseData[] = [
  {
    providedFileId: 1,
    createdAt: currentDate,
    thanksMessage:
      '자립한 뒤로 지치고 외로웠는데 바람돌이님의 위로 한 마디가 제 삶을 움직일 동력이 되어줬어요. 감사합니다.',
    alarmType: '위로',
  },
  {
    providedFileId: 2,
    createdAt: currentDate,
    thanksMessage: '요즘 많이 힘들었는데 덕분에 힘이 났어요. 정말 감사드려요!',
    alarmType: '기상',
  },
  {
    providedFileId: 3,
    createdAt: currentDate,
    thanksMessage:
      '일 하느라 바쁜 일상이었는데 덕분에 힘 내서 할 수 있었어요. 감사해요.',
    alarmType: '식사',
  },
];

export const EMOTION_OPTIONS: {
  icon: ReactNode;
  label: string;
  type: EmotionType;
}[] = [
  {icon: <StarIcon />, label: '고마워요', type: 'THANK_YOU'},
  {icon: <ThumbIcon />, label: '응원해요', type: 'HELPFUL'},
  {icon: <FightingIcon />, label: '화이팅', type: 'MOTIVATED'},
  {icon: <LoveIcon />, label: '사랑해요', type: 'LOVE'},
];

export {LETTERS_DATA};