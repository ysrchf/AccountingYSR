import Header from "./Header"

const Layout = (props) => {
  const { children, ...otherProps } = props

  return (
    <div {...otherProps}>
      <Header content={props.content} />
      <main className="w-3/5 mx-auto ">{children}</main>
    </div>
  )
}

export default Layout
