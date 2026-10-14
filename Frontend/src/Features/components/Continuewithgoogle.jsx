import React from 'react';

/**
 * Google Icon SVG conforming strictly to Google Identity branding specifications
 * Colors: Red (#EA4335), Yellow (#FBBC05), Green (#34A853), Blue (#4285F4)
 */
const GoogleLogo = ({ className = 'w-5 h-5 shrink-0' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Blue segment */}
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    {/* Green segment */}
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    {/* Yellow segment */}
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    {/* Red segment */}
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

/**
 * Continuewithgoogle Component
 * 
 * Complies with official Google Identity Services Branding Guidelines:
 * - Proper "G" logo proportions and official Google colors (#4285F4, #34A853, #FBBC05, #EA4335)
 * - Approved text phrasing ("Continue with Google", "Sign in with Google", "Sign up with Google")
 * - Google typography: Roboto font-family, font-weight 500 (Medium), 14px text size, 0.25px letter-spacing
 * - Google standard styling (Light outline #747775/#dadce0, dark, or neutral filled)
 * - Clear space and minimum touch targets (>= 40px height)
 * - Built-in optional divider with subtle line for auth forms
 */
const Continuewithgoogle = ({
  text = 'Continue with Google',
  href = '/api/auth/google',
  onClick,
  theme = 'outline', // 'outline' | 'dark' | 'neutral'
  shape = 'rounded', // 'rounded' (rounded-xl) | 'pill' (rounded-full) | 'square' (rounded-md)
  showDivider = true,
  dividerText = 'or',
  fullWidth = true,
  isLoading = false,
  disabled = false,
  className = '',
}) => {
  // Shape variants
  const shapeClasses = {
    rounded: 'rounded-xl',
    pill: 'rounded-full',
    square: 'rounded-md',
  }[shape] || 'rounded-xl';

  // Theme variants as per Google Identity Services specs
  const themeClasses = {
    // Official Light outline theme (#747775 border, white bg, #1f1f1f text)
    outline:
      'bg-white text-[#1f1f1f] border border-[#747775] hover:bg-[#F8FAFD] hover:border-[#747775] hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.30),0_1px_3px_1px_rgba(60,64,67,0.15)] active:bg-[#F1F3F4] active:shadow-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2',
    // Official Dark theme (#131314 bg, #8E918F border, #E3E3E3 text)
    dark:
      'bg-[#131314] text-[#E3E3E3] border border-[#8E918F] hover:bg-[#202124] hover:shadow-md active:bg-[#2D2E30] focus-visible:ring-2 focus-visible:ring-[#8AB4F8] focus-visible:ring-offset-2',
    // Official Neutral filled theme (#F2F2F2 bg, borderless, #1F1F1F text)
    neutral:
      'bg-[#F2F2F2] text-[#1F1F1F] border border-transparent hover:bg-[#E8EAED] active:bg-[#DADCE0] focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2',
  }[theme] || themeClasses.outline;

  const widthClass = fullWidth ? 'w-full' : 'w-auto min-w-[200px] max-w-[400px]';

  // Common button/anchor styling
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-3
    h-11 px-4 py-2.5
    font-['Roboto',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]
    text-[14px] font-medium leading-none tracking-[0.25px]
    transition-all duration-150 select-none outline-none
    ${widthClass} ${shapeClasses} ${themeClasses}
    ${disabled || isLoading ? 'opacity-40 pointer-events-none cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 h-5 w-5 text-[#4285F4]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        <GoogleLogo className="w-5 h-5 shrink-0 transition-transform group-hover:scale-105 duration-150" />
      )}
      <span className="truncate">{text}</span>
    </>
  );

  return (
    <div className={`w-full ${fullWidth ? '' : 'inline-block'}`}>
      {/* Optional Divider matching auth form aesthetic */}
      {showDivider && (
        <div className="relative my-4 flex items-center justify-center">
          <div className="w-full border-t border-neutral-200" />
          <span className="absolute bg-white px-3 text-[11px] uppercase tracking-wider text-neutral-400 font-semibold select-none">
            {dividerText}
          </span>
        </div>
      )}

      {/* Button / Link element */}
      {onClick || !href ? (
        <button
          type="button"
          onClick={onClick}
          disabled={disabled || isLoading}
          aria-label={text}
          className={baseClasses}
        >
          {content}
        </button>
      ) : (
        <a
          href={href}
          aria-label={text}
          className={baseClasses}
          tabIndex={disabled ? -1 : 0}
        >
          {content}
        </a>
      )}
    </div>
  );
};

export default Continuewithgoogle;
