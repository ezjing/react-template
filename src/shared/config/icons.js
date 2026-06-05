/**
 * Lucide 아이콘 래핑 — ICON_TYPES에 등록 후 name으로 사용
 *
 * @example
 * import { Icon } from '@/shared/config/icons';
 *
 * function MyComponent() {
 *   return (
 *     <div>
 *       <Icon name="home" size={20} className="text-blue-500" />
 *       <Icon name="settings" />
 *     </div>
 *   );
 * }
 */

import React from 'react';
import {
  Home,
  LogIn,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  Pencil,
  Trash2,
  AlertCircle,
  CheckCircle,
  Info,
  User,
  Settings,
  Bell,
} from 'lucide-react';

export const ICON_TYPES = {
  home: Home,
  user: User,
  settings: Settings,
  bell: Bell,
  logIn: LogIn,
  logOut: LogOut,
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  search: Search,
  plus: Plus,
  pencil: Pencil,
  trash2: Trash2,
  alertCircle: AlertCircle,
  checkCircle: CheckCircle,
  info: Info,
};

/**
 * @typedef {keyof typeof ICON_TYPES} IconType
 *
 * @param {Object} props
 * @param {IconType} props.name
 * @param {number | string} [props.size=24]
 * @param {string} [props.className]
 */
export function Icon({ name, size = 24, className, ...props }) {
  const TargetIcon = ICON_TYPES[name];

  if (!TargetIcon) {
    console.warn(`Icon "${name}"을 찾을 수 없습니다.`);
    return null;
  }

  return <TargetIcon size={size} className={className} {...props} />;
}
