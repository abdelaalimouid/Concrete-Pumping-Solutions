"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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
    {
        image: "/work/21.jpg",
        category: "Réparation",
        name: "Tuyau fissuré",
        description:
            "Réparation spécialisée de tuyaux fissurés pour une durabilité accrue.",
        link: "/portfolio",
    },
    {
        image: "/work/23.jpg",
        category: "Réparation",
        name: "Maintenance hydraulique",
        description:
            "Maintenance complète pour prolonger la durée de vie des pompes hydrauliques.",
        link: "/portfolio",
    },
    {
        image: "/work/24.jpg",
        category: "Réparation",
        name: "Remplacement de buse",
        description:
            "Installation de buses de haute qualité pour un placement précis du béton.",
        link: "/portfolio",
    },
    {
        image: "/work/25.jpg",
        category: "Réparation",
        name: "Réparation de pipeline",
        description:
            "Réparation rapide des pipelines endommagés pour minimiser les temps d'arrêt.",
        link: "/portfolio",
    },
    {
        image: "/work/26.jpg",
        category: "Réparation",
        name: "Maintenance de valve",
        description:
            "Maintenance régulière pour des valves performantes et des opérations sans problème.",
        link: "/portfolio",
    },
    {
        image: "/work/27.jpg",
        category: "Réparation",
        name: "Dépannage électrique",
        description:
            "Résolution efficace des problèmes électriques pour un fonctionnement sûr et fiable.",
        link: "/portfolio",
    },
];

const Categories = [
    "tous les projets",
    ...new Set(projects.map((item) => item.category)),
];
const portfolio = () => {
    const [categories, setCategories] = useState(Categories);
    const [category, setCategory] = useState("tous les projets");
    const filteredProjects = projects.filter((project) => {
        return category === "tous les projets"
            ? project
            : project.category === category;
    });
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                        Portfolio
                    </h2>
                </Fade>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48 ">
                    <Fade
                        direction="up"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <TabsList className="grid w-full h-full md:grid-cols-4 lg:mx-w-[740px] mb-12 mx-auto md:border dark:border-none">
                            {categories.map((category, index) => {
                                return (
                                    <TabsTrigger
                                        key={index}
                                        value={category}
                                        onClick={() => setCategory(category)}
                                        className="capitalize w-[162px] md:w-auto"
                                    >
                                        <motion.div
                                            layoutId="activeTab"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6,
                                            }}
                                        />
                                        {category}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </Fade>
                    {/* Content */}
                    <div className=" text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <Fade
                            direction="up"
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            {filteredProjects.map((project, index) => {
                                return (
                                    <TabsContent value={category} key={index}>
                                        <ProjectCard project={project} />
                                    </TabsContent>
                                );
                            })}
                        </Fade>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};
export default portfolio;
