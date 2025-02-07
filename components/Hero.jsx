"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// icons
import {
    RiMenFill,
    RiBookmark3Fill,
    RiServiceFill,
    RiTruckFill,
} from "react-icons/ri";
import { MdConstruction } from "react-icons/md";

// react awesome
import { Fade } from "react-awesome-reveal";

//components
import Socials from "./Socials";
import HeroImg from "./HeroImg";
import Hero3d from "./Hero3d";
import Badge from "./Badge";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <section className="py-12 xl:py-5 h-[auto] bg-bottom">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* Left side */}
                    <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-o text-center xl:text-left">
                        <Fade
                            direction="up"
                            delay={400}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]  ">
                                el houari transervices
                            </div>
                        </Fade>
                        <Fade
                            direction="up"
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <h1 className="h1 uppercase">
                                Créons de la magie !
                            </h1>
                        </Fade>

                        <Fade
                            direction="up"
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <p className="subtitle max-w-[590px] mt-4 mx:auto xl:mx-0 ">
                                Optimisez vos projets de construction avec nos
                                solutions de pompage de béton de pointe. De la
                                fondation à la finition, nous garantissons
                                précision, efficacité et fiabilité à chaque
                                étape du processus.
                            </p>
                        </Fade>
                        {/* Quote button*/}

                        <Fade
                            direction="up"
                            delay={1000}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                                <div className="flex w-full gap-x-4">
                                    <label
                                        for="email-address"
                                        className="sr-only"
                                    >
                                        Adresse e-mail
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Cliquez sur le bouton"
                                        value={email}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <Link href={{ pathname: "/contact", query: { email } }}>
                                        <Button className="gap-x-2 bg-black dark:bg-white dark:hover:bg-blue-500 ">
                                            Obtenez un devis
                                            <RiMenFill size={18} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        {/* Social icons */}
                        <Fade
                            direction="up"
                            delay={1200}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <Socials
                                containerStyles="flex gap-x-6 mx-auto xl:mx-0 "
                                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                            />
                        </Fade>
                    </div>
                    {/* Banner */}
                    <Fade
                        direction="right"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <div className="hidden xl:flex relative">
                            <div className="w-[600px] h-[520px] relative overflow-visible">
                                <Hero3d />
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Badge */}
                <div className="py-24 sm:py-32 ">
                    <div className="mx-auto max-w-7xl px-6  lg:px-8 ">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
                            <Fade
                                direction="up"
                                delay={800}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                {/*Section 1*/}
                                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                                    <dt className="text-base leading-7 text-muted-foreground">
                                        Années d'expérience
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                        <Badge
                                            icon={<RiBookmark3Fill />}
                                            endCountNum={12}
                                            endCountText="+"
                                        />
                                    </dd>
                                </div>

                                {/*Section 2*/}
                                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                                    <dt className="text-base leading-7 text-muted-foreground">
                                        Équipements
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                        <Badge
                                            icon={<MdConstruction />}
                                            endCountNum={24}
                                            endCountText="+"
                                        />
                                    </dd>
                                </div>
                                {/*Section 3*/}
                                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                                    <dt className="text-base leading-7 text-muted-foreground">
                                        Projets terminés
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                        <Badge
                                            icon={<RiServiceFill />}
                                            endCountNum={3}
                                            endCountText="k"
                                        />
                                    </dd>
                                </div>
                            </Fade>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
