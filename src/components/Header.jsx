import React from "react"
import Link from "next/link"

const Header = (props) => {
  return (
    <header className="h-20 px-8 mb-10 flex items-center justify-between bg-black text-white">
      <h1 className="font-bold text-3xl ">{props.content}</h1>
      <nav>
        <Link href="/">
          <a className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">
            Journal
          </a>
        </Link>
        <Link href="/addentry">
          <a className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">
            Add entry
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
