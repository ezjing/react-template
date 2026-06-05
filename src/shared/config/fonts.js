/**
 * 프로젝트 폰트 중앙 관리
 *
 * - FONT_FAMILY : tailwind.config.js → theme.extend.fontFamily 에 spread
 * - FONT_META   : 웹폰트 이름·URL 등 부가 정보 (로드가 필요한 폰트만 등록)
 *
 * @example Tailwind 클래스로 사용
 *   <p className="font-sans">본문</p>
 *   <h1 className="font-display">제목</h1>
 *
 * @example JS에서 직접 참조
 *   import { FONT_FAMILY } from '@/shared/config/fonts';
 *   style={{ fontFamily: FONT_FAMILY.display.join(', ') }}
 */

export const FONT_FAMILY = {
  /** 본문 — 시스템 폰트 스택 */
  sans: [
    "-apple-system",
    "BlinkMacSystemFont",
    "'Segoe UI'",
    "Roboto",
    "sans-serif",
  ],
  /** 코드 */
  mono: ["source-code-pro", "Menlo", "Monaco", "Consolas", "monospace"],
  /** 제목/디스플레이 — 웹폰트 (Pretendard) */
  display: ["'Pretendard'", "sans-serif"],
};

/**
 * 외부에서 로드해야 하는 웹폰트 정보
 * globals.css @import 또는 index.html <link> 에 사용
 *
 * @example globals.css 에서 @import 로 로드
 *   @import url(FONT_META.display.url);
 *
 * @example index.html 에서 <link> 로 로드
 *   import { FONT_META } from '@/shared/config/fonts';
 *   <link rel="stylesheet" href={FONT_META.display.url} />
 */
export const FONT_META = {
  display: {
    name: "Pretendard",
    url: "https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/static/pretendard.css",
  },
};

/** tailwind.config.js 에서 require().default 로 그대로 사용 가능 */
export default FONT_FAMILY;
