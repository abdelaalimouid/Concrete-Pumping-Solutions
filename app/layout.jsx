//stylesheets
import "./globals.css";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
//font update
import { Sen } from "next/font/google";


const senFont = Sen({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: {
        absolute: "",
        default: "EHT | EL HOUARI TRANSERVICES",
        template: "%s | EHT",
    },
    description: "EHT is a construction company that specializes in concrete pumping and distribution.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={senFont.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
