import { NavItems } from "./navItems"
// import PokeLogo from "../assets/pokelogo.svg";
// import { MobileNav } from "./mobileNav";
import { Moon, Sun } from 'lucide-react'
// import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
    // const { theme, setTheme } = useTheme()

    return (
        <header className="h-20 sticky top-0 bg-secondary bg-opacity-25 shadow-md z-20 md:px-10 w-full items-center border-b">
            <div className="wrapper flex items-center justify-between">
                <div className="grid grid-cols-2 items-center">
                    {/* <img className="h-auto w-24 md:transition-up" src={ PokeLogo } alt="Pokemon Logo" /> */}
                    <h1>Pick It</h1>
                </div>
                <div className="flex justify-between gap-3 md:gap-6">
                    {
                        (theme === "dark") ?
                            <Sun className="md:transition-up cursor-pointer" onClick={ () => setTheme("light") } /> :
                            <Moon className="md:transition-up cursor-pointer" onClick={ () => setTheme("dark") } />
                    }
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}