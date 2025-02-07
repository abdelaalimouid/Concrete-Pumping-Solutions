"use client";
import { Truck, Wrench, MapPin } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Fade } from "react-awesome-reveal";

const services = [
    {
        icon: <Truck size={48} strokeWidth={1} />,
        title: "Livraison de Béton",
        description:
            "Notre flotte de pompes à béton assure une livraison de béton rapide et efficace pour des projets de toutes tailles. Que ce soit pour une fondation résidentielle ou un projet d'infrastructure de grande envergure, notre équipement et nos opérateurs experts garantissent un placement précis et un service fiable.",
    },
    {
        icon: <Wrench size={48} strokeWidth={1} />,
        title: "Location d'Équipement",
        description:
            "En plus de nos services de pompage, nous proposons des solutions de location d'équipement pour vos besoins en pompage de béton. Des pompes haute pression aux unités montées sur remorque, nous offrons des options de location flexibles pour répondre à vos besoins de projet.",
    },
    {
        icon: <MapPin size={48} strokeWidth={1} />,
        title: "Couverture Nationale",
        description:
            "Grâce à notre couverture nationale, nous pouvons atteindre même les endroits les plus reculés pour vos besoins en pompage de béton. Notre service fiable fonctionne 24/7, garantissant que votre projet reste sur la bonne voie, peu importe où il se trouve.",
    },
];
const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={800}
                    triggerOnce
                >
                    <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
                        Nos Services
                    </h2>
                </Fade>
                {/*Category  */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    <Fade
                        direction="up"
                        delay={1000}
                        cascade
                        damping={0.1}
                        triggerOnce
                    >
                        {services.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    className="relative w-full max-w-[425px] min-h-[380px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700"
                                >
                                    <CardHeader className="text-primary">
                                        <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center ">
                                        <CardTitle className=" mb-4">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg ">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Services;
