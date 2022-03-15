import { useState } from "react"
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FormOne from "../../components/forms/FormOne"
import FormTwo from "../../components/forms/FormTwo"
import FormThree from "../../components/forms/FormThree"

const values = {
        "prenoms":"",
        "nom":"",
        "email":"",
        "telephone":"",
        "addresse":"",
        "nationalite":"",
        "diplome":"",
        "specialite":"",
        "date_obtention":"",
        "mention":"",
        "intitule":"",
        "etablissement":"",
        "ecole_doctorale":"",
        "laboratoire_acceuil":"",
        "addresse_labo":"",
        "theme_recherche":"",
        "status":"attente"
    }

const FormuPage = () => {
    const [form, setForm] = useState(0)
    const data = useState(values)
    const formulaires = [FormOne, FormTwo, FormThree]
    const Form = formulaires[ form ]

    const handleSubmit = async () => {
        const [donnee, _] = data
        try{
            let demande = await fetch("http://localhost:3001/demandes?_sort=id&_order=desc&_limit=1", {method:"GET"})
            demande = await demande.json()
            donnee["id"] = demande ? demande[0].id+1 : 1
            await fetch("http://localhost:3001/demandes", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method:"POST", body:JSON.stringify(donnee) })
        }
        catch(err){
            console.log(err)
        }
    }

    return(
    <div className="w-full h-screen">
        <Head>
            <title>Formulaire Admission</title>
            <link rel="icon" href="/images/logo2.png"/>
        </Head>
        <main className="w-full h-full relative bg-back bg-cover bg-center bg-no-repeat">
            <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-br from-primary/40 to-white/40">
                <Form setForm={setForm} data={data} submit={ () => handleSubmit() }/>
            </div>
        </main>
    </div>
    )
}

export default FormuPage