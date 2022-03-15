import { motion, AnimatePresence } from "framer-motion"

const FormThree = ({ setForm, data:donnee, submit }) => {
	const [data, setData] = donnee
	const {intitule, etablissement, ecole_doctorale, laboratoire_acceuil, addresse_labo, theme_recherche} = data
	const doSubmit = (e) => {
		e.preventDefault()
		submit()
	}
	return (
		<AnimatePresence>
		<motion.div key={0} 
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
			className="block  w-[500px] rounded-md pt-8 bg-white p-6 shadow-lg">
			<form className="flex flex-col">
				<div className="grid grid-cols-2 gap-4">
					<div className="form-group mb-6">
						<input
							type="text"
							className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							id="exampleInput123"
							aria-describedby="emailHelp123"
							placeholder="Intitule doctorant"
							value = { intitule }
							onChange={({ target }) => setData({ ...data, 'intitule':target.value})}
						/>
					</div>
					<div className="form-group mb-6">
						<input
							type="text"
							className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							placeholder="Etablissement"
							value = { etablissement }
							onChange={({ target }) => setData({ ...data, 'etablissement':target.value})}
						/>
					</div>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Ecole doctorale"
						value = { ecole_doctorale }
						onChange={({ target }) => setData({ ...data, 'ecole_doctorale':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Laboratoire d'accueil"
						value = { laboratoire_acceuil }
						onChange={({ target }) => setData({ ...data, 'laboratoire_acceuil':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Adresse laboratoire"
						value = { addresse_labo }
						onChange={({ target }) => setData({ ...data, 'addresse_labo':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Theme de recherce"
						value = { theme_recherche }
						onChange={({ target }) => setData({ ...data, 'theme_recherche':target.value})}
					/>
				</div>
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setForm(1) } className="flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >
                        Precedent
                    </button>
                    <button onClick={ doSubmit } className="ml-auto flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >
                        Enregistrer
                    </button>
                </div>
			</form>
		</motion.div>
		</AnimatePresence>
	);
};

export default FormThree;