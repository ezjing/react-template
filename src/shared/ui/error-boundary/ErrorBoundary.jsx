import React from 'react';

/**
 * React Error Boundary — 하위 컴포넌트 렌더링 오류를 잡아 Fallback UI로 대체합니다.
 *
 * @example 기본 사용 (내장 Fallback)
 * <ErrorBoundary>
 *   <MyPage />
 * </ErrorBoundary>
 *
 * @example 커스텀 Fallback
 * <ErrorBoundary fallback={(error, reset) => <MyFallback error={error} onReset={reset} />}>
 *   <MyPage />
 * </ErrorBoundary>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {(error: Error, reset: () => void) => React.ReactNode} [props.fallback]
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.Reset = this.Reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  Reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (!hasError) return children;

    if (typeof fallback === 'function') {
      return fallback(error, this.Reset);
    }

    return <DefaultFallback error={error} onReset={this.Reset} />;
  }
}

function DefaultFallback({ error, onReset }) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-xl border border-rose-200 bg-rose-50 p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-rose-600"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-rose-700">렌더링 오류가 발생했습니다.</p>
        {error?.message && (
          <p className="mt-1 text-xs text-rose-500">{error.message}</p>
        )}
      </div>
      <button
        type="button"
        onClick={onReset}
        className="rounded-lg border border-rose-300 px-4 py-2 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-100"
      >
        다시 시도
      </button>
    </div>
  );
}
