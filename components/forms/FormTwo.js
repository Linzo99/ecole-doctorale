import { motion, AnimatePresence } from "framer-motion"

const FormTwo = ({ setForm, data:donnee }) => {
	const [data, setData] = donnee
	const {diplome, specialite, universite, date_obtention, mention} = data
	return (
		<AnimatePresence>
		<motion.div key={1} 
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
			className="block  w-[500px] rounded-md pt-8 bg-white p-6 shadow-lg">
			<form className="flex flex-col">
				<div className="form-group mb-6">
					<select value={ diplome } onChange={({ target }) => setData({...data, 'diplome':target.value})} placeholder="Diplome d'acces" className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none">
						<option value="" disabled>Diplome d'access</option>
						<option value="master2">Master2</option>
						<option value="dea">Diplome d'études Appliques</option>
					</select>
				</div>
				<div className="form-group mb-6">
					<select value={ specialite } onChange={({ target }) => setData({...data, 'specialite':target.value})} className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none">
						<option value="" disabled>Specialite</option>
						<option value="math">Mathematiques</option>
						<option value="info">Informatique</option>
						<option value="ter">Telecommunications</option>
					</select>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						id="exampleInput126"
						placeholder="Universite"
						value={ universite }
						onChange={({ target }) => setData({ ...data, 'universite':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						type="text"
						onFocus={(e) => e.target.type="date"}
						onBlur={(e) => e.target.type="text"}
						placeholder="Date d'obtention diplome"
						value={ date_obtention }
						onChange={({ target }) => setData({ ...data, 'date_obtention':target.value})}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
						placeholder="Mention"
						value={ mention }
						onChange={({ target }) => setData({ ...data, 'mention':target.value})}
					/>
				</div>
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setForm(0)}  className="flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >
                        Precedent
                    </button>
                    <button onClick={() => setForm(2)} className="ml-auto flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >
                        Suivant
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
			</form>
		</motion.div>
		</AnimatePresence>
	);
};

export default FormTwo;