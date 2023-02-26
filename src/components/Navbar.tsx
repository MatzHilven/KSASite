import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-700 mb-20 px-2 sm:px-4 py-3 rounded-b-md shadow-2xl">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/" className="">
                    <img src="images/logo.png" className="mr-3 ml-10 sm:h-9"
                         alt="Logo"/>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <Link href="/"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10"
                               aria-current="page">Welkom</Link>
                        </li>
                        <li>
                            <Link href="/contact"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Contact</Link>
                        </li>
                        <li>
                            <Link href="/activiteiten"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Activiteiten</Link>
                        </li>
                        <li>
                            <Link href="/bannen"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Bannen</Link>
                        </li>
                        <li>
                            <Link href="/heikleuter"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Heikleuter</Link>
                        </li>
                        <li>
                            <Link href="/fotos"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Foto's</Link>
                        </li>
                        <li>
                            <Link href="/uniform"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Uniform</Link>
                        </li>
                        <li>
                            <Link href="/over"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Over
                                Ons</Link>
                        </li>
                        <li>
                            <Link href="/op-kamp"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Op
                                Kamp</Link>
                        </li>
                        <li>
                            <Link href="/evenementen"
                               className="block py-2 pl-2 pr-2 text-amber-100 text-base rounded hover:bg-gray-100 hover:bg-opacity-10">Evenementen</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden justify-between mr-10 md:flex">
                    <button type="button"
                            className="flex mx-5 border-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                        <a href="https://www.facebook.com/KSAFrisseHeikrachtBree/?view_public_for=863051483707219" target="_blank">
                            <img className="w-[30px]" src="/images/facebook.png" alt="Facebook"/></a>
                    </button>
                    <button type="button"
                            className="flex mx-5 border-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                        <a href="https://www.instagram.com/ksafhbree/" target="_blank">
                            <img className="w-[30px]" src="/images/instagram.png" alt="Instagram"/></a>
                    </button>
                    <button type="button"
                            className="flex mx-5 border-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                        <a href="https://www.youtube.com/channel/UCy9OGMI8ciALGytVvXjbrUQ" target="_blank">
                            <img className="w-[30px]" src="/images/youtube.png" alt="Youtube"/></a>
                    </button>
                </div>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}