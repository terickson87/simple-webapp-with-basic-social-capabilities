import MyAppBar from "./MyAppBar";

const Layout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <MyAppBar />
      <main>{children}</main>
    </>
  )
}

export default Layout;