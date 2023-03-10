import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="text-blue-900">
                <h1 className="text-4xl font-bold text-center mb-5">Contact</h1>
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl">Lokaal</h2>
                    <p className="text-lg my-4">
                        Gerdingerpoort 20 3960 Bree.
                        Je vindt onze lokalen achter het schoolgebouw van de Boemerang.
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.046214298068!2d5.592529215810513!3d51.144498879577185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d3ee1af6a06f%3A0x1d0b5db70a7b16c1!2sKSA%20Bree!5e0!3m2!1snl!2sbe!4v1676504861245!5m2!1snl!2sbe"
                        width="600" height="400" style={{border: 0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="flex flex-col items-center mt-10">
                    <h2 className="text-3xl">Contactpersonen</h2>
                    <h2 className="text-2xl mt-5">Bondsleiding</h2>
                    <table className="table-auto mt-10">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Bondsleider</td>
                                <td className="px-4 py-2">Britt Schwillens</td>
                                <td className="px-4 py-2 font-bold">0498 56 19 60</td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="px-4 py-2">Penningmeester</td>
                                <td className="px-4 py-2">Wout Vanderstegen</td>
                                <td className="px-4 py-2 font-bold">0499 25 86 69</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Secretaris</td>
                                <td className="px-4 py-2">Bram Janssen</td>
                                <td className="px-4 py-2 font-bold">0479 09 27 98</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="text-2xl mt-5">Banleiding</h2>
                    <table className="table-auto mt-10">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Leeuwkes</td>
                                <td className="px-4 py-2">Martijn Ceyssens</td>
                                <td className="px-4 py-2 font-bold">0496 69 07 55</td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="px-4 py-2">Jong-Knapen</td>
                                <td className="px-4 py-2">Stan Kwanten</td>
                                <td className="px-4 py-2 font-bold">0477 67 09 29</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Knapen</td>
                                <td className="px-4 py-2">Matz Hilven</td>
                                <td className="px-4 py-2 font-bold">0471 02 49 50</td>
                            </tr>
                            <tr className="bg-blue-100">
                                <td className="px-4 py-2">Jong-Hernieuwers</td>
                                <td className="px-4 py-2">Lowie Claes</td>
                                <td className="px-4 py-2 font-bold">0499 30 92 42</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}