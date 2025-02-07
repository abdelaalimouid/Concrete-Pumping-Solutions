"use client";
import HeroImg from "@/components/HeroImg";
import React from "react";
import {
    RiUserHeartFill,
    RiSendPlaneFill,
    RiRidingFill,
    RiStarHalfSLine,
    RiVidiconFill,
    RiVipCrown2Fill,
} from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import useWindowSize from "@/hooks/useWindowSize";

const data = [
    {
        icon: <RiUserHeartFill />,
        text: "El Houari Transervices",
    },
    {
        icon: <RiSendPlaneFill />,
        text: "+212555443322",
    },
    {
        icon: <RiVidiconFill />,
        text: "eht@gmail.com",
    },
    {
        icon: <RiStarHalfSLine />,
        text: "22 Mars, 2018",
    },
    {
        icon: <RiVipCrown2Fill />,
        text: "Elite",
    },
    {
        icon: <RiRidingFill />,
        text: "22 El haj salem Street,Casablanca,Morocco",
    },
];

const About = () => {
    const { width } = useWindowSize();
    const isSmallScreen = width < 640; 

    return (
        <section className="pb-12 min-h-screen ">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
                        À Propos de Nous
                    </h2>
                </Fade>

                <div className="flex flex-col xl:flex-row">
                    {/* Img */}
                    <div className="relative flex-1 xl:flex">
                        <Fade
                            direction={isSmallScreen ? "up" : "left"}
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <HeroImg
                                containerStyles="w-[380px] h-[380px] xl:w-[505px] xl:h-[505px] bg-not-repeat relative mx-auto"
                                imgSrc="/about/EHT.svg"
                            />
                        </Fade>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                        <div className="text-lg mt-12 xl:mt-3 ">
                            <div className="text-center xl:text-left">
                                <Fade
                                    direction={isSmallScreen ? "up" : "right"}
                                    delay={800}
                                    cascade
                                    damping={1e-1}
                                    triggerOnce={true}
                                >
                                    <h3 className="h3 mb-4">
                                        Travaillons ensemble sur quelque chose
                                        de grand
                                    </h3>
                                </Fade>
                                <Fade
                                    direction={isSmallScreen ? "up" : "right"}
                                    delay={1000}
                                    cascade
                                    damping={1e-1}
                                    triggerOnce={true}
                                >
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        El Houari Transervices est là pour vous
                                        aider à réaliser vos projets. Notre
                                        équipe est dévouée à fournir des
                                        solutions sur mesure pour répondre à vos
                                        besoins spécifiques. Avec notre
                                        expérience et notre engagement envers
                                        l'excellence, nous sommes prêts à
                                        relever tous les défis.
                                    </p>
                                </Fade>
                                <Fade
                                    direction={isSmallScreen ? "up" : "right"}
                                    delay={1000}
                                    cascade
                                    damping={1e-1}
                                    triggerOnce={true}
                                >
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        Contactez-nous dès aujourd'hui pour en
                                        savoir plus sur nos services et
                                        découvrir comment nous pouvons vous
                                        aider à atteindre vos objectifs.
                                    </p>
                                </Fade>
                                {/* Icons */}
                                <div className=" grid xl:grid-cols-2 gap-4 mb-12">
                                    <Fade
                                        direction={isSmallScreen ? "up" : "right"}
                                        delay={1000}
                                        cascade
                                        damping={1e-1}
                                        triggerOnce={true}
                                    >
                                        {data.map((item, index) => {
                                            return (
                                                <div
                                                    className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                    key={index}
                                                >
                                                    <div className="text-primary">
                                                        {item.icon}
                                                    </div>
                                                    <div className="">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
