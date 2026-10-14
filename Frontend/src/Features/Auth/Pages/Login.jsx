import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { AuthHook } from '../Hook/Auth.user';
import Continuewithgoogle from '../../components/Continuewithgoogle';

const Login = () => {
  const { loginuser } = AuthHook();
  const navigate = useNavigate();

  // 'email' or 'contact' login method selector
  const [loginMethod, setLoginMethod] = useState('email');

  // Pure local form state - no backend connection
  const [formData, setFormData] = useState({
    email: '',
    contactnumber: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Switch between Email and Contact number
  const handleMethodSelect = (method) => {
    setLoginMethod(method);
    setLoginSuccess(null);
  };

  // Pure Frontend Submit (Simulated Login without backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await loginuser({
      Email: formData.email,
      password: formData.password,
      contact: formData.contactnumber,

    })

    // Simulate instant responsive UI feedback
    setTimeout(() => {
      setIsLoading(false);
      const identifier =
        loginMethod === 'email' ? formData.email : `+91 ${formData.contactnumber}`;
      setLoginSuccess(`Welcome back! Successfully signed in with ${identifier}.`);
    }, 600);
    navigate("/")
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center p-4 sm:p-6 antialiased font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">
      {/* 1. Cinematic Clothing Brand Campaign Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/snitch-campaign-bg.jpg"
          alt="Snitch Streetwear Fashion Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.02]"
        />
        {/* Atmospheric gradient overlay for readability and high-fashion aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/40 to-neutral-950/25 backdrop-blur-[1px]" />
      </div>

      {/* 2. Top Minimalist Clothing Brand Header */}
      <header className="relative z-10 w-full max-w-5xl py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-[0.3em] uppercase drop-shadow-md font-['Plus_Jakarta_Sans',sans-serif]">
            SNITCH
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-300 hidden sm:inline border-l border-white/20 pl-3 font-medium">
            ATELIER 2026
          </span>
        </div>

        <div className="text-[11px] uppercase tracking-widest text-neutral-200 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 flex items-center gap-2 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Streetwear Capsule
        </div>
      </header>

      {/* 3. Centered Clean Google Stitch Form Card */}
      <main className="relative z-10 my-auto w-full max-w-[430px]">
        <div className="w-full bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] p-7 sm:p-9 transition-all">
          {/* Brand & Heading */}
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-black tracking-[0.3em] uppercase text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] px-3 py-1 bg-neutral-100 rounded-full mb-2">
              SNITCH
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-950">
              Welcome back
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Sign in using your email address or contact number
            </p>
          </div>

          {/* Success Notification Banner (Pure Frontend Feedback) */}
          {loginSuccess && (
            <div className="mb-5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5 animate-fadeIn">
              <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold">Sign In Successful</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">{loginSuccess}</p>
              </div>
            </div>
          )}

          {/* Method Selector: Choose between Email and Contact Number */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Login Method
            </label>
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-neutral-100/90 rounded-2xl border border-neutral-200/80">
              {/* Option 1: Email */}
              <button
                type="button"
                onClick={() => handleMethodSelect('email')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${loginMethod === 'email'
                  ? 'bg-neutral-950 text-white shadow-md font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </button>

              {/* Option 2: Contact Number */}
              <button
                type="button"
                onClick={() => handleMethodSelect('contact')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${loginMethod === 'contact'
                  ? 'bg-neutral-950 text-white shadow-md font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Phone</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Conditional Input: Email Address */}
            {loginMethod === 'email' && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative flex items-center rounded-xl bg-neutral-50/90 hover:bg-neutral-100/60 focus-within:bg-white border border-neutral-200 focus-within:border-neutral-950 focus-within:ring-2 focus-within:ring-neutral-950/10 transition-all duration-200 shadow-2xs">
                  <span className="pl-3.5 pr-2 text-neutral-400 flex items-center pointer-events-none">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@snitch.com"
                    className="w-full pr-3.5 py-2.5 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>
            )}

            {/* Conditional Input: Contact Number */}
            {loginMethod === 'contact' && (
              <div>
                <label
                  htmlFor="contactnumber"
                  className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
                >
                  Contact Number
                </label>
                <div className="flex items-center rounded-xl bg-neutral-50/90 hover:bg-neutral-100/60 focus-within:bg-white border border-neutral-200 focus-within:border-neutral-950 focus-within:ring-2 focus-within:ring-neutral-950/10 transition-all duration-200 overflow-hidden shadow-2xs">
                  <span className="pl-3.5 pr-3 py-2.5 bg-neutral-100/80 text-neutral-700 text-xs font-semibold border-r border-neutral-200 select-none flex items-center gap-1">
                    <span>🇮🇳</span> +91
                  </span>
                  <input
                    id="contactnumber"
                    name="contactnumber"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.contactnumber}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/\D/g, '');
                      setFormData((prev) => ({ ...prev, contactnumber: cleaned }));
                    }}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Password reset instructions have been simulated.");
                  }}
                  className="text-[11px] font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative flex items-center rounded-xl bg-neutral-50/90 hover:bg-neutral-100/60 focus-within:bg-white border border-neutral-200 focus-within:border-neutral-950 focus-within:ring-2 focus-within:ring-neutral-950/10 transition-all duration-200 shadow-2xs">
                <span className="pl-3.5 pr-2 text-neutral-400 flex items-center pointer-events-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pr-12 py-2.5 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-950 cursor-pointer"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember Me Option */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-neutral-300 text-neutral-950 focus:ring-neutral-950/20 cursor-pointer accent-neutral-950"
                />
                <span className="text-xs text-neutral-600 font-medium">
                  Remember this device
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-neutral-950 text-white font-semibold text-sm tracking-wide hover:bg-neutral-800 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-neutral-950/20 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <span>
                    Sign in with {loginMethod === 'email' ? 'Email' : 'Contact'}
                  </span>
                )}
              </button>
            </div>
            <Continuewithgoogle/>
          </form>

          {/* Footer Link to Register */}
          <div className="mt-6 pt-5 border-t border-neutral-100 text-center text-xs text-neutral-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-neutral-950 hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </main>

      {/* 4. Bottom Clothing Brand Badges */}
      <footer className="relative z-10 w-full max-w-5xl py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-300 gap-2 drop-shadow-sm font-medium">
        <div className="flex items-center gap-4">
          <span>&bull; 100% Genuine Apparel</span>
          <span>&bull; Express 24H Dispatch</span>
          <span>&bull; Easy 7-Day Returns</span>
        </div>
        <p className="text-neutral-400">
          &copy; 2026 SNITCH APPAREL LTD.
        </p>
      </footer>
    </div>
  );
};

export default Login;
