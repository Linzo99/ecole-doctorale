import Head from 'next/head'
import { useState, useEffect } from 'react'
import DemandItem from '../../components/DemandeItem'
import { API_URL } from '../api'

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true)
    const [filter, setFilter] = useState("attente")
    const [demandes, setDemandes ] = useState([])

    useEffect( () => {
        fetch(`http://localhost:3001/demandes?id_ne=0&status=${filter}`, { method:"GET" }).then( res => res.json() )
                                                        .then( res => setDemandes( res ))
    },[filter])
    return(
        <div className="w-full h-screen bg-lightwhite">
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/images/logo2.png"/>
            </Head>
            <div className="w-screen h-screen lg:flex font-serif dark:bg-bolddark bg-whitewhite overflow-hidden">
                <span onClick={() => setSidebar(true)} className={` ${sidebar ? 'hidden':'block'} z-10 cursor-pointer shadow-md shadow-primary/50 position absolute left-0 top-14 rounded-tr-xl rounded-br-xl bg-primary`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="font-bold text-white h-8 w-8" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </span> 
                <div id="sidebar" className={`${!sidebar ? 'hidden':'block'} border-r lg:border-0 dark:border-bolddark border-gray-100 z-40 inset-y-0 left-0 w-[230px] h-full space-y-4 relative`}>
                    <div id="top" className="w-full shadow-md h-[70px] dark:bg-whitedark bg-white px-3 flex justify-between items-center border-gray-500">
                        <div className="text-primary text-lg font-bold">
                            <div className="w-[60px] lg:h-[60px] lg:w-[60px] h-[60px] bg-logo bg-contain bg-no-repeat"> </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="sidbar-toggle" onClick={() => setSidebar(false)} className="cursor-pointer text-primary h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-full h-full dark:bg-whitedark bg-white">
                        <h2 className="dark:text-gray-100 text-black font-bolder animate-pulse p-2">TABLEAU DE BORD</h2>
                        <div className="mt-3 px-2">
                            <div className="dark:text-gray-400 text-black/80 lg:ml-2 mt-2 text-md space-y-1 cursor-pointer">
                                <div>
                                    <input type="radio" checked name="sidemenu" className="peer appearance-none hidden" id="products" />
                                    <label for="products"
                                        className="block transition duration-100 cursor-pointer pl-4 py-2 hover:bg-lightwhite dark:hover:bg-bolddark peer-checked:text-lg peer-checked:p-2 dark:peer-checked:bg-bolddark peer-checked:bg-lightwhite peer-checked:font-bolder peer-checked:border-l-2 peer-checked:border-primary peer-checked:text-primary">Admissions</label>
                                </div>
                                <div>
                                    <input type="radio" name="sidemenu" className="peer appearance-none hidden" id="order" />
                                    <label for="order"
                                        className="block  transition duration-100 cursor-pointer pl-4 py-2 hover:bg-lightwhite dark:hover:bg-bolddark peer-checked:text-lg peer-checked:p-2 dark:peer-checked:bg-bolddark peer-checked:bg-lightwhite peer-checked:font-bolder peer-checked:border-l-2 peer-checked:border-primary peer-checked:text-primary">Suivi
                                        dossier</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 text-sm  text-black/70 p-2  flex justify-center flex-col space-y-2 cursor-pointer">
                        <p>2022 <span className="text-primary">ESP</span> All rights reserved</p>
                    </div>
                </div>
                <main className="absolute lg:relative lg:flex-1 inset-0 h-full overflow-hidden">
                    <nav id="navbar"
                    className={` ${sidebar ? 'justify-end':'justify-between'} w-full h-[70px] shadow-md dark:bg-whitedark bg-white border-l border-gray-100 dark:border-gray-600 px-5 flex items-center`}>
                    <div className={`${sidebar ? 'hidden':'block'} text-primary text-2xl font-bold`}>
                        <div className="w-[60px] lg:h-[60px] lg:w-[60px] h-[60px] bg-logo bg-contain bg-no-repeat"> </div>
                    </div>
                    <span className="flex items-center space-x-5">
                        <div className="relative">
                            <svg id="notif-handler" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <div x-show="notif" className="hidden absolute w-[250px] bg-transparent shadow-md dark:shadow-light right-2 z-30">
                                <div className="text-xs bg-primary py-1 flex justify-between items-center px-2">
                                    <span className="dark:text-white text-gray-800  font-bold">SHOW ALL NOTIFICATIONS</span>
                                    <span></span>
                                </div>
                                <div className="flex flex-col divide-y-2 dark:divide-bolddark">
                                    <template x-for="i in 3">
                                        <div
                                            className="w-full text-sm flex items-center text-gray-600 dark:text-white py-2 dark:bg-whitedark bg-white">
                                            <span className="h-full flex justify-center items-center px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <div className="flex-1 flex flex-col px-1 relative">
                                                <p><span className="pr-2 font-bold">766688519</span>Nouveau demande</p>
                                                <span className="text-primary font-bold">21 Fev 2021, 22:17</span>
                                                <span
                                                    className="absolute text-xs h-5 text-gray-400 cursor-pointer -top-2 right-2">x</span>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <span className="flex space-x-2 items-center">
                            <span className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 ring ring-primary">
                                <img className="w-full h-full"
                                    src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-photo-de-profil-d-affaires-de-l-avatar.jpg?ver=6" />
                            </span>
                            <span className="dark:text-gray-200 text-black/70">Monsieur Bâ</span>
                        </span>
                    </span>
                    </nav>
                    <div className="p-4 h-full">
                        <div className="border border-primary/30 dark:bg-whitedark bg-white px-3 py-8 h-[40px] flex justify-between items-center dark:text-white text-black/70">
                            <span className="space-x-2">
                                <span className="text-md">Trier par: </span>
                                <select
                                    className=" bg-transparent text-xs text-black dark:text-gray-400 px-2 py-1  border border-gray-400">
                                    <option value="recent">Plus recents</option>
                                    <option value="ecole">Ecole doctorale</option>
                                </select>
                            </span>
                            <span className="flex-1 flex justify-center space-x-2">
                                <span className="text-md">Fitrer par: </span>
                                <select
                                    onChange={ ({ target }) => setFilter(target.value) }
                                    className="bg-transparent text-xs text-black dark:text-gray-400 px-2 py-1  border border-gray-400">
                                    <option value="attente">En Attente</option>
                                    <option value="acceptees">Acceptees</option>
                                    <option value="rejetees">Rejetees</option>
                                </select>
                                <select
                                    className="bg-transparent text-xs text-black dark:text-gray-400 px-2 py-1  border border-gray-400">
                                    <option value="test">Ecole</option>
                                </select>
                            </span>
                            <span
                                className="dark:bg-bolddark focus-within:ring bg-lightwhite rounded-2xl flex items-center focus:ring ring-primary">
                                <input type="text"
                                    className="focus:outline-none dark:text-gray-400 text-black/70 w-[200px] dark:bg-bolddark bg-lightwhite px-2 py-1 rounded-2xl text-sm"
                                    placeholder="Search..." />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                        <div id="menu-wrapper" className="space-y-2 h-full box-border">
                            <div className="h-[30px] text-gray-300 mt-6 py-6 dark:bg-whitedark bg-white px-2 pr-12 flex justify-between items-center relative">
                                <span className="text-primary text-sm font-bold">LISTE DES DEMANDES</span>
                                <span className="space-x-2 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div className="h-full overflow-y-auto scroll-smooth box-border pb-[220px]">
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <div className="inline-block min-w-full align-middle">
                                            <div className="overflow-hidden ">
                                                <table
                                                    className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                    <thead className="bg-primary text-white font-bold dark:bg-gray-700">
                                                        <tr>
                                                            <th scope="col" className="p-4">
                                                                <div className="flex items-center">
                                                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                                    <label for="checkbox-all" className="sr-only">checkbox</label>
                                                                </div>
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 text-sm tracking-wider text-left  uppercase dark:text-gray-400">
                                                                Telephone
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 text-sm tracking-wider text-left  uppercase dark:text-gray-400">
                                                                Prenoms
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 text-sm tracking-wider text-left  uppercase dark:text-gray-400">
                                                                Email
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 text-sm tracking-wider text-left  uppercase dark:text-gray-400">
                                                                Diplome
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 text-sm tracking-wider text-left  uppercase dark:text-gray-400">
                                                                Mention
                                                            </th>
                                                            <th scope="col" className="p-4">
                                                                <span className="sr-only">Edit</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                        { 
                                                            demandes.map( (item, k) => <DemandItem item={item} key={k}/> )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="pagination" className="float-right shadow-lg font-bold mr-2 inline dark:bg-whitedark bg-white mt-2 p-2 px-4 rounded-sm dark:text-gray-100 text-black/50 space-x-4">
                                    <span>{ "<" }</span>
                                    <span>1</span>
                                    <span className="text-primary">2</span>
                                    <span>3</span>
                                    <span>...</span>
                                    <span>15</span>
                                    <span>{ ">" }</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;