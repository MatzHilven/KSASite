import {Head, Html, Main, NextScript} from 'next/document'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Navbar/>
            <div className="w-full h-32"></div>
            <Main/>
            <NextScript/>
            <Footer/>
            </body>
        </Html>
    )
}
