import React from 'react';
import Styles from './Mbti_text.module.scss';

interface MBTIFortunes {
  [key: string]: {
    fortune: string;
    imageSrc: string;
  };
}

const mbtiFortunes: MBTIFortunes = {
  INTJ: {
    fortune:
      '능력이 부족하니 알찬 결실을 거두기가 만무한 실정입니다. 현재 상황을 냉정히 평가하고 부족한 부분을 보완해야 합니다. ',
    imageSrc: '/K_img/img_circle_mbti_istj.png',
  },
  INFJ: {
    fortune:
      '능력이 부족하니 알찬 결실을 거두기가 만무한 실정입니다. 현재 상황을 냉정히 평가하고 부족한 부분을 보완해야 합니다. ',
    imageSrc: '/K_img/img_circle_mbti_isfj.png',
  },
  INFP: {
    fortune: '오늘은 감수성이 풍부한 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_mbti_infj.png',
  },
  INTP: {
    fortune: '오늘은 새로운 아이디어를 구상할 수 있는 날이에요. 창의력을 발휘하세요!',
    imageSrc: '/K_img/img_circle_mbti_intj.png',
  },
  ISTP: {
    fortune: '호기심을 가지고 새로운 것을 시도해보세요. 즐거운 경험이 될 거예요.',
    imageSrc: '/K_img/img_circle_mbti_istp.png',
  },
  ISFP: {
    fortune: '자연의 아름다움을 느낄 수 있는 하루가 될 것입니다. 산책이나 그림을 그려보세요.',
    imageSrc: '/K_img/img_circle_mbti_isfp.png',
  },
  ISTJ: {
    fortune: '창의력을 발휘하는 좋은 날이 될 거에요. 새로운 아이디어가 떠오를 거예요.',
    imageSrc: '/K_img/img_circle_mbti_infp.png',
  },
  ISFJ: {
    fortune: '목표를 설정하고 계획을 세우는 데에 집중하세요. 당신의 미래가 밝을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_intj.png',
  },
  ESTP: {
    fortune: '대담한 시도를 해보세요. 새로운 경험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_mbti_estp.png',
  },
  ESFP: {
    fortune: '오늘은 즐겁고 에너지가 넘치는 날이 될 거예요. 취미활동을 즐겨보세요!',
    imageSrc: '/K_img/img_circle_mbti_esfp.png',
  },
  ENFP: {
    fortune: '신나는 모험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_mbti_enfp.png',
  },
  ENTP: {
    fortune: '호기심이 가득한 하루가 될 거예요. 새로운 도전에 도전해보세요!',
    imageSrc: '/K_img/img_circle_mbti_entp.png',
  },
  ENFJ: {
    fortune: '오늘은 새로운 인연을 만날 수 있을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_enfj.png',
  },
  ENTJ: {
    fortune: '당신의 목표를 이루기 위한 좋은 계획이 있을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_entj.png',
  },
  ESTJ: {
    fortune: '일정을 잘 조절하고 집중하세요. 당신의 능력을 발휘할 수 있는 날이에요.',
    imageSrc: '/K_img/img_circle_mbti_estj.png',
  },
  ESFJ: {
    fortune: '다른 사람들과 소통하는 데에 만족을 느낄 수 있는 날이에요. 다정한 표현을 해보세요!',
    imageSrc: '/K_img/img_circle_mbti_esfj.png',
  },
};

const TextImage: React.FC = () => {
  const mbtiFortuneMessages = Object.entries(mbtiFortunes).map(([mbti, { fortune, imageSrc }]) => (
    <div key={mbti}>
      <img src={imageSrc} alt={mbti} className={Styles.mbtiImage} />
      <div className={Styles.message}>
        <h2 className={Styles.mbtiName}>{mbti}</h2>
        <p className={Styles.mbtiTMI}>{fortune}</p>
      </div>
    </div>
  ));

  return (
    <div className={Styles.cnt}>
      <ul>{mbtiFortuneMessages}</ul>
    </div>
  );
  return (
    <div className="App">
      <div className="scroll-container">
        {/* 조건부 렌더링을 사용하여 화면 너비에 따라 이미지 표시 여부 결정 */}
        <img className="hidden-image" src="your-image-url.jpg" alt="Your Image" />
        {/* 여기에 스크롤이 필요한 내용 추가 */}
      </div>
    </div>
  );
};

export default TextImage;
