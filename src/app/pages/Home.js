// import Image from "next/image";
// import Header from '../components/Header'
// import { useState } from "react";
// import ListaClientes from "../components/ListaClientes";
// import ClienteForm from './ClienteForm'
// import Clientes from './Clientes'

// export default function Homepage() {
//   const [isCreating, setIsCreating] = useState(0);

//   return (
//     <div className="mx-auto">
//       <header>
//         <Header isCreating={isCreating} setIsCreating={setIsCreating}/>
//       </header>
//       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//           {isCreating === 1 ?
//             <Clientes /> 
//             :
//             isCreating === 2 ?
//             <ListaClientes />
//             :
//             isCreating === 3 ?
//             <ClienteForm />
//             :
//             <p>Landing page</p>
//           }
//         </main>
//       </div>
//     </div>
//   );
// }