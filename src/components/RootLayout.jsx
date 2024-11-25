import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"


const RootLayout = () => {
  return (
    <>
    <Navigation />
    <main className="min-h-dvh px-5">
        <Outlet/>

    </main>
    <Footer />

    </>
  )
}

export default RootLayout