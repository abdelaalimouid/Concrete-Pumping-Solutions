"use client";
import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "./ui/input";
import {
    ArrowRightIcon,
    Building,
    MessageSquare,
    UserCheck,
    UserRoundCheck,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import useWindowSize from "@/hooks/useWindowSize";
import { Fade } from "react-awesome-reveal";

const Form = () => {
    const { width } = useWindowSize();
    const isSmallScreen = width < 640;

    const [state, handleSubmit] = useForm("mjvnqpkp");

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Thanks for joining!", {
                position: "top-right",
                autoClose: 5000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [state.succeeded]);

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                {/* first name */}
                <Fade
                    direction={isSmallScreen ? "up" : "right"}
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="flex relative items-center">
                        <Input id="firstName" type="text" required name="firstName" placeholder="Prénom" />
                        <UserCheck className="absolute right-6" size={20} />
                    </div>
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </Fade>

                {/* last name */}
                <Fade
                    direction={isSmallScreen ? "up" : "right"}
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="flex relative items-center">
                        <Input id="lastName" type="text" name="lastName" required placeholder="Nom de famille" />
                        <UserRoundCheck className="absolute right-6" size={20} />
                    </div>
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </Fade>

                {/* email */}
                <Fade
                    direction={isSmallScreen ? "up" : "right"}
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="flex relative items-center">
                        <Input id="email" type="email" name="email" required placeholder="E-mail" />
                        <Building className="absolute right-6" size={20} />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Fade>

                {/* message */}
                <Fade
                    direction={isSmallScreen ? "up" : "right"}
                    delay={1200}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="flex relative items-center">
                        <Textarea id="message" name="message" required placeholder="Tapez votre message ici" />
                        <MessageSquare className="absolute top-4 right-6" size={20} />
                    </div>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Fade>

                {/* submit */}
                <Fade
                    direction={isSmallScreen ? "up" : "right"}
                    delay={1400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <Button type="submit" disabled={state.submitting} className="flex items-center gap-x-1 max-w-[165px]">
                        Envoyer
                        <ArrowRightIcon size={20} />
                    </Button>
                </Fade>
            </form>
            <ToastContainer />
        </>
    );
};

export default Form;
