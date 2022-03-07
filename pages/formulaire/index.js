import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FormOne from '../../components/FormOne'

const FormuPage = () => {
    return(
    <div className="w-full h-screen">
        <Head>
            <title>Formulaire Admission</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className="w-full h-full relative bg-back bg-cover bg-center bg-no-repeat">
            <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-br from-primary/40 to-white/40">
                <FormOne/>
            </div>
        </main>
    </div>
    )
}

export default FormuPage