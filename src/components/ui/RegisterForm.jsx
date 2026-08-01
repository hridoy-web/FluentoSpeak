'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Mail, Lock, ArrowRight, Eye, EyeOff, Camera, X, Check, Cross } from 'lucide-react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState('');

  // Password Requirements Logic
  const passwordRules = [
    { id: 1, label: "কমপক্ষে ৮টি অক্ষর", valid: password.length >= 8 },
    { id: 2, label: "একটি বড় হাতের অক্ষর (A-Z)", valid: /[A-Z]/.test(password) },
    { id: 3, label: "একটি সংখ্যা (0-9)", valid: /[0-9]/.test(password) },
    { id: 4, label: "একটি স্পেশাল ক্যারেক্টার (@, $, !, %, etc.)", valid: /[^A-Za-z0-9]/.test(password) },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.valid);

  // Handle Image Upload & Validation
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setImageError("ইমেজ সাইজ সর্বোচ্চ ৫MB হতে পারবে!");
        e.target.value = "";
        return;
      }
      setImageError('');
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    const fileInput = document.getElementById('avatar');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mandatory Image Check
    if (!imagePreview) {
      setImageError("প্রোফাইল ছবি দেয়া বাধ্যতামূলক!");
      return;
    }

    // Password Check
    if (!isPasswordValid) {
      alert("অনুগ্রহ করে পাসওয়ার্ডের সব নিয়ম মেনে টাইপ করুন!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    console.log("Registration Data:", dataObj);

    setTimeout(() => {
      setIsLoading(false);
      alert("রেজিস্ট্রেশন সফল হয়েছে!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="রেজিস্ট্রেশন ফরম">
      
      {/* REQUIRED Profile Image Upload Field */}
      <div>
        <div className={`flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border transition-all ${imageError ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200/80 dark:border-slate-700/60'}`}>
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative group">
              {imagePreview ? (
                <Image 
                  src={imagePreview} 
                  alt="প্রোফাইল প্রিভিউ" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
              )}
              
              <input
                id="avatar"
                name="avatar"
                type="file"
                required
                accept="image/png, image/jpeg, image/webp"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="প্রোফাইল ছবি আপলোড করুন"
              />
            </div>

            {imagePreview && (
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-1.5 -right-1.5 p-1 bg-rose-500 text-white rounded-full shadow-md hover:bg-rose-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <div>
            <label htmlFor="avatar" className="block text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer hover:text-brand-primary">
              প্রোফাইল ছবি দিন <span className="text-rose-500">* (বাধ্যতামূলক)</span>
            </label>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              JPG, PNG বা WEBP (সর্বোচ্চ ৫MB)
            </p>
          </div>
        </div>
        {imageError && (
          <p className="text-[11px] text-rose-500 font-medium mt-1 pl-1">{imageError}</p>
        )}
      </div>

      {/* Full Name Input */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          আপনার পুরো নাম <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="যেমন: আরিয়ান আহমেদ"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          ইমেইল এড্রেস <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Password Input with Live Validation Rules */}
      <div>
        <label htmlFor="password" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          পাসওয়ার্ড <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Lock className="w-4 h-4" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="পাসওয়ার্ড টাইপ করুন"
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Live Password Requirements UI */}
        <div className="mt-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 space-y-1.5">
          <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
            পাসওয়ার্ডের শর্তাবলী:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {passwordRules.map((rule) => (
              <div key={rule.id} className="flex items-center gap-1.5">
                {rule.valid ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[3]" />
                ) : (
                  <X className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0 stroke-[2]" />
                )}
                <span className={`text-[11px] transition-colors ${rule.valid ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>
                  {rule.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center gap-2 pt-1">
        <input
          id="agreeTerms"
          name="agreeTerms"
          type="checkbox"
          required
          className="w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary accent-brand-primary cursor-pointer"
        />
        <label htmlFor="agreeTerms" className="text-xs text-slate-600 dark:text-slate-400 select-none">
          আমি সাইটের <Link href="/terms" className="text-brand-primary font-medium hover:underline">শর্তাবলী</Link> ও <Link href="/privacy" className="text-brand-primary font-medium hover:underline">গোপনীয়তা নীতি</Link> মেনে নিচ্ছি।
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-linear-to-r from-brand-primary to-purple-600 hover:from-purple-600 hover:to-brand-primary text-white font-heading font-bold text-sm shadow-md shadow-brand-primary/20 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 group"
      >
        <span>{isLoading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "সাইন আপ করুন"}</span>
        {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>

      {/* Login Link */}
      <p className="text-center text-xs text-slate-600 dark:text-slate-400 pt-1">
        আগে থেকেই অ্যাকাউন্ট আছে?{' '}
        <Link href="/login" className="font-bold text-brand-primary hover:underline">
          লগইন করুন
        </Link>
      </p>

    </form>
  );
}