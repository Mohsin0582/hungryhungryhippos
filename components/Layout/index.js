import Header from "../Header"
import Footer from "../Footer"

const Layout = ({children}) => {
    return (
        <>
            <div className="h-20 fixed z-[100] w-full bg-white">
                <div className="w-full lg:w-10/12 mx-auto">
                    <Header/>
                </div>
            </div>
            <div className="pt-[80px]">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout