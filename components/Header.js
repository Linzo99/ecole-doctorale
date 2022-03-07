import { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
      setScrolled( window.pageYOffset > 10 ? true : false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    },[])


    return(
        <header className={`w-full bg-primary ${scrolled ? 'shadow-md z-10': 'z-0'}  transition duration-200 sticky top-0 h-[100px] `}>
          <div className="container mx-auto p-3 px-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="w-[60px] lg:h-[80px] lg:w-[80px] h-[60px] bg-logo bg-contain bg-no-repeat"> </div>
              <div className="text-white text-md lg:text-2xl uppercase font-bold">
                <p>Ecole Superieure</p>
                <p>Polytechnique</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:hidden text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <ul  className="hidden lg:flex items-center space-x-5 text-md text-white text-sm whitespace-nowrap">
              <li className="hover:scale-105 hover:font-bold cursor-pointer transition duration-100">Téléchargez le guide étudiant</li>
              <li className="hover:scale-105 hover:font-bold cursor-pointer transition duration-100">Demande Admission</li>
              <li className="hover:scale-105 hover:font-bold cursor-pointer transition duration-100">Connexion</li>
            </ul>
          </div>
        </header>
    )
}

export default Header