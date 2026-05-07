import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import {
  Scan, CreditCard, Mail, Monitor, QrCode, Users,
  BarChart3, Layers, Star, Check, ArrowRight, Zap,
  RefreshCw, Share2, MessageCircle, ShieldCheck, Globe,
} from "lucide-react"

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 text-white min-h-[92vh] flex items-center">
      {/* Dot + grid overlay */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Animated ambient orbs */}
      <div className="absolute top-[-10%] left-[-5%]  w-[600px] h-[600px] rounded-full bg-blue-400/20  blur-[100px] animate-float     pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-indigo-500/25 blur-[90px]  animate-float-alt pointer-events-none" />
      <div className="absolute top-[30%]  right-[25%] w-[280px] h-[280px] rounded-full bg-violet-400/15 blur-[60px]  animate-float     pointer-events-none" style={{ animationDelay: "-2.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Copy ── */}
          <div>
            {/* Badge */}
            <div className="animate-reveal" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/20 text-xs font-semibold mb-7 tracking-wide">
                <MessageCircle className="size-3.5 text-green-300" />
                From Business Cards to Winning Conversations — Try it now
              </span>
            </div>

            {/* Headline */}
            <div className="animate-reveal" style={{ animationDelay: "80ms" }}>
              <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
                Every digital business card you share creates new{" "}
                <span className="gradient-text-warm">opportunities</span>{" "}
                for success
              </h1>
            </div>

            {/* Sub */}
            <div className="animate-reveal" style={{ animationDelay: "160ms" }}>
              <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-lg font-light">
                Capture, store, and nurture leads instantly with smart digital
                business cards that ensure no opportunity slips through the cracks.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-reveal flex flex-wrap gap-3 mt-9" style={{ animationDelay: "240ms" }}>
              <Button asChild size="lg"
                className="h-12 px-8 bg-white text-primary hover:bg-blue-50 font-bold shadow-xl text-sm shimmer-btn"
              >
                <Link href="/sign-up">Create a FREE Card</Link>
              </Button>
              <Button asChild size="lg" variant="ghost"
                className="h-12 px-8 border border-white/30 text-white hover:bg-white/10 bg-white/5 font-semibold text-sm"
              >
                <Link href="#enterprise">For Teams <ArrowRight className="size-4 ml-1" /></Link>
              </Button>
            </div>

            {/* Trust strip */}
            <div className="animate-reveal flex items-center gap-5 mt-10 pt-8 border-t border-white/15" style={{ animationDelay: "320ms" }}>
              <div className="flex -space-x-2">
                {["AC","JD","MK","TS","LR"].map((init,i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ["#3B82F6","#6366F1","#8B5CF6","#EC4899","#10B981"][i] }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({length:5}).map((_,i)=>(
                    <Star key={i} className="size-3.5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-xs text-blue-200 mt-0.5 font-medium">Trusted by <span className="text-white font-bold">60M+</span> professionals worldwide</p>
              </div>
            </div>
          </div>

          {/* ── Illustration ── */}
          <div className="hidden lg:flex justify-center items-center relative h-[520px] animate-reveal-scale" style={{ animationDelay: "120ms" }}>

            {/* Floating card — top-left */}
            <div className="absolute top-8 left-0 w-56 z-10 animate-float glass rounded-2xl p-4 shadow-2xl" style={{ animationDelay: "0s" }}>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-gray-900 font-black text-sm shrink-0">JD</div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Jane Doe</p>
                  <p className="text-blue-200 text-xs mt-0.5">CEO · TechCorp</p>
                </div>
              </div>
              <div className="h-px bg-white/15 my-2" />
              <p className="text-blue-200 text-xs">jane@techcorp.com</p>
            </div>

            {/* Main phone */}
            <div className="relative w-[240px] h-[460px] rounded-[2.8rem] border-4 border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden z-20 bg-gray-950">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[2.4rem] ring-1 ring-white/10 pointer-events-none z-30" />
              <div className="bg-white/5 h-7 flex items-center justify-center shrink-0">
                <div className="w-14 h-1 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden h-full">
                {/* Card preview */}
                <div className="w-full h-32 rounded-2xl bg-linear-to-br from-primary via-blue-500 to-indigo-500 flex flex-col justify-between p-3 shadow-lg shrink-0">
                  <div className="flex justify-end">
                    <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                      <span className="text-white font-black text-[8px]">C</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-black text-base leading-tight">Alex Chen</p>
                    <p className="text-blue-100 text-xs">Head of Sales · TechCorp</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[["📧","alex@techcorp.com"],["📞","+1 (555) 234-5678"],["🔗","linkedin.com/in/alex"]].map(([icon,t])=>(
                    <div key={t} className="flex items-center gap-2 text-xs text-white/60">
                      <span>{icon}</span><span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pb-3 flex justify-center">
                  <div className="w-18 h-18 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg">
                    <QrCode className="size-14 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom-right */}
            <div className="absolute bottom-10 right-0 w-52 z-10 animate-float-alt glass rounded-2xl p-3.5 shadow-2xl" style={{ animationDelay: "-1.5s" }}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-full bg-green-300 flex items-center justify-center text-gray-900 font-black text-xs shrink-0">MK</div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Mark Kim</p>
                  <p className="text-blue-200 text-xs mt-0.5">UI Designer</p>
                </div>
              </div>
              <p className="text-blue-200 text-xs">mark@studio.io</p>
            </div>

            {/* Lead saved toast */}
            <div className="absolute top-[40%] right-[-20px] glass rounded-xl px-3.5 py-2.5 shadow-2xl flex items-center gap-2.5 z-30 animate-float" style={{ animationDelay: "-3s" }}>
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                <Check className="size-3.5 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none">New lead saved!</p>
                <p className="text-blue-200 text-[10px] mt-0.5">Sarah · Acme Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: "15 YEARS", desc: "Deeply engaged in the business field and business card recognition" },
    { value: "60M+",    desc: "Loved by users worldwide! Catering to individuals and businesses of all sizes" },
    { value: "4.9/5",   desc: "Based on 430,000+ reviews, the most popular apps on Google Play and the App Store" },
  ]
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden scroll-reveal-stagger">
          {stats.map(({ value, desc }) => (
            <div key={value} className="bg-white px-10 py-10 text-center hover:bg-blue-50/40 transition-colors duration-300">
              <p className="text-4xl xl:text-5xl font-extrabold gradient-text tracking-tight">{value}</p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AI Lead Section ───────────────────────────────────────────────────────────
function AiLeadSection() {
  const sources = [
    { icon: "📸", label: "QR Code Scan",   color: "bg-blue-50 border-blue-100" },
    { icon: "📄", label: "Paper Card OCR", color: "bg-indigo-50 border-indigo-100" },
    { icon: "✉️", label: "Email Signature",color: "bg-violet-50 border-violet-100" },
    { icon: "📱", label: "Contact Import", color: "bg-purple-50 border-purple-100" },
  ]
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal-left">
            <span className="inline-block text-xs font-bold text-primary bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1.5 mb-5 tracking-wide uppercase">
              AI-Powered Lead Capture
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Capture Leads from Every Source,{" "}
              <span className="gradient-text">Instantly</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed text-[15px]">
              Scan QR codes, paper business cards, email signatures, and import contacts with AI-powered recognition that supports 100+ languages.
            </p>
            <ul className="mt-7 space-y-3.5">
              {["Scan paper cards with your phone camera using AI OCR","Import leads from email signatures in one tap","Multilingual support — 100+ languages recognized","Auto-enriches contact details intelligently"].map(b=>(
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="size-3 text-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild size="lg" className="h-11 px-6 bg-primary hover:bg-primary/90 text-white font-semibold shimmer-btn">
                <Link href="/sign-up">Personal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="#enterprise">For Teams</Link>
              </Button>
            </div>
          </div>

          <div className="scroll-reveal-right">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] p-8 card-lift">
              <div className="text-center mb-7">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-indigo-500 items-center justify-center mb-4 shadow-lg">
                  <Zap className="size-8 text-white" />
                </div>
                <p className="font-bold text-gray-900 text-base">AI Lead Capture Engine</p>
                <p className="text-xs text-gray-400 mt-1">Powered by advanced OCR + Machine Learning</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {sources.map(({ icon, label, color }) => (
                  <div key={label} className={`flex flex-col items-center gap-2.5 p-5 rounded-xl border ${color} hover:scale-105 transition-transform duration-200 cursor-default`}>
                    <span className="text-3xl">{icon}</span>
                    <span className="text-xs text-gray-600 text-center font-semibold">{label}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Check className="size-4 text-white" />
                </div>
                <span className="text-xs text-green-800 font-semibold">Multilingual — supports 100+ languages globally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CRM Section ───────────────────────────────────────────────────────────────
function CrmSection() {
  const integrations = [
    { name: "Salesforce", color: "#00A1E0", abbr: "SF" },
    { name: "Google",     color: "#4285F4", abbr: "G"  },
    { name: "Outlook",    color: "#0078D4", abbr: "O"  },
    { name: "HubSpot",    color: "#FF7A59", abbr: "HS" },
    { name: "Pipedrive",  color: "#28B463", abbr: "PD" },
    { name: "Zoho CRM",   color: "#E42527", abbr: "ZH" },
  ]
  return (
    <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1 scroll-reveal-left">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-15px_rgba(59,130,246,0.12)] p-8 card-lift">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-extrabold text-gray-900">CRM Sync</p>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">Auto-syncing your leads in real-time</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <RefreshCw className="size-5 text-green-600 animate-spin [animation-duration:2.5s]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {integrations.map(({ name, color, abbr }) => (
                  <div key={name} className="flex flex-col items-center gap-2 p-3.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-default group">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}>
                      {abbr}
                    </div>
                    <span className="text-[10px] text-gray-500 text-center font-medium">{name}</span>
                  </div>
                ))}
              </div>
              {/* Live sync bar */}
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-3.5 flex items-center gap-3">
                <div className="flex gap-1">
                  {[0,1,2].map(i=>(
                    <div key={i} className="w-1.5 h-4 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: `${i*0.15}s`, animationDuration:"0.8s" }} />
                  ))}
                </div>
                <span className="text-xs text-blue-700 font-semibold">Syncing 248 leads to Salesforce…</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 scroll-reveal-right">
            <span className="inline-block text-xs font-bold text-primary bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1.5 mb-5 tracking-wide uppercase">
              CRM Synchronization
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Stop Losing Leads to{" "}
              <span className="gradient-text">Manual Data Entry</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed text-[15px]">
              Manual data entry causes a loss of up to <strong className="text-gray-700 font-bold">60%</strong> of valuable leads. CamCard syncs your contacts automatically with all major CRMs.
            </p>
            <ul className="mt-7 space-y-3.5">
              {["One-click sync with Salesforce, HubSpot & Pipedrive","Google Contacts & Outlook automatic sync","Mobile address book integration","Real-time lead updates across all platforms"].map(b=>(
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="size-3 text-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild size="lg" className="h-11 px-6 bg-primary hover:bg-primary/90 text-white font-semibold shimmer-btn">
                <Link href="/sign-up">Explore Integrations</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="#enterprise">For Enterprise</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Card Templates ─────────────────────────────────────────────────────────────
function CardTemplatesSection() {
  const templates = [
    { bg: "from-blue-600 via-blue-500 to-indigo-600",    name: "Professional" },
    { bg: "from-gray-800 via-gray-700 to-gray-900",      name: "Executive"    },
    { bg: "from-violet-600 via-purple-500 to-fuchsia-600",name: "Creative"    },
    { bg: "from-emerald-500 via-teal-500 to-cyan-500",   name: "Eco"         },
    { bg: "from-rose-500 via-pink-500 to-fuchsia-500",   name: "Bold"        },
    { bg: "from-amber-500 via-orange-500 to-red-500",    name: "Warm"        },
    { bg: "from-sky-400 via-cyan-400 to-teal-400",       name: "Fresh"       },
    { bg: "from-slate-600 via-slate-500 to-zinc-600",    name: "Minimal"     },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal-left">
            <span className="inline-block text-xs font-bold text-primary bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1.5 mb-5 tracking-wide uppercase">
              Digital Card Templates
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Update Your Info Instantly —{" "}
              <span className="gradient-text">No Reprinting Needed</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed text-[15px]">
              Choose from 8 professionally designed card templates. Update your contact information anytime — every card you've ever shared updates automatically.
            </p>
            <ul className="mt-7 space-y-3.5">
              {["8+ professionally designed templates","Custom colors, fonts, and branding","Logo and profile photo support","All previously shared cards update automatically"].map(b=>(
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="size-3 text-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-9 h-11 px-6 bg-primary hover:bg-primary/90 text-white font-semibold shimmer-btn">
              <Link href="/sign-up">Design Your Card <ArrowRight className="size-4 ml-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-3 scroll-reveal-right">
            {templates.map(({ bg, name }, i) => (
              <div key={name} className="group cursor-pointer" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className={`aspect-[1.7] rounded-2xl bg-linear-to-br ${bg} shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:-rotate-1 transition-all duration-300 ease-out p-2 flex flex-col justify-between overflow-hidden relative`}>
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex justify-end">
                    <div className="w-4 h-4 rounded-full bg-white/25" />
                  </div>
                  <div>
                    <div className="w-10 h-1.5 rounded bg-white/60 mb-1" />
                    <div className="w-14 h-1 rounded bg-white/35" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 text-center mt-1.5 font-semibold group-hover:text-primary transition-colors">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Sharing ────────────────────────────────────────────────────────────────────
function SharingSection() {
  const methods = [
    { icon: QrCode,        label: "QR Code",          desc: "Let anyone scan and save your card instantly" },
    { icon: Mail,          label: "Email Signatures",  desc: "Make every email a networking opportunity" },
    { icon: MessageCircle, label: "WhatsApp",          desc: "Send your card on any messaging app" },
    { icon: Monitor,       label: "Desktop Widget",    desc: "Always visible on your desktop screen" },
    { icon: Share2,        label: "Email or SMS",      desc: "Send directly to any contact worldwide" },
    { icon: Globe,         label: "Landing Page",      desc: "Your unique public card URL, always live" },
  ]
  return (
    <section className="py-24 bg-linear-to-br from-blue-50/60 to-indigo-50/40" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-bold text-primary bg-white border border-blue-200 rounded-full px-3.5 py-1.5 mb-4 tracking-wide uppercase">Sharing</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            6 Powerful Ways to{" "}
            <span className="gradient-text">Share Your Card</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-[15px]">
            Reach anyone, anywhere, at any time — six powerful sharing methods built for modern business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 scroll-reveal-stagger">
          {methods.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="group p-7 rounded-2xl border border-white bg-white hover:border-blue-200 hover:shadow-[0_16px_48px_-12px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default card-lift">
              <div className="w-13 h-13 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-indigo-500 transition-all duration-300">
                <Icon className="size-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Email Signature ────────────────────────────────────────────────────────────
function EmailSigSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal-left">
            <span className="inline-block text-xs font-bold text-primary bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1.5 mb-5 tracking-wide uppercase">Email Signatures</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Make Every Email a Chance to{" "}
              <span className="gradient-text">Capture Leads</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed text-[15px]">
              Generate interactive email signatures with embedded QR codes. Grow your contacts and speed up business growth with every email you send!
            </p>
            <ul className="mt-7 space-y-3.5">
              {["Auto-generated QR code embedded in your signature","Click-to-save contact from any email client","Automatically syncs when you update your card","Works with Gmail, Outlook & Apple Mail"].map(b=>(
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="size-3 text-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-9 h-11 px-6 bg-primary hover:bg-primary/90 text-white font-semibold shimmer-btn">
              <Link href="/sign-up">Try Email Signature <ArrowRight className="size-4 ml-1.5" /></Link>
            </Button>
          </div>

          {/* Email mockup */}
          <div className="scroll-reveal-right">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden card-lift">
              <div className="bg-gray-50/80 border-b border-gray-100 px-5 py-3.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-400 ml-2 font-semibold tracking-wide">New Message — Gmail</span>
              </div>
              <div className="p-6">
                <div className="space-y-1.5 mb-5 pb-4 border-b border-gray-100">
                  {[["From","alex@techcorp.com"],["To","sarah@partner.com"],["Re","Following up on our meeting"]].map(([k,v])=>(
                    <p key={k} className="text-xs text-gray-400">
                      <span className="text-gray-600 font-semibold w-10 inline-block">{k}:</span> {v}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                  Hi Sarah, great meeting you at the conference last week. Looking forward to exploring how we can work together on the upcoming project…
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-5">
                  <div className="flex-1 min-w-0">
                    <p className="font-extrabold text-gray-900 text-sm">Alex Chen</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Head of Sales · TechCorp Inc.</p>
                    <p className="text-xs text-primary mt-1">alex@techcorp.com · +1 (555) 234-5678</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <QrCode className="size-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Enterprise ─────────────────────────────────────────────────────────────────
function EnterpriseSection() {
  const perks = ["Branded digital cards for your entire team","Centralized admin dashboard","Advanced analytics & reporting","Seamless CRM & SSO integration"]
  return (
    <section className="py-24 bg-gray-50" id="enterprise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden scroll-reveal">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-500 to-indigo-700 animate-gradient-x" />
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute inset-0 grid-pattern" />
          {/* Orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-float pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-indigo-300/20 blur-2xl animate-float-alt pointer-events-none" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass border-white/20 text-xs text-white font-bold mb-6 tracking-widest uppercase">
              <Users className="size-3" /> Enterprise
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
              Digital Business Cards for Teams of All Sizes
            </h2>
            <p className="mt-5 text-blue-100 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Empower your entire organization with branded digital cards, centralized management, advanced analytics, and seamless CRM integration.
            </p>

            {/* Perks */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {perks.map(p=>(
                <span key={p} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-white font-medium">
                  <Check className="size-3 text-green-300" /> {p}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="ghost"
                className="h-12 px-8 border border-white/30 text-white hover:bg-white/10 bg-white/5 font-bold">
                <Link href="/sign-up">Book a Demo</Link>
              </Button>
              <Button asChild size="lg"
                className="h-12 px-8 bg-white text-primary hover:bg-blue-50 font-extrabold shadow-2xl shimmer-btn">
                <Link href="/sign-up">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Security ───────────────────────────────────────────────────────────────────
function SecuritySection() {
  const certs = [
    { name: "ISO/IEC 27001", sub: "Information Security" },
    { name: "ISO/IEC 27701", sub: "Privacy Management"  },
    { name: "ISO/IEC 20000", sub: "IT Service Mgmt"     },
    { name: "ISO/IEC 9001",  sub: "Quality Management"  },
    { name: "CMMI V3.0 L5",  sub: "Capability Maturity" },
    { name: "DJCP",          sub: "Data Protection"     },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-reveal">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-linear-to-br from-primary/10 to-indigo-100 items-center justify-center mx-auto mb-5">
            <ShieldCheck className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Guarding Your Data:{" "}
            <span className="gradient-text">Unmatched Security</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-[15px]">
            Your privacy and security are our top priority. CamCard meets the world's most rigorous compliance standards.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 scroll-reveal-stagger">
          {certs.map(({ name, sub }) => (
            <div key={name} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-blue-50/40 hover:shadow-lg transition-all duration-300 cursor-default card-lift">
              <div className="w-13 h-13 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <p className="font-extrabold text-gray-900 text-xs text-center leading-tight">{name}</p>
              <p className="text-[10px] text-gray-400 text-center font-medium">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Feature Grid ───────────────────────────────────────────────────────────────
function FeatureGridSection() {
  const features = [
    { icon: Scan,      label: "Business Card Scanner", desc: "Scan any paper card instantly with AI OCR" },
    { icon: CreditCard,label: "Digital Business Card", desc: "Create a stunning card that lives online" },
    { icon: Mail,      label: "Email Signature",       desc: "QR-embedded signatures for every email"   },
    { icon: Monitor,   label: "Virtual Background",    desc: "Brand your video calls with your card"    },
    { icon: RefreshCw, label: "Sync Leads to CRM",     desc: "Seamless integration with top CRMs"       },
    { icon: Layers,    label: "Manage Business Cards", desc: "Organize all your contacts in one place"  },
    { icon: QrCode,    label: "Free QR Generator",     desc: "Generate branded QR codes for free"       },
    { icon: BarChart3, label: "Leads Capture",         desc: "Track and nurture every lead automatically"},
  ]
  return (
    <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Features,{" "}
            <span className="gradient-text">Your Choice</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-[15px]">
            Everything you need to digitize, share, and grow your professional network.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 scroll-reveal-stagger">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="group p-6 rounded-2xl border border-white bg-white hover:border-blue-200 hover:shadow-[0_16px_48px_-12px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default card-lift">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-indigo-500 transition-all duration-300">
                <Icon className="size-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm mb-1.5">{label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Reviews — infinite marquee ─────────────────────────────────────────────────
function ReviewsSection() {
  const reviews = [
    { text: "I've used this app for years, and it's the best tool for digitizing and organizing business cards.", author: "Sarah M.", role: "Marketing Director", source: "App Store", rating: 5 },
    { text: "This app has been a game-changer for organizing my contacts effortlessly and keeping everything synced.", author: "David L.", role: "Sales Executive", source: "App Store", rating: 5 },
    { text: "I love how quick it is to scan, save, and share contacts without any hassle. Highly recommend!", author: "Emma R.", role: "Entrepreneur", source: "App Store", rating: 5 },
    { text: "Scanning business cards has never been easier. I love the seamless email integration.", author: "James T.", role: "Business Owner", source: "Google Play", rating: 5 },
    { text: "Update my contact info instantly without reprinting cards — so convenient and eco-friendly!", author: "Lisa K.", role: "Consultant", source: "Google Play", rating: 5 },
    { text: "CamCard digital business card is professional and so easy to share with just a QR code.", author: "Michael P.", role: "Account Manager", source: "Google Play", rating: 5 },
    { text: "Unlike paper cards, CamCard is always with me and never gets lost. Best professional tool!", author: "Rachel W.", role: "VP of Sales", source: "Google Play", rating: 5 },
    { text: "Adding my card to my email signature has brought in more leads than I expected — amazing!", author: "Tom B.", role: "Founder", source: "App Store", rating: 5 },
  ]
  const allReviews = [...reviews, ...reviews]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({length:5}).map((_,i)=>(
              <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Customer Reviews</h2>
          <p className="mt-2 text-gray-500 font-medium">15,000+ Ratings · <span className="text-primary font-bold">4.9/5</span> average score</p>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-5 animate-marquee w-max">
          {allReviews.map(({ text, author, role, source, rating }, i) => (
            <div key={i} className="w-72 shrink-0 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex gap-0.5 mb-3">
                {Array.from({length: rating}).map((_,j)=>(
                  <Star key={j} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-5 line-clamp-3">"{text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-gray-900 text-sm">{author}</p>
                  <p className="text-xs text-gray-400 font-medium">{role}</p>
                </div>
                <span className="text-[10px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 font-semibold">{source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row — reversed */}
      <div className="marquee-mask overflow-hidden mt-4">
        <div className="flex gap-5 animate-marquee-fast w-max" style={{ animationDirection: "reverse" }}>
          {[...allReviews].reverse().map(({ text, author, role, source, rating }, i) => (
            <div key={i} className="w-72 shrink-0 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex gap-0.5 mb-3">
                {Array.from({length: rating}).map((_,j)=>(
                  <Star key={j} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-5 line-clamp-3">"{text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-gray-900 text-sm">{author}</p>
                  <p className="text-xs text-gray-400 font-medium">{role}</p>
                </div>
                <span className="text-[10px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 font-semibold">{source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AiLeadSection />
        <CrmSection />
        <CardTemplatesSection />
        <SharingSection />
        <EmailSigSection />
        <EnterpriseSection />
        <SecuritySection />
        <FeatureGridSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  )
}
