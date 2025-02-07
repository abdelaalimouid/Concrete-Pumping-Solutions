"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="w=full pt-12 mb-6 xl:pb-24">
                    <Fade
                        direction="up"
                        delay={1800}
                        
                        triggerOnce={true}
                    >
                        <h2 className="section-title mb-12 text-center mx-auto">
                            FAQ
                        </h2>
                    </Fade>
                    {/* Accordion */}

                    <div>
                        <Fade
                            direction="up"
                            delay={1850}
                            
                            triggerOnce={true}
                        >
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <div className="ms-3">
                                            01. Qu'est-ce qui nous différencie ?
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Notre entreprise se distingue par son
                                        engagement envers la qualité, son
                                        expertise approfondie dans le domaine du
                                        bétonnage et son approche axée sur la
                                        satisfaction du client. Nous sommes
                                        déterminés à fournir des services de
                                        premier ordre et à dépasser les attentes
                                        de nos clients à chaque projet.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className="ms-3">
                                            02. Quels types de projets
                                            prenez-vous en charge ?
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Nous sommes équipés pour gérer une large
                                        gamme de projets, des petites
                                        constructions résidentielles aux grands
                                        projets d'infrastructure commerciale.
                                        Que ce soit pour des fondations, des
                                        dalles de béton, des murs de soutènement
                                        ou d'autres structures, notre équipe
                                        expérimentée est prête à relever le
                                        défi.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>
                                        <div className="ms-3">
                                            03. Comment puis-je obtenir un devis
                                            ?
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Pour obtenir un devis pour votre projet,
                                        il vous suffit de nous contacter via
                                        notre formulaire en ligne ou par
                                        téléphone. Notre équipe se fera un
                                        plaisir d'évaluer vos besoins et de vous
                                        fournir une estimation précise et
                                        détaillée.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
