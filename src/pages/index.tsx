import Head from 'next/head'
import {Event} from "next/dist/compiled/@edge-runtime/primitives/events";
import Events from "@/components/Events";


export default function Home() {
    return (
        <>
            <Head>
                <title>KSA Frisse Heikracht Bree</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <section id="welcome" className="flex flex-col items-center lg:flex-row lg:justify-between">
                    <img src="images/landing_page/frontpage_image.jpg"
                         alt="KSA Frisse Heikracht Bree"
                         className="mx-6 max-w-lg"/>
                    <div className="flex flex-col mx-5 mt-2 lg:w-[60vw]">
                        <h1 className="text-blue-900 text-4xl font-bold mb-10">Welkom bij KSA Frisse
                            Heikracht
                            Bree</h1>
                        <p className="text-blue-900 text-xl mb-6">Beste leden, ouders en sympathisanten</p>
                        <p className="text-blue-900 text-xl mb-6">Welkom op onze website! Hier vind je meer
                            informatie over wie we zijn, welke activiteiten we organiseren en de bannenindeling. Ook
                            vind je ons krantje, de <a
                                className="underline cursor-pointer decoration-dotted hover:text-[#0B0051"
                                href="/heikleuter">Heikleuter</a>, foto's van kampen en
                            activiteiten en de laatste
                            nieuwtjes hier terug.
                        </p>
                        <p className="text-blue-900 text-xl mb-6">Als je vragen hebt over activiteiten,
                            evenementen, kampen, inschrijvingen of andere dingen, aarzel zeker niet om de banleiders of
                            de bondsleiding te contacteren. Alle contactgegevens vind je onder de pagina: <a
                                className="underline cursor-pointer decoration-dotted hover:text-[#0B0051"
                                href="/contact">Contact</a>.
                        </p>
                        <p className="text-blue-900 text-xl mb-6">Ben je overtuigd dat je mee wilt doen met
                            onze geweldig leuke activiteiten? Twijfel dan niet en schrijf je in via deze link.
                        </p>
                        <p className="text-blue-900 text-xl">Vele groetjes</p>
                        <p className="text-blue-900 text-xl">De leiding</p>
                    </div>
                </section>
                <section id="events" className="flex items-center mt-20">
                    <div
                        className="bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-600 flex flex-col flex-wrap w-full">
                        <h1 className="text-white text-4xl font-bold text-center my-5">Komende Evenementen</h1>
                        <Events/>
                    </div>
                </section>
            </main>
        </>
    )
}
