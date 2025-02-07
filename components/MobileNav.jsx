import { useState } from "react";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => setIsOpen(!isOpen);
    const closeSheet = () => setIsOpen(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <AlignJustify
                    className="cursor-pointer"
                    onClick={toggleSheet}
                />
            </SheetTrigger>
            <AnimatePresence>
                {isOpen && (
                    <SheetContent
                        as={motion.div}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center justify-between h-full py-8">
                            <div className="flex flex-col items-center gap-y-32">
                                <Logo />
                                <Nav
                                    containerStyles="flex flex-col items-center gap-y-6"
                                    linkStyles="text-1xl"
                                    closeSheet={closeSheet}
                                />
                            </div>
                            {/* Social icons */}
                            <Socials
                                containerStyles="flex gap-x-4"
                                iconStyles="text-2xl"
                            />
                        </div>
                    </SheetContent>
                )}
            </AnimatePresence>
        </Sheet>
    );
};

export default MobileNav;
