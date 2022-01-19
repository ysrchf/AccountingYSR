import Header from "./Header"

const Layout = (props) => {
  const { children, ...otherProps } = props
  
  return (
    <div {...otherProps}>
      <Header />
      <main>{children}</main>
      <body></body>
    </div>
  )
}

export default Layout
