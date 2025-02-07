"use client";
import Form from "@/components/Form";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";


import { Fade } from "react-awesome-reveal";

const contact = () => {
    const { width } = useWindowSize();
    const isSmallScreen = width < 640;
    return (
        <section className="min-h-screen">
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
                    {/* left */}
                    <div className="flex flex-col justify-center">
                        <Fade
                            direction={isSmallScreen ? "up" : "left"}
                            delay={400}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className="flex items-center gap-x-4 text-lg text-primary mb-4">
                                <span className="w-[30px] h-[2px] bg-primary"></span>
                                Bonjour
                            </div>
                        </Fade>
                        <Fade
                            direction={isSmallScreen ? "up" : "left"}
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <h1 className="h1 max-w-md mb-8">
                                Travaillons ensemble
                            </h1>
                        </Fade>
                        <Fade
                            direction={isSmallScreen ? "up" : "left"}
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <p className="subtitle max-w-[400px]">
                                Nous sommes ravis de vous rencontrer ! Vous avez
                                un projet ou une idée en tête ? Parlons-en
                                ensemble pour le concrétiser. Chez nous, la
                                collaboration est la clé du succès.
                            </p>
                        </Fade>
                    </div>
                    <div className="">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;
