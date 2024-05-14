// import { Navbar } from "@/components/navbar"

type MainLayoutProps = {
    children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <div className="flex-center">
            {/* <Navbar /> */}
            <main className="flex-center">
                { children }    
            </main>
        </div>
    )
}