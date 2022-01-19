import React from "react"
import Link from "next/link"

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>{props.content}</h1>
        <nav>
          <Link href="/">
            <a>Journal</a>
          </Link>
          <Link href="/addentry">
            <a>Add entry</a>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
