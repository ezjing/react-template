/**
 * CRACO 설정 파일
 *
 * - 역할: CRA(react-scripts)의 webpack 설정을 덮어쓰기
 * - alias: jsconfig.json의 @/ 경로 별칭을 빌드에서도 동작하도록 연결
 * - 연동: jsconfig.json(에디터 자동완성) + 이 파일(webpack 빌드) 세트로 사용
 */

const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
