import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib/cn';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.error]
 * @param {string} [props.hint]
 * @param {React.ReactNode} [props.leftAddon]   - 왼쪽 아이콘/텍스트
 * @param {React.ReactNode} [props.rightAddon]  - 오른쪽 아이콘/텍스트
 * @param {boolean} [props.fullWidth=false]
 * @param {string} [props.className]            - input 엘리먼트 className
 * @param {string} [props.wrapperClassName]     - 래퍼 div className
 */
export const Input = forwardRef(function Input(
  {
    label,
    error,
    hint,
    leftAddon,
    rightAddon,
    fullWidth = false,
    className,
    wrapperClassName,
    id,
    ...props
  },
  ref,
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1', fullWidth && 'w-full', wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftAddon && (
          <span className="absolute left-3 flex items-center text-slate-400">
            {leftAddon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-9 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
            'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
            'dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500',
            error
              ? 'border-rose-500 focus:ring-rose-500 dark:border-rose-500'
              : 'border-slate-300 dark:border-slate-600 dark:focus:ring-violet-500',
            leftAddon && 'pl-9',
            rightAddon && 'pr-9',
            className,
          )}
          {...props}
        />

        {rightAddon && (
          <span className="absolute right-3 flex items-center text-slate-400">
            {rightAddon}
          </span>
        )}
      </div>

      {error && (
        <p className="text-xs text-rose-500" role="alert">
          {error}
        </p>
      )}
      {!error && hint && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      )}
    </div>
  );
});
