import { NavItems } from "./navItems"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { AlignRight } from 'lucide-react';

export const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignRight className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent className="md:hidden flex flex-col gap-6 bg-blend-overlay">
                        {/* <Image 
                            alt="Corexalt logo"
                            className="w-36 h-36" 
                            src="/corexalt_typo.svg"
                            width="50"
                            height="50"
                            style={{
                              aspectRatio: "16/9",
                              objectFit: "contain",
                            }}
                        /> */}
                    {/* <Separator /> */}
                        <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}