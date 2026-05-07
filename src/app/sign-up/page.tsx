"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { Check, Eye, EyeOff, Plus, QrCode, X, ArrowRight, Shield, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Field catalog ────────────────────────────────────────────────────────────
const FIELD_CATEGORIES: Record<string, { id: string; label: string; color: string; abbr: string }[]> = {
  "Social Media": [
    { id: "linkedin",  label: "LinkedIn",         color: "#0A66C2", abbr: "in" },
    { id: "twitter",   label: "Twitter / X",       color: "#111827", abbr: "𝕏"  },
    { id: "facebook",  label: "Facebook",          color: "#1877F2", abbr: "f"  },
    { id: "instagram", label: "Instagram",         color: "#E1306C", abbr: "IG" },
    { id: "youtube",   label: "YouTube",           color: "#FF0000", abbr: "▶"  },
    { id: "tiktok",    label: "TikTok",            color: "#111827", abbr: "TT" },
    { id: "pinterest", label: "Pinterest",         color: "#BD081C", abbr: "P"  },
    { id: "snapchat",  label: "Snapchat",          color: "#FFCD00", abbr: "👻" },
    { id: "wechat",    label: "WeChat",            color: "#07C160", abbr: "微" },
  ],
  "Video Conferencing": [
    { id: "zoom",      label: "Zoom",              color: "#2D8CFF", abbr: "Z"  },
    { id: "gmeet",     label: "Google Meet",       color: "#00897B", abbr: "M"  },
    { id: "teams",     label: "Microsoft Teams",   color: "#6264A7", abbr: "T"  },
    { id: "webex",     label: "Webex",             color: "#00BCEB", abbr: "W"  },
    { id: "skype",     label: "Skype",             color: "#00AFF0", abbr: "S"  },
    { id: "lark",      label: "Lark",              color: "#1664FF", abbr: "L"  },
  ],
  "Messaging": [
    { id: "whatsapp",  label: "WhatsApp",          color: "#25D366", abbr: "WA" },
    { id: "telegram",  label: "Telegram",          color: "#2CA5E0", abbr: "TG" },
    { id: "line",      label: "Line",              color: "#00C300", abbr: "Li" },
    { id: "discord",   label: "Discord",           color: "#5865F2", abbr: "Di" },
  ],
  "Professional": [
    { id: "github",    label: "GitHub",            color: "#24292F", abbr: "GH" },
    { id: "behance",   label: "Behance",           color: "#053EFF", abbr: "Be" },
    { id: "dribbble",  label: "Dribbble",          color: "#EA4C89", abbr: "Db" },
    { id: "medium",    label: "Medium",            color: "#111827", abbr: "M"  },
    { id: "clubhouse", label: "Clubhouse",         color: "#F3D060", abbr: "CH" },
  ],
  "Website": [
    { id: "website",   label: "Website",           color: "#4F46E5", abbr: "🌐" },
    { id: "blog",      label: "Blog",              color: "#F59E0B", abbr: "B"  },
    { id: "portfolio", label: "Portfolio",         color: "#10B981", abbr: "Po" },
  ],
}

// ─── Social icons ─────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
      <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
      <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
      <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
    </svg>
  )
}

