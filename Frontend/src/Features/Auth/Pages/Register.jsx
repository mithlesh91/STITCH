import React, { useState } from 'react';
import { AuthHook } from "../Hook/Auth.user"
import { useNavigate, Link } from 'react-router';
import Continuewithgoogle from '../../components/Continuewithgoogle';
const Register = () => {
  // Pure local state - No backend or Redux connection
  const { registeruser } = AuthHook();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    contactnumber: '',
    role: 'buyer', // Buyer is default
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Role Selection (One at a time)
  const handleRoleSelect = (selectedRole) => {
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
  };

  // Form Submit (Pure Frontend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registeruser({
      fullname: formData.fullname,
      Email: formData.email,
      password: formData.password,
      contact: formData.contactnumber,
      isSeller: formData.role === 'seller'
    })
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center p-4 sm:p-6 antialiased font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">

      {/* 1. New Cinematic Clothing Brand Campaign Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/snitch-campaign-bg.jpg"
          alt="Snitch Streetwear Fashion Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.02]"
        />
        {/* Soft atmospheric gradient overlay for readability and high-fashion aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/35 to-neutral-950/20 backdrop-blur-[1px]" />
      </div>

      {/* 2. Top Minimalist Clothing Brand Header */}
      <header className="relative z-10 w-full max-w-5xl py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-black tracking-[0.3em] uppercase drop-shadow-md font-['Plus_Jakarta_Sans',sans-serif]">
            SNITCH
          </span>
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
              Create an account
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Join the apparel movement. Select your role to begin.
            </p>
          </div>

          {/* Improved Role Selector: Buyer & Seller (Choose one at a time, Buyer is default) */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Account Role
            </label>
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-neutral-100/90 rounded-2xl border border-neutral-200/80">

              {/* Buyer Option (Default) */}
              <button
                type="button"
                onClick={() => handleRoleSelect('buyer')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${formData.role === 'buyer'
                  ? 'bg-neutral-950 text-white shadow-md font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${formData.role === 'buyer' ? 'bg-emerald-400' : 'bg-neutral-400'}`} />
                <span>Buyer</span>
                <span className={`text-[10px] font-normal ${formData.role === 'buyer' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  (Default)
                </span>
              </button>

              {/* Seller Option */}
              <button
                type="button"
                onClick={() => handleRoleSelect('seller')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${formData.role === 'seller'
                  ? 'bg-neutral-950 text-white shadow-md font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${formData.role === 'seller' ? 'bg-emerald-400' : 'bg-neutral-400'}`} />
                <span>Seller</span>
              </button>

            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name - Elevated Input Container */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
              >
                Full Name
              </label>
              <div className="relative flex items-center rounded-xl bg-neutral-50/90 hover:bg-neutral-100/60 focus-within:bg-white border border-neutral-200 focus-within:border-neutral-950 focus-within:ring-2 focus-within:ring-neutral-950/10 transition-all duration-200 shadow-2xs">
                <span className="pl-3.5 pr-2 text-neutral-400 flex items-center pointer-events-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Aarav Sharma"
                  className="w-full pr-3.5 py-2.5 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Email Address - Elevated Input Container */}
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

            {/* Contact Number - Elevated Input Container with Integrated Prefix */}
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
                    handleChange({
                      target: { name: 'contactnumber', value: cleaned },
                    });
                  }}
                  placeholder="9876543210"
                  className="w-full px-3.5 py-2.5 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password - Elevated Input Container with Lock & Show/Hide */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider"
                >
                  Password
                </label>
                <span className="text-[11px] text-neutral-400">6–12 characters</span>
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
                  minLength={6}
                  maxLength={12}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
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
            
            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-neutral-950 text-white font-semibold text-sm tracking-wide hover:bg-neutral-800 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-neutral-950/20"
              >
                Register as {formData.role === 'seller' ? 'Seller' : 'Buyer'}
              </button>
              <Continuewithgoogle/>
            </div>

          </form>

          {/* Footer Link */}
          <div className="mt-6 pt-5 border-t border-neutral-100 text-center text-xs text-neutral-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-neutral-950 hover:underline">
              Sign in
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

export default Register;
