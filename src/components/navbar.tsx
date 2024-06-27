import * as React from "react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { metadata } from "@/app/layout"

function Navbar() {
  return (
    <nav className="flex p-2 justify-between items-center bg-slate-100 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <div>{ metadata.title as string }</div>
      </div>
      <SignedIn>
        <div className="flex items-center gap-2">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
    </nav>
  )
}

export default Navbar