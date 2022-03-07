import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="w-full m-w-screen overflow-x-hidden">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <main className="h-full">
          <div className="w-full h-full bg-primary">
            <section className="container mx-auto flex flex-wrap">
              <div className="flex-1  p-4 lg:p-14 flex flex-col gap-y-6 py-10">
                <span className="text-2xl md:text-3xl text-white font-serif"><span className="text-4xl md:text-5xl font-bold">Bienvenue sur la plateforme de dépot de candidature pour une école doctorale</span>.<p className="text-gray-100">Faîtes une demande d'admission et déposez votre dossier. La plateforme est ouverte jusqu'au 30 Avril 2022.</p></span>
                <div className="space-x-3 flex flex-shrink-0">
                  <button  className="bg-white hover:shadow-lg hover:scale-105 transtion duration-300 border-primary items-center px-4 py-2 text-primary shadow-sm flex whitespace-nowrap">
                    Demande d'admission
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </button>
                  <button className="bg-white hover:shadow-lg hover:scale-105 transtion duration-300 box-border border border-primary px-4 py-2 text-primary shadow-sm">Connexion</button>
                </div>
              </div>
              <div className="lg:flex-1 animate-updown flex-shrink-0 bg-hero bg-contain bg-no-repeat"></div>
            </section>
          </div>
          <div className="w-full h-full bg-white">
            <section className="container mx-auto py-14">
              <h1 className="text-center text-3xl hover:underlien font-bold text-primary">A PROPOS</h1>
              <div className="flex md:flex-row flex-col flex-wrap items-start">
                <div className="flex-1 p-6 md:py-20 space-y-3">
                  <span className="flex items-start gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg">Une plateforme permettant aux doctorants de candidater pour leur soutenance.</p>
                  </span>
                  <span className="flex items-start gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Un suivi du dossier du candidat après dépot.</p>
                  </span>
                  <span className="flex items-start gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Une solution de dématérialisation d'un processus de candidature.</p>
                  </span>
                </div>
                <div className="flex-1 p-6  lg:py-20">
                  <p className="text md md:text-lg lg:leading-8">Avec cette plateforme les Ecoles Doctorales saisissent une fois de plus l'occasion d'innover en mettant à la disposition aux doctorants une solution leurs permettant de gérer leur soutenance et de suivre l'évolution de leur dossier facilement</p>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full h-full bg-gray-50">
            <section className="container mx-auto py-14">
              <h1 className="text-center text-lg md:text-3xl hover:underlien font-bold text-primary">QUESTIONS FREQUENTES</h1>
              <div className="flex flex-col justify-center items-center mt-10 space-y-4">
                <details className="w-full cursor-pointer max-w-[80%] lg:max-w-[60%]  transition duration-1000 bg-white p-6 px-4 rounded-sm drop-shadow-md">
                  <summary className="list-none text-primary  flex justify-between items-center">
                    <p>Puis-je déposer ma candidature après la fermeture?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 mt-4 text-md">Malheureusement, après la clôture des candidatures vous ne pourrez plus candidater, mais vous pouvez contacter le service de scolarité. </p>
                </details> 

                <details className="w-full cursor-pointer max-w-[80%] lg:max-w-[60%] transition duration-1000 bg-white p-6 px-4 rounded-sm drop-shadow-md">
                  <summary className="list-none text-primary  flex justify-between items-center">
                    <p>Est-ce que je peux déposer plusieurs candidatures?  </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 mt-4 text-md">Chaque candidat ne peut déposer qu'un seul dossier de candidature sur la plateforme.</p>
                </details> 

                <details className="w-full cursor-pointer max-w-[80%] lg:max-w-[60%]  transition duration-1000 bg-white p-6 px-4 rounded-sm drop-shadow-md">
                  <summary className="list-none text-primary  flex justify-between items-center">
                    <p>Puis-je modifier mon mail? </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <p className="text-gray-700 mt-4 text-md">Malheuresement non, cette information personnelle est figée et sera automatiquement ajoutée au formulaire de candidature, de plus elle servira à la scolarité pour vous informer sur d'éventuelles erreurs. </p>
                </details> 
              </div>
            </section>
          </div>
        </main>
        <Footer/>
    </div>
    )
}

export default Home;