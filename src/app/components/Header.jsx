import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return(
        <div className="fixed bg-black grid grid-cols-2 gap-x-96 align-center w-full py-5 px-10 rounded-t-xl text-white">
            <Image width={10} height={10} className="w-10 h-10 border-2 border-white rounded-3xl cursor-pointer" src="/favicon.ico" alt="nextjs"/>
            <nav>
                <ul className="grid grid-cols-3 items-center">
                    <li><Link href="/Clientes">Clients</Link></li>
                    <li><Link href="/Clientes/cadastro">ClientList</Link></li>
                    <li><Link href="/Clientes/cadastro/">ClienteForm</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;