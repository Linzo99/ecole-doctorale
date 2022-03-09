import Head from 'next/head'
import Link from 'next/link'

const ConnexionPage = () => {
    return(
    <div className="w-full h-screen">
        <Head>
            <title>Connexion</title>
            <link rel="icon" href="/images/logo2.png"/>
        </Head>
        <main className="w-full h-full relative bg-back bg-cover bg-center bg-no-repeat">
            <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-br from-primary/40 to-white/40">
            <div className="w-full max-w-xs">
                <h1 className="text-center text-blue-900 text-lg mb-5 cursor-pointer"><Link href="/">Retour à l'Acceuil</Link></h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Mot de passe
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-primary uppercase whitespace-nowrap text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Se connecter
                        </button>
                        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                            Mot de passe oublié ?
                        </a>
                    </div>
                </form>
                <p className="text-center text-black text-xs">
                    &copy;2020 ESP. All rights reserved.
                </p>
                </div>
            </div>
        </main>
    </div>
    )
}

export default ConnexionPage
