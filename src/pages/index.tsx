import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>KSA Frisse Heikracht Bree</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <section id="welcome" className="flex flex-wrap">
                    <div
                        className="flex bg-gradient-to-br from-blue-900 to-blue-700 w-[35vw] justify-center rounded-r-2xl mr-10 shadow">
                        <img src="images/landing_page/frontpage_image.jpg"
                             alt="KSA Frisse Heikracht Bree"
                             className="p-6 object-contain"/>
                    </div>
                    <div className="flex flex-col items-center mt-2 w-[60vw]">
                        <h1 className="text-blue-900 text-4xl font-bold text-center mb-10">Welkom bij KSA Frisse
                            Heikracht
                            Bree</h1>
                        <p className="text-blue-900 text-xl text-center mb-6">Beste leden, ouders en sympathisanten</p>
                        <p className="text-blue-900 text-xl text-center mb-6">Welkom op onze website! Hier vind je meer
                            informatie over wie we zijn, welke activiteiten we organiseren en de bannenindeling. Ook
                            vind je ons krantje, de <a
                                className="underline cursor-pointer decoration-dotted hover:text-blue-800"
                                href="/heikleuter">Heikleuter</a>, foto's van kampen en
                            activiteiten en de laatste
                            nieuwtjes hier terug.
                        </p>
                        <p className="text-blue-900 text-xl text-center mb-6">Als je vragen hebt over activiteiten,
                            evenementen, kampen, inschrijvingen of andere dingen, aarzel zeker niet om de banleiders of
                            de bondsleiding te contacteren. Alle contactgegevens vind je onder de pagina: <a
                                className="underline cursor-pointer decoration-dotted hover:text-blue-800"
                                href="/contact">Contact</a>.
                        </p>
                        <p className="text-blue-900 text-xl text-center mb-6">Ben je overtuigd dat je mee wilt doen met
                            onze geweldig leuke activiteiten? Twijfel dan niet en schrijf je in via deze link.
                        </p>
                        <p className="text-blue-900 text-xl text-center">Vele groetjes</p>
                        <p className="text-blue-900 text-xl text-center">De leiding</p>
                    </div>
                </section>
                <section id="events" className="flex flex-col items-center mt-10">
                    <h1 className="text-blue-900 text-4xl font-bold text-center mb-10">Komende Evenementen</h1>
                    <div
                        className="bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-700 flex flex-wrap items-stretch w-full">
                        <div className="flex flex-wrap justify-center my-5">
                            <div
                                className="flex flex-col items-center bg-blue-100 rounded-xl shadow-lg p-4 m-4 w-[30vw] h-[30vw]">
                                <img src="images/events/spaghettidag.jpg"
                                     alt="Spaghettidag"
                                     className="object-contain w-[25vw] h-[25vw]"/>
                                <h1 className="text-blue-900 text-2xl font-bold text-center mt-2">Spaghettidag</h1>
                                <p className="text-blue-900 text-lg text-center">De Barrier</p>
                                <p className="text-blue-900 text-lg text-center mt-2">Zondag 26 Maart 2023</p>
                                <a href="https://www.facebook.com/events/1234567890"
                                   className="text-blue-900 text-lg mt-2 underline cursor-pointer decoration-dotted hover:text-blue-800">
                                    Facebook Evenement
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center my-5">
                            <div
                                className="flex flex-col items-center bg-blue-100 rounded-xl shadow-lg p-4 m-4 w-[30vw] h-[30vw]">
                                <img src="images/events/spaghettidag.jpg"
                                     alt="Spaghettidag"
                                     className="object-contain w-[25vw] h-[25vw]"/>
                                <h1 className="text-blue-900 text-2xl font-bold text-center mt-2">Spaghettidag</h1>
                                <p className="text-blue-900 text-lg text-center">De Barrier</p>
                                <p className="text-blue-900 text-lg text-center mt-2">Zondag 26 Maart 2023</p>
                                <a href="https://www.facebook.com/events/1234567890"
                                   className="text-blue-900 text-lg mt-2 underline cursor-pointer decoration-dotted hover:text-blue-800">
                                    Facebook Evenement
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center my-5">
                            <div
                                className="flex flex-col items-center bg-blue-100 rounded-xl shadow-lg p-4 m-4 w-[30vw] h-[30vw]">
                                <img src="images/events/spaghettidag.jpg"
                                     alt="Spaghettidag"
                                     className="object-contain w-[25vw] h-[25vw]"/>
                                <h1 className="text-blue-900 text-2xl font-bold text-center mt-2">Spaghettidag</h1>
                                <p className="text-blue-900 text-lg text-center">De Barrier</p>
                                <p className="text-blue-900 text-lg text-center mt-2">Zondag 26 Maart 2023</p>
                                <a href="https://www.facebook.com/events/1234567890"
                                   className="text-blue-900 text-lg mt-2 underline cursor-pointer decoration-dotted hover:text-blue-800">
                                    Facebook Evenement
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
