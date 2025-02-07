"use client";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { Fade } from "react-awesome-reveal";

const positions = [
    "Opérateur de pompe",
    "Opérateur de flèche de distribution",
    "Mécanicien de maintenance de la flotte",
    "Opérateur de pompe à ligne",
];

const benefits = [
    "Salaire compétitif",
    "Assurance santé",
    "Congés payés",
    "Équipement officiel de membre",
];

const careers = () => {
    const [isCopied, setIsCopied] = useState(false);
    const toast = useToast();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("hr@example.com").then(() => {
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        });
    };

    return (
        <section className="pt-12 min-h-screen ">
            <div className="container mx-auto mb-8">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    {" "}
                    <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
                        Carrières
                    </h2>
                </Fade>
                <div className="mx-auto max-w-2xl text-center">
                    <Fade
                        direction="up"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
                            Rejoignez notre équipe dès maintenant
                        </h2>
                    </Fade>
                    <Fade
                        direction="up"
                        delay={800}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <p className="mt-6 text-lg leading-8">
                            Nous sommes toujours à la recherche de personnes
                            talentueuses pour rejoindre notre équipe.
                        </p>
                    </Fade>
                </div>

                {/* Positions available */}
                <Fade
                    direction="up"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="mx-auto mt-16  max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        {/* Left */}
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <div className="mt-2 flex gap-x-4 items-center">
                                <h4 className="flex-none text-sm leading-6 text-primary font-semibold">
                                    Postes disponibles
                                </h4>
                                <div className="h-px flex-auto bg-gray-100"></div>
                            </div>

                            <p className="mt-6 leading-7 text-base">
                                Nous recherchons des personnes passionnées par
                                leur travail et engagées à fournir des services
                                de haute qualité dans l'industrie du pompage de
                                béton.
                            </p>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                            >
                                {positions.map((position) => (
                                    <li
                                        key={position}
                                        className="flex text-muted-foreground gap-x-1"
                                    >
                                        <CheckIcon
                                            className="h-6 w-6 flex-none text-primary"
                                            aria-hidden="true"
                                        />
                                        {position}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex gap-x-4 items-center">
                                <h4 className="flex-none text-sm leading-6 text-primary font-semibold">
                                Avantages
                                </h4>
                                <div className="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                            >
                                {benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex text-muted-foreground gap-x-3"
                                    >
                                        <CheckIcon
                                            className="h-6 w-6 flex-none text-primary"
                                            aria-hidden="true"
                                        />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right */}
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:max-h-full">
                            <div className="bg-tertiary dark:bg-transparent dark:lg:border-l-4 h-full py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold">
                                    Rejoignez-nous et faites partie d'une
                                        équipe dévouée !
                                    </p>
                                    <p className="mt-4 text-lg">
                                    Envoyez votre CV à l'adresse e-mail
                                        ci-dessous :
                                    </p>
                                    <div className="mt-6 items-baseline justify-center gap-x-2">
                                        <span className="text-1xl font-semibold tracking-tight text-primary">
                                            test_sfe@gmail.com
                                        </span>
                                    </div>
                                    <Button
                                        onClick={handleCopyEmail}
                                        className="gap-x-2 mt-4 bg-primary text-white hover:bg-primary-dark"
                                    >
                                        {isCopied
                                            ? "Copié dans le presse-papiers !"
                                            : "Copier l'e-mail"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default careers;
