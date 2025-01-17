"use client"

import React, { useState } from 'react';
import ListaClientes from '../components/ListaClientes';
import FormCliente from '../components/FormCliente';


const Clientes = () => {
  const [clienteEdit, setClienteEdit] = useState(null);


  const handleEdit = (cliente) => {
    setClienteEdit(cliente);
  };


  const handleSave = () => {
    setClienteEdit(null);
  };


  return (
    <div>
      <ListaClientes onEdit={handleEdit} />
      <FormCliente clienteAtual={clienteEdit} onSave={handleSave} />
    </div>
  );
};


export default Clientes;