// ─── Live card preview ─────────────────────────────────────────────────────────
function CardPreview({
  name, title, company, department, headline, selectedFields,
}: {
  name: string; title: string; company: string; department: string; headline: string; selectedFields: string[]
}) {
  const initials = name.trim()
    ? name.trim().split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2)
    : "YN"

  const allFields = Object.values(FIELD_CATEGORIES).flat()
  const activeSocial = allFields.filter(f => selectedFields.includes(f.id)).slice(0, 5)

  return (
    <div className="w-full max-w-85 mx-auto space-y-4">
      <p className="text-[10px] font-bold text-gray-400/80 uppercase tracking-[0.15em] text-center">
        ✦ Live Card Preview ✦
      </p>

      {/* ── Card face ── */}
      <div className="relative" style={{ aspectRatio: "1.75" }}>
        {/* Card glow */}
        <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-blue-400/30 to-indigo-500/30 blur-xl animate-float pointer-events-none" />

        {/* Card body */}
        <div className="relative h-full rounded-2xl overflow-hidden shadow-[0_24px_64px_-12px_rgba(59,130,246,0.35)]">
          {/* Gradient bg */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-500 to-indigo-600 animate-gradient-x" />
          {/* Overlay patterns */}
          <div className="absolute inset-0 dot-pattern opacity-30" />
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />
          <div className="absolute top-8 right-28 w-16 h-16 rounded-full bg-white/5" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-5">
            {/* Top row */}
            <div className="flex items-start justify-between">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm shadow-inner shrink-0 transition-all duration-500">
                <span className="text-white font-black text-xl leading-none transition-all duration-300">{initials}</span>
              </div>
              {/* Watermark */}
              <div className="flex items-center gap-1 opacity-70">
                <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                  <span className="text-white font-black leading-none" style={{ fontSize: 9 }}>C</span>
                </div>
                <span className="text-white/80 text-[10px] font-bold tracking-wide">CamCard</span>
              </div>
            </div>

            {/* Bottom info */}
            <div className="transition-all duration-300">
              <h3 className="text-white font-black text-xl leading-tight truncate transition-all duration-300">
                {name || "Your Name"}
              </h3>
              {(title || department) && (
                <p className="text-white/80 text-sm font-semibold mt-0.5 truncate transition-all duration-300">
                  {[title, department].filter(Boolean).join(" · ")}
                </p>
              )}
              {company && (
                <p className="text-white/60 text-xs mt-0.5 truncate font-medium transition-all duration-300">{company}</p>
              )}
              {headline && (
                <p className="text-white/40 text-[11px] mt-1 italic truncate transition-all duration-300">{headline}</p>
              )}
              {/* Social pills */}
              {activeSocial.length > 0 && (
                <div className="flex items-center gap-1.5 mt-2.5">
                  {activeSocial.map(f => (
                    <div key={f.id}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white font-black shadow-sm transition-all duration-300"
                      style={{ backgroundColor: f.color, fontSize: 7 }}
                      title={f.label}>
                      {f.abbr.length > 2 ? f.abbr.slice(0,1) : f.abbr.slice(0,2)}
                    </div>
                  ))}
                  {selectedFields.length > 5 && (
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white font-bold" style={{ fontSize: 7 }}>
                      +{selectedFields.length - 5}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* QR share bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <p className="text-xs font-bold text-gray-700">Scan to connect</p>
          <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Powered by CamCard</p>
        </div>
        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-md">
          <QrCode className="size-8 text-white" />
        </div>
      </div>
    </div>
  )
}

// ─── Add More Fields Dialog ────────────────────────────────────────────────────
function AddFieldsDialog({
  open, onClose, selected, onToggle,
}: {
  open: boolean; onClose: () => void; selected: string[]; onToggle: (id: string) => void
}) {
  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent showCloseButton={false} className="sm:max-w-lg max-h-[88vh] flex flex-col p-0 gap-0 rounded-2xl overflow-hidden">

        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100 shrink-0 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-lg font-extrabold text-gray-900 tracking-tight">Add More Fields</DialogTitle>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">
                {selected.length > 0
                  ? `${selected.length} field${selected.length > 1 ? "s" : ""} selected — shown on your card`
                  : "Select fields to add to your digital card"}
              </p>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200">
              <X className="size-4" />
            </button>
          </div>

          {/* Selected pill row */}
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {Object.values(FIELD_CATEGORIES).flat()
                .filter(f => selected.includes(f.id))
                .map(f => (
                  <button key={f.id} onClick={() => onToggle(f.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[10px] font-bold shadow-sm hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: f.color }}>
                    {f.label}
                    <X className="size-2.5" />
                  </button>
                ))}
            </div>
          )}
        </DialogHeader>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-7 bg-gray-50/40">
          {Object.entries(FIELD_CATEGORIES).map(([category, fields]) => (
            <div key={category}>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.15em] mb-3">{category}</p>
              <div className="grid grid-cols-3 gap-2">
                {fields.map(({ id, label, color, abbr }) => {
                  const isSelected = selected.includes(id)
                  return (
                    <button key={id} type="button" onClick={() => onToggle(id)}
                      className={cn(
                        "relative flex flex-col items-center gap-2.5 p-3.5 rounded-2xl border text-center transition-all duration-200",
                        isSelected
                          ? "border-primary/40 bg-blue-50/80 shadow-sm shadow-primary/10"
                          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm hover:scale-105"
                      )}>
                      {/* Check badge */}
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-sm">
                          <Check className="size-2.5 text-white" />
                        </div>
                      )}
                      {/* Brand icon */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0 shadow-sm transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: color }}>
                        {abbr.length <= 2 ? abbr : abbr.slice(0, 2)}
                      </div>
                      <span className={cn("text-[11px] font-bold leading-tight", isSelected ? "text-primary" : "text-gray-600")}>
                        {label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 shrink-0 bg-white flex items-center justify-between gap-3">
          <p className="text-xs text-gray-400 font-semibold">
            {selected.length} / {Object.values(FIELD_CATEGORIES).flat().length} fields selected
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose} className="h-9 px-4 font-semibold">Cancel</Button>
            <Button size="sm" onClick={onClose} className="h-9 px-6 bg-primary hover:bg-primary/90 text-white font-bold shimmer-btn">
              Confirm <Check className="size-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ─── Step indicator ────────────────────────────────────────────────────────────
function Stepper({ current }: { current: number }) {
  const steps = [
    { label: "Get started",           short: "1" },
    { label: "Card details",          short: "2" },
    { label: "Get your digital card", short: "3" },
  ]
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map(({ label }, i) => {
        const idx = i + 1
        const done   = idx < current
        const active = idx === current
        return (
          <div key={label} className="flex items-center gap-0">
            <div className="flex items-center gap-2 shrink-0">
              {/* Circle */}
              <div className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold transition-all duration-500",
                done   ? "bg-primary text-white shadow-sm shadow-primary/40"
                       : active ? "bg-primary text-white ring-4 ring-primary/20 shadow-lg shadow-primary/30"
                       : "bg-gray-100 text-gray-400"
              )}>
                {done ? <Check className="size-3.5" /> : idx}
              </div>
              {/* Label */}
              <span className={cn(
                "text-xs font-bold whitespace-nowrap hidden sm:block transition-colors duration-300",
                active ? "text-gray-900" : done ? "text-primary" : "text-gray-400"
              )}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 relative">
                <div className="h-px w-7 sm:w-10 bg-gray-200 rounded-full overflow-hidden">
                  <div className={cn(
                    "h-full bg-primary rounded-full transition-all duration-700",
                    done ? "w-full" : "w-0"
                  )} />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SignUpPage() {
  const [step,           setStep]           = useState(1)
  const [name,           setName]           = useState("")
  const [title,          setTitle]          = useState("")
  const [department,     setDepartment]     = useState("")
  const [company,        setCompany]        = useState("")
  const [headline,       setHeadline]       = useState("")
  const [email,          setEmail]          = useState("")
  const [password,       setPassword]       = useState("")
  const [showPassword,   setShowPassword]   = useState(false)
  const [dialogOpen,     setDialogOpen]     = useState(false)
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  function toggleField(id: string) {
    setSelectedFields(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  const allFields     = Object.values(FIELD_CATEGORIES).flat()
  const activeFields  = allFields.filter(f => selectedFields.includes(f.id))

  return (
    <div className="min-h-screen flex bg-white">

      {/* ── Left: wizard ── */}
      <div className="flex-1 flex flex-col px-6 sm:px-10 lg:px-14 xl:px-20 py-10 overflow-y-auto relative">
        {/* Subtle background */}
        <div className="absolute inset-0 dot-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-50/70 blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8 w-fit">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-base leading-none">C</span>
            </div>
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">CamCard</span>
          </Link>

          <div className="max-w-md">
            <Stepper current={step} />

            {/* ─ Step 1: Get Started ─ */}
            {step === 1 && (
              <div className="animate-reveal space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Step 1 of 3</span>
                  </div>
                  <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Let&apos;s get started!</h1>
                  <p className="text-sm text-gray-500 mt-1.5 font-medium leading-relaxed">
                    Create your digital business card in 3 easy steps. First — what&apos;s your name?
                  </p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                  <Input id="name" type="text" placeholder="e.g. Alex Chen"
                    value={name} onChange={e => setName(e.target.value)}
                    className="h-11 border-gray-200 focus:border-primary font-medium"
                    autoFocus />
                </div>

                <Button onClick={() => setStep(2)} disabled={!name.trim()}
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 shimmer-btn">
                  Continue <ArrowRight className="size-4 ml-1.5" />
                </Button>

                <p className="text-sm text-center text-gray-500 font-medium">
                  Already used CamCard?{" "}
                  <Link href="/sign-in" className="text-primary hover:underline font-bold">Log in</Link>
                </p>
              </div>
            )}

            {/* ─ Step 2: Card Details ─ */}
            {step === 2 && (
              <div className="animate-reveal space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Step 2 of 3</span>
                  </div>
                  <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Card details</h1>
                  <p className="text-sm text-gray-500 mt-1.5 font-medium">
                    What professional info would you like displayed on your card?
                  </p>
                </div>

                {/* Core fields */}
                {[
                  { id: "jobtitle",  label: "Job title",  value: title,      setter: setTitle,      ph: "e.g. Software Engineer" },
                  { id: "dept",      label: "Department", value: department,  setter: setDepartment,  ph: "e.g. Engineering"       },
                  { id: "company",   label: "Company",    value: company,     setter: setCompany,     ph: "e.g. TechCorp Inc."     },
                  { id: "headline",  label: "Headline",   value: headline,    setter: setHeadline,    ph: "e.g. Building the future" },
                ].map(({ id, label, value, setter, ph }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-1.5">{label}</label>
                    <Input id={id} type="text" placeholder={ph} value={value}
                      onChange={e => setter(e.target.value)}
                      className="h-11 border-gray-200 focus:border-primary font-medium" />
                  </div>
                ))}

                {/* Extra selected fields */}
                {activeFields.map(field => (
                  <div key={field.id}>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1.5">
                      <span className="w-5 h-5 rounded flex items-center justify-center text-white font-black shadow-sm"
                        style={{ backgroundColor: field.color, fontSize: 8 }}>
                        {field.abbr.slice(0,2)}
                      </span>
                      {field.label}
                    </label>
                    <Input type="text" placeholder={`Enter your ${field.label} URL or handle`}
                      className="h-11 border-gray-200 focus:border-primary font-medium" />
                  </div>
                ))}

                {/* Add More Fields */}
                <button type="button" onClick={() => setDialogOpen(true)}
                  className="group flex items-center gap-2.5 self-start text-sm font-bold text-primary hover:text-primary/80 transition-colors py-1">
                  <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                    <Plus className="size-4 group-hover:text-white transition-colors duration-200" />
                  </div>
                  Add More Fields
                  {selectedFields.length > 0 && (
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-extrabold">
                      {selectedFields.length}
                    </span>
                  )}
                </button>

                <div className="flex gap-3 pt-1">
                  <Button variant="outline" onClick={() => setStep(1)} className="h-11 flex-1 font-bold">Back</Button>
                  <Button onClick={() => setStep(3)} className="h-11 flex-2 bg-primary hover:bg-primary/90 text-white font-bold shimmer-btn">
                    Continue <ArrowRight className="size-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            )}

            {/* ─ Step 3: Get Your Digital Card ─ */}
            {step === 3 && (
              <div className="animate-reveal space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Final Step</span>
                  </div>
                  <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">You&apos;re almost there!</h1>
                  <p className="text-sm text-gray-500 mt-1.5 font-medium">
                    Create your account to save and share your digital card instantly.
                  </p>
                </div>

                {/* OAuth */}
                <div className="space-y-2.5">
                  {[
                    { icon: <GoogleIcon />,    label: "Continue with Google"    },
                    { icon: <MicrosoftIcon />, label: "Continue with Microsoft" },
                  ].map(({ icon, label }) => (
                    <Button key={label} type="button" variant="outline"
                      className="w-full h-11 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700 font-bold gap-3 justify-start px-4 transition-all duration-200 group">
                      {icon}
                      <span className="flex-1 text-center text-sm">{label}</span>
                      <ArrowRight className="size-3.5 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                    </Button>
                  ))}
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-bold px-1 bg-white">or sign up with email</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Email + password */}
                <div>
                  <label htmlFor="s-email" className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                  <Input id="s-email" type="email" placeholder="you@example.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    className="h-11 border-gray-200 focus:border-primary font-medium" />
                </div>
                <div>
                  <label htmlFor="s-pwd" className="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
                  <div className="relative">
                    <Input id="s-pwd" type={showPassword ? "text" : "password"} placeholder="6–18 characters"
                      value={password} onChange={e => setPassword(e.target.value)}
                      className="h-11 pr-10 border-gray-200 focus:border-primary font-medium" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                  {/* Password strength bar */}
                  {password.length > 0 && (
                    <div className="mt-2 flex gap-1">
                      {[0,1,2,3].map(i => (
                        <div key={i} className={cn("h-1 flex-1 rounded-full transition-all duration-300",
                          password.length > i * 4 ? (password.length < 8 ? "bg-red-400" : password.length < 14 ? "bg-yellow-400" : "bg-green-400") : "bg-gray-100"
                        )} />
                      ))}
                    </div>
                  )}
                  <p className="text-[11px] text-gray-400 mt-1.5 font-medium">6–18 characters and cannot be just numbers</p>
                </div>

                <div className="flex gap-3 pt-1">
                  <Button variant="outline" onClick={() => setStep(2)} className="h-11 flex-1 font-bold">Back</Button>
                  <Button className="h-11 flex-2 bg-primary hover:bg-primary/90 text-white font-extrabold shadow-lg hover:shadow-primary/30 transition-all duration-300 shimmer-btn">
                    Create Account <Check className="size-4 ml-1.5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
                  <Shield className="size-3.5 text-gray-300" />
                  <span>
                    By signing up you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-gray-600">Terms</Link>
                    {" & "}
                    <Link href="#" className="underline underline-offset-2 hover:text-gray-600">Privacy Policy</Link>
                  </span>
                </div>
              </div>
            )}

            <p className="mt-10 text-sm text-center text-gray-500 font-medium">
              Already used CamCard?{" "}
              <Link href="/sign-in" className="text-primary hover:underline font-extrabold">Login</Link>
            </p>
          </div>
        </div>
      </div>

      {/* ── Right: Live card preview ── */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        {/* Animated gradient bg */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50/50 to-indigo-50/40 animate-gradient-x" />
        <div className="absolute inset-0 dot-pattern-dark opacity-60" />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full bg-indigo-200/20 blur-2xl animate-float-alt pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center w-full px-12 xl:px-16 py-10 gap-8">
          <CardPreview
            name={name} title={title} company={company}
            department={department} headline={headline} selectedFields={selectedFields}
          />

          {/* Step hint */}
          <div className="max-w-xs text-center animate-reveal-scale">
            <p className="text-sm font-extrabold text-gray-700">
              {step === 1 && "Start typing your name to see your card come alive!"}
              {step === 2 && "Fill in your details to personalize your card."}
              {step === 3 && "Almost done! Your card is ready to share."}
            </p>
            <p className="text-xs text-gray-400 mt-1.5 font-medium leading-relaxed">
              Your card updates in real-time as you fill in the form.
            </p>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {[1,2,3].map(s => (
                <div key={s} className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  s === step ? "w-8 bg-primary" : s < step ? "w-1.5 bg-primary/50" : "w-1.5 bg-gray-200"
                )} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Dialog ── */}
      <AddFieldsDialog open={dialogOpen} onClose={() => setDialogOpen(false)}
        selected={selectedFields} onToggle={toggleField} />
    </div>
  )
}
