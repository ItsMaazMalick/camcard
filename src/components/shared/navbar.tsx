"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-base tracking-tight">C</span>
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">CamCard</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[["Features", "#features"], ["Solutions", "#solutions"], ["Pricing", "#pricing"]].map(
              ([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-md hover:bg-blue-50 transition-colors"
                >
                  {label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-green-600 rounded-md hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="size-4 text-green-500" />
              WhatsApp
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-sm"
            >
              <Link href="/sign-up">Create a FREE Card</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 space-y-1">
            {[["Features", "#features"], ["Solutions", "#solutions"], ["Pricing", "#pricing"]].map(
              ([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-md hover:bg-blue-50 transition-colors"
                >
                  {label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/sign-up">Create a FREE Card</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
