"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, QrCode, Star, Check, ArrowRight, Shield } from "lucide-react"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
      <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
      <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
      <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
      <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
    </svg>
  )
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  return (
    <div className="min-h-screen flex bg-white">

      {/* ── Left: Form panel ── */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-12 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 dot-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-50/50 blur-2xl pointer-events-none" />

        <div className="relative w-full max-w-sm mx-auto">
          {/* Logo */}
          <div className="animate-reveal mb-10" style={{ animationDelay: "0ms" }}>
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-base leading-none">C</span>
              </div>
              <span className="font-extrabold text-lg text-gray-900 tracking-tight">CamCard</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="animate-reveal mb-8" style={{ animationDelay: "60ms" }}>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Sign in to CamCard</h1>
            <p className="text-sm text-gray-500 mt-1.5 font-medium">Welcome back! Please enter your details.</p>
          </div>

          {/* Social auth */}
          <div className="space-y-2.5 mb-6 animate-reveal" style={{ animationDelay: "120ms" }}>
            {[
              { icon: <GoogleIcon />,     label: "Continue with Google"    },
              { icon: <MicrosoftIcon />,  label: "Continue with Microsoft" },
              {
                icon: (
                  <div className="w-4 h-4 rounded bg-[#0078D4] flex items-center justify-center shrink-0">
                    <span className="text-white font-black leading-none" style={{ fontSize: 7 }}>SSO</span>
                  </div>
                ),
                label: "Continue with SSO",
              },
            ].map(({ icon, label }) => (
              <Button key={label} type="button" variant="outline"
                className="w-full h-11 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700 font-semibold gap-3 justify-start px-4 transition-all duration-200 group">
                {icon}
                <span className="flex-1 text-center text-sm">{label}</span>
                <ArrowRight className="size-3.5 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="animate-reveal relative flex items-center gap-3 mb-6" style={{ animationDelay: "180ms" }}>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-semibold px-1 bg-white">or sign in with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Credentials form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="animate-reveal" style={{ animationDelay: "220ms" }}>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                Email / Phone Number
              </label>
              <Input id="email" type="text" placeholder="Enter your email or phone"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="h-11 border-gray-200 focus:border-primary transition-colors duration-200 font-medium"
              />
            </div>

            <div className="animate-reveal" style={{ animationDelay: "280ms" }}>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pr-10 border-gray-200 focus:border-primary transition-colors duration-200 font-medium"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="animate-reveal flex items-center justify-between pt-0.5" style={{ animationDelay: "320ms" }}>
              <label className="flex items-center gap-2 cursor-pointer select-none group">
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer
                  ${remember ? "border-primary bg-primary" : "border-gray-300 group-hover:border-primary/60"}`}
                  onClick={() => setRemember(!remember)}>
                  {remember && <Check className="size-2.5 text-white" />}
                </div>
                <span className="text-sm text-gray-600 font-medium">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:underline font-bold">
                Forgot password?
              </Link>
            </div>

            <div className="animate-reveal pt-1" style={{ animationDelay: "360ms" }}>
              <Button type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 shimmer-btn">
                Continue
              </Button>
            </div>
          </form>

          <div className="animate-reveal mt-6 text-center" style={{ animationDelay: "400ms" }}>
            <p className="text-sm text-gray-500 font-medium">
              New to CamCard?{" "}
              <Link href="/sign-up" className="text-primary hover:underline font-extrabold">
                Create account
              </Link>
            </p>
          </div>

          <div className="animate-reveal mt-5 flex items-center justify-center gap-2 text-xs text-gray-400" style={{ animationDelay: "440ms" }}>
            <Shield className="size-3.5 text-gray-300" />
            <span>
              By signing in you agree to our{" "}
              <Link href="#" className="underline underline-offset-2 hover:text-gray-600">Terms</Link>
              {" & "}
              <Link href="#" className="underline underline-offset-2 hover:text-gray-600">Privacy Policy</Link>
            </span>
          </div>
        </div>
      </div>

      {/* ── Right: Decorative panel ── */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        {/* Layered gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700" />
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Animated orbs */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] animate-float pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-500/25 blur-[80px] animate-float-alt pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center w-full px-14 xl:px-20 text-center gap-10">

          {/* Main card mockup */}
          <div className="relative w-80 animate-reveal-scale" style={{ animationDelay: "200ms" }}>

            {/* Floating mini card — top-left */}
            <div className="absolute -top-8 -left-10 w-48 -rotate-6 animate-float" style={{ animationDelay: "0s" }}>
              <div className="glass rounded-2xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center text-gray-900 font-black text-[10px] shrink-0">JD</div>
                  <div>
                    <p className="text-white font-bold text-xs leading-none">Jane Doe</p>
                    <p className="text-blue-200 text-[10px] mt-0.5 font-medium">CEO · TechCorp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main digital card */}
            <div className="glass rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="h-1.5 bg-linear-to-r from-blue-300 via-indigo-300 to-purple-300 w-full" />
              <div className="p-7">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-white/30 to-white/10 border-2 border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-white font-black text-xl">AC</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-extrabold text-xl leading-tight">Alex Chen</p>
                    <p className="text-blue-200 text-sm mt-0.5 font-semibold">Head of Sales</p>
                    <p className="text-blue-300 text-xs mt-0.5">TechCorp Inc.</p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-6 text-left">
                  {[["📧","alex@techcorp.com"],["📞","+1 (555) 234-5678"],["🔗","linkedin.com/in/alexchen"]].map(([icon,val])=>(
                    <p key={val} className="text-xs text-blue-200 flex items-center gap-2.5 font-medium">
                      <span className="text-sm">{icon}</span><span>{val}</span>
                    </p>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-blue-300/80 font-bold tracking-wide uppercase">Scan to connect</span>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <QrCode className="size-9 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification — bottom-right */}
            <div className="absolute -bottom-6 -right-8 animate-float-alt" style={{ animationDelay: "-1.5s" }}>
              <div className="glass rounded-xl px-3.5 py-2.5 shadow-2xl flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                  <Check className="size-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">New lead saved!</p>
                  <p className="text-blue-200 text-[10px] mt-0.5 font-medium">Sarah · Acme Corp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="animate-reveal" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-extrabold text-white leading-snug tracking-tight">
              Every Connection is an{" "}
              <span className="gradient-text-warm">Opportunity</span>
            </h2>
            <p className="mt-3 text-blue-100 text-sm max-w-xs mx-auto leading-relaxed font-medium">
              Join 60M+ professionals who use CamCard to grow their network and capture every lead.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {Array.from({length: 5}).map((_,i)=>(
                <Star key={i} className="size-4 fill-yellow-300 text-yellow-300" />
              ))}
              <span className="text-white font-extrabold text-sm ml-1.5">4.9/5</span>
              <span className="text-blue-200 text-xs ml-1 font-medium">· 430K+ reviews</span>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-3 mt-5">
              {["SOC 2","GDPR","ISO 27001"].map(b=>(
                <span key={b} className="glass rounded-full px-3 py-1 text-[10px] text-white/80 font-bold border-white/20 tracking-wide">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
