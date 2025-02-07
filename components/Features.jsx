"use client";
import {
    CogIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";

import { Fade } from "react-awesome-reveal";

const features = [
    {
        name: "Équipement Avancé",
        description:
            "Équipement de pompage de béton à la pointe de la technologie pour un placement précis et efficace du béton.",
        icon: CogIcon,
    },
    {
        name: "Protocoles de Sécurité",
        description:
            "Protocoles de sécurité rigoureux, opérateurs formés et respect des normes de l'industrie pour assurer un environnement de travail sûr.",
        icon: ShieldCheckIcon,
    },
    {
        name: "Polyvalence et Portée",
        description:
            "Capable de gérer des projets de différentes échelles et complexités, des fondations résidentielles aux infrastructures de grande envergure.",
        icon: GlobeAltIcon,
    },
    {
        name: "Service Réactif",
        description:
            "Disponibilité 24/7, estimation rapide de projet et équipe de support dédiée pour un service réactif et fiable.",
        icon: ClockIcon,
    },
];

const Features = () => {
    return (
        <section className="pb-12 xl:py-24">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={200}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto ">
                        Caractéristiques clés
                    </h2>
                </Fade>
                <div className="flex flex-col ">
                    <div className="mx-auto max-w-7xl text-center">
                        <Fade
                            direction="up"
                            delay={400}
                            triggerOnce={true}
                        >
                            <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white ">
                                Tout ce dont vous avez besoin pour une livraison
                                plus rapide
                            </p>
                        </Fade>
                        <Fade
                            direction="up"
                            delay={600}
                           
                            triggerOnce={true}
                        >
                            <p className="mt-6 text-lg leading-8  text-black dark:text-white">
                                Nos équipements de pompage de pointe comprennent
                                des pompes à béton haute pression et des pompes
                                montées sur remorque, offrant une efficacité,
                                une précision et une flexibilité inégalées. Nos
                                équipements peuvent travailler avec tous les
                                types de mélanges de béton, offrant le placement
                                de béton le plus fiable et précis pour des
                                projets de toute taille et complexité.
                            </p>
                        </Fade>
                    </div>
                </div>
                {/* Features Section*/}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
                    <dl
                        className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none 
                                    lg:grid-cols-2 lg:gap-y-16"
                    >
                        <Fade
                            direction="up"
                            delay={800}
                            cascade
                            damping={0.1}
                            triggerOnce={true}
                        >
                            {features.map((feature) => {
                                return (
                                    <div
                                        className="relative hover:scale-110 transition-all"
                                        key={feature.name}
                                    >
                                        <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                                            <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center ">
                                                <feature.icon
                                                    className="h-[36px] w-[36px] text-white"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className=" text-black dark:text-white ">
                                                {feature.name}
                                            </div>
                                        </dt>
                                        <dd className=" mt-2 text-base leading-7 ">
                                            {feature.description}
                                        </dd>
                                    </div>
                                );
                            })}
                        </Fade>
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Features;
