"use client";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon } from "lucide-react";
import { HandRaisedIcon } from "@heroicons/react/24/outline";

import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
    return (
        <section>
            <div className="relative bg-tertiary dark:bg-transparent overflow-hidden py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <Fade
                                direction="left"
                                delay={2000}
                                
                                triggerOnce={true}
                            >
                                <h2 className="section-title text-3xl font-bold tracking-tight sm:text-4xl">
                                    Contactez Nous
                                </h2>
                            </Fade>
                            <Fade
                                direction="left"
                                delay={2050}
                                
                                triggerOnce={true}
                            >
                                <p className="mt-4 subtitle leading-8 text-lg ">
                                    Nous sommes là pour vous aider. Avec notre
                                    expérience dans le domaine du bétonnage,
                                    nous pouvons vous fournir des conseils
                                    techniques et des solutions sur mesure pour
                                    vos projets de construction résidentiels,
                                    commerciaux ou industriels. Faites confiance
                                    à notre équipe d'experts pour garantir le
                                    succès de votre projet.
                                </p>
                            </Fade>
                            <Fade
                                direction="left"
                                delay={2050}
                                
                                triggerOnce={true}
                            >
                                <div className="mt-6 flex max-w-md gap-x-4 ">
                                    <Input
                                        id="email-address"
                                        type="email"
                                        name="email"
                                        className="w-full"
                                        autoComplete="email"
                                        placeholder="Cliquez sur le bouton"
                                        readOnly
                                    />
                                    <Link href="/contact">
                                        <Button>
                                            Envoyer <RiMenFill size={18} />
                                        </Button>
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 ">
                            <Fade
                                direction="right"
                                delay={2100}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <div className="flex flex-col items-start">
                                    <div className="bg-primary ring-1 p-2 ring-white/10 rounded-full">
                                        <HandRaisedIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-muted-foreground">
                                        Sécurité des Données
                                    </dt>
                                    <dd className="mt-2 leading-7 ">
                                        Nous assurons la sécurité de vos données
                                        sensibles avec des mesures de protection
                                        avancées pour garantir la
                                        confidentialité et l'intégrité de vos
                                        informations.
                                    </dd>
                                </div>
                            </Fade>
                            <Fade
                                direction="right"
                                delay={2100}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <div className="flex flex-col items-start">
                                    <div className="bg-primary ring-1 p-2 ring-white/10 rounded-full">
                                        <CalendarDaysIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-muted-foreground">
                                        Support 24/7
                                    </dt>
                                    <dd className="mt-2 leading-7 ">
                                        Notre équipe est disponible 24/7 pour
                                        répondre à vos besoins et résoudre tout
                                        problème éventuel. Nous sommes là pour
                                        vous offrir un support fiable et réactif
                                        à tout moment.
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

export default Newsletter;
