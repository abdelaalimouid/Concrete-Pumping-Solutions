"use client";
import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//ui card
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

// awesome reveal
import { Fade } from "react-awesome-reveal";

const data = [
    {
        avatar: "/reviews/avatar-1.png",
        name: "Sophia",
        position: "Directeur des Opérations",
        review: "Expérience exceptionnelle, dépassement des attentes et professionnalisme remarquable. Hautement recommandé.",
    },
    {
        avatar: "/reviews/avatar-2.png",
        name: "Yassmine Mohamed",
        position: "Responsable des Finances",
        review: "Engagement envers l'excellence, souci du détail et partenaire de confiance. Toujours impressionnés par leur travail.",
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: "Hicham Ben Ali",
        position: "Chef de Projet",
        review: "Très satisfait des services fournis. Équipe compétente et dévouée. Expertise précieuse pour notre succès.",
    },
    {
        avatar: "/reviews/avatar-4.png",
        name: "Saousane Fassi",
        position: "Responsable des Ressources Humaines",
        review: "Expérience positive avec une équipe professionnelle et agréable. ",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Ahmed Abu Bakr",
        position: "Directeur des Ventes",
        review: "Fortement recommandé pour des services de qualité. Expertise incomparable en bétonnage et satisfaction client garantie.",
    },
    {
        avatar: "/reviews/avatar-6.png",
        name: "Saad Ben Achour",
        position: "Directrice Marketing",
        review: "Équipe efficace et professionnelle. Résultats satisfaisants et hâte de collaborer à nouveau.",
    },
];



const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={1600}
                    
                    triggerOnce
                >
                    <h2 className="section-title mb-12 text-center mx-auto">
                        Avis
                    </h2>
                </Fade>
                {/* Slider */}
                <Fade
                    direction="up"
                    delay={1800}
                    
                    triggerOnce
                >
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                        loop={true}
                        spaceBetween={30}
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="h-[360px]"
                        speed={2000}
                    >
                        {data.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className="p-8 min-h-[300px] cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700">
                                        <CardHeader className="p-0 mb-3">
                                            <div className="flex flex-col items-start gap-x-4 ">
                                                <Image
                                                    src={person.avatar}
                                                    width={70}
                                                    height={70}
                                                    priority
                                                    alt=""
                                                    className="mb-2 "
                                                />
                                                <div className="flex flex-col">
                                                    <CardTitle>
                                                        {person.name}
                                                    </CardTitle>
                                                    <p>{person.position}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className="text-lg text-muted-foreground">
                                            {person.review}
                                        </CardDescription>
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Fade>
            </div>
        </section>
    );
};

export default Reviews;
