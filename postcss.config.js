/**
 * PostCSS 설정 파일
 *
 * - 역할: CSS 빌드 시 변환 플러그인 지정
 * - tailwindcss:   @tailwind 지시어·유틸리티 클래스를 실제 CSS로 변환
 * - autoprefixer:  -webkit- 등 브라우저별 접두사 자동 추가
 * - 연동:          CRA(react-scripts)가 빌드할 때 자동으로 읽음
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
