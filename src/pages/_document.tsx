import {Head, Html, Main, NextScript} from 'next/document'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body className="flex flex-col h-screen">
                <Navbar/>
                <Main/>
                <Footer/>
                <NextScript/>
            </body>
        </Html>
    )
}
