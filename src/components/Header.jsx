import Link from "next/link"

const Header = (props) => {
  return (
    <header className="sticky top-0 z-40 h-20 px-8 mb-10 flex items-center justify-between bg-black text-white drop-shadow-md">
      <h1 className="font-bold text-3xl ">{props.content}</h1>
      <nav>
        <Link href="/">
          <a
            className={`${
              props.content === "Dashboard"
                ? "text-white px-3 py-2 rounded-md text-sm font-bold underline bg"
                : "text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            }`}
          >
            Dashboard
          </a>
        </Link>
        <Link href="/addentry">
          <a
            className={`${
              props.content === "Add Entry"
                ? "text-white px-3 py-2 rounded-md text-sm font-bold underline bg"
                : "text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            }`}
          >
            Add entry
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
