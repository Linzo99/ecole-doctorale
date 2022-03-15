import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

const FormOne = ({ setForm, data:donnee}) => {
	const [data, setData] = donnee
	const { prenoms, nom, email, telephone, addresse, nationalite } = data
	return (
		<AnimatePresence>
		<motion.div key={0} 
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
			className="block  w-[500px] rounded-md pt-8 bg-white p-6 shadow-lg">
			<h1 className="text-center text-primary text-lg mb-5 cursor-pointer"><Link href="/">Retour à l'Acceuil</Link></h1>
			<form className="flex flex-col">
				<div className="grid grid-cols-2 gap-4">
					<div className="form-group mb-6">
						<input
							type="text"
							required
							className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							id="exampleInput123"
							aria-describedby="emailHelp123"
							placeholder="Prenoms"
							value={ prenoms }
							onChange={({ target }) => setData({ ...data, 'prenoms':target.value})}
						/>
					</div>
					<div className="form-group mb-6">
						<input
							type="text"
							required
							className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							id="exampleInput124"
							aria-describedby="emailHelp124"
							placeholder="Nom"
							value={ nom }
							onChange={({ target }) => setData({ ...data, 'nom':target.value})}
						/>
					</div>
				</div>
				<div className="form-group mb-6">
					<input
						type="email"
						required
						className="invalid:border-red-600 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Email"
						value={ email }
						onChange={({ target }) => setData({ ...data, 'email':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						required
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Telephone"
						value={ telephone }
						onChange={({ target }) => setData({ ...data, 'telephone':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						required
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						id="exampleInput126"
						placeholder="Adresse"
						value={ addresse }
						onChange={({ target }) => setData({ ...data, 'addresse':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
					 	required
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						id="exampleInput126"
						placeholder="Nationalite"
						value={ nationalite }
						onChange={({ target }) => setData({ ...data, 'nationalite':target.value})}
					/>
				</div>
				<button onClick={() => setForm(1)} className="ml-auto flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >
					Suivant
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
						<path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
					</svg>
				</button>
			</form>
		</motion.div>
		</AnimatePresence>
	);
};

export default FormOne;
