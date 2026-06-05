/**
 * Tailwind CSS 설정 파일
 *
 * - 역할: Tailwind 유틸리티 클래스가 어떤 파일을 스캔할지, 어떤 색·폰트를 쓸지 정의
 * - colors: shared/config/colors.js 에서 import
 * - fonts:  shared/config/fonts.js 에서 import
 * - 연동:   postcss.config.js 가 이 설정을 읽어 CSS로 변환
 */

const colors = require('./src/shared/config/colors').default;
const fonts = require('./src/shared/config/fonts').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
