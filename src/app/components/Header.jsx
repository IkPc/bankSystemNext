import Link from 'next/link';
import { useState } from 'react';

const Header = ({isCreating, setIsCreating}) => {

    const handleClick = (contentNumber) => {
        setIsCreating((prev) => (prev === contentNumber ? 0 : contentNumber));
    }
    return(
        <div className="fixed bg-black grid grid-cols-2 gap-x-96 align-center w-full py-5 px-10 rounded-t-xl text-white">
            <img className="w-10 h-10 border-2 border-white rounded-3xl cursor-pointer" src="./favicon.ico" alt="nextjs"/>
            <ul className="grid grid-cols-3 items-center">
                {/* <li><button onClick={() => handleClick(1)}>Clientes</button></li>
                <li><button onClick={() => handleClick(2)}>listaCli</button></li>
                <li><button onClick={() => handleClick(3)}>pag</button></li> */}
                <li><Link href="/clientes">Clients</Link></li>
                <li><Link href="/clientes/cadastro">ClientList</Link></li>
                <li><Link href="/clientes/cadastro/">ClienteForm</Link></li>
            </ul>
        </div>
    )
}

export default Header;