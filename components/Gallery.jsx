"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const projects = [
    {
        image: "/work/11.jpg",
        category: "Commercial",
        name: "24 Février 2018",
        description:
            "Construction d'un centre commercial de 5 étages avec parking souterrain, comprenant des espaces de vente au détail, des bureaux et des restaurants.",
        link: "/portfolio",
    },
    {
        image: "/work/22.jpg",
        category: "Résidentiel",
        name: "14 Mars 2018",
        description:
            "Construction d'un ensemble résidentiel de 20 maisons individuelles de style moderne, avec espaces verts et aires de jeux pour enfants.",
        link: "/portfolio",
    },
    {
        image: "/work/33.jpg",
        category: "Commercial",
        name: "24 Février 2019",
        description:
            "Réhabilitation d'un immeuble de bureaux historique, comprenant une mise à jour des installations et une rénovation des espaces intérieurs.",
        link: "/portfolio",
    },
    {
        image: "/work/44.jpg",
        category: "Résidentiel",
        name: "14 Mars 2019",
        description:
            "Construction d'un complexe d'appartements de luxe de 10 étages, avec services haut de gamme et vue panoramique sur la ville.",
        link: "/portfolio",
    },
    {
        image: "/work/55.jpg",
        category: "Commercial",
        name: "24 Février 2020",
        description:
            "Expansion d'une usine de production alimentaire comprenant de nouveaux entrepôts, bureaux administratifs et zones de traitement.",
        link: "/portfolio",
    },
    {
        image: "/work/66.jpg",
        category: "Résidentiel",
        name: "14 Mars 2020",
        description:
            "Construction d'un complexe résidentiel de 15 étages offrant des appartements de luxe avec piscine sur le toit et salle de sport.",
        link: "/portfolio",
    },
    {
        image: "/work/88.jpg",
        category: "Commercial",
        name: "24 Février 2021",
        description:
            "Réaménagement d'un centre commercial existant pour inclure de nouveaux magasins, restaurants et espaces de divertissement.",
        link: "/portfolio",
    },
    {
        image: "/work/99.jpg",
        category: "Résidentiel",
        name: "14 Mars 2021",
        description:
            "Rénovation complète d'une maison de ville historique, préservant les caractéristiques d'origine tout en modernisant les installations.",
        link: "/portfolio",
    },
];

const Gallery = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto ">
                <Fade
                    direction="up"
                    delay={1200}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
                        Notre Travail
                    </h2>
                </Fade>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 xl:gap-y-12 xl:gap-x-8 transition-all duration-300">
                    <Fade
                        direction="up"
                        delay={1250}
                        cascade
                        damping={0.1}
                        triggerOnce
                    >
                        {projects.map((item) => {
                            return <ProjectCard project={item} />;
                        })}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
