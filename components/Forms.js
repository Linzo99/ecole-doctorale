import FormOne from './FormOne'

const formulaire = {
    "one": FormOne
}

const Forms = ({ number="one" }) => {
    const CurrentForm = formulaire[number]
    return (
        <CurrentForm/>
    )
}

export default Forms