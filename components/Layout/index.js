import Header from "../Header"

const Layout = ({children}) => {
    return (
        <>
            <div className="h-20 fixed z-[100] w-full bg-white">
                <div className="w-full lg:w-[1240px] mx-auto">
                    <Header/>
                </div>
            </div>
            <div className="pt-[80px]">
                {children}
            </div>
        </>
    )
}

export default Layout