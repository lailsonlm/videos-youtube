import React, { useEffect, useState } from "react";
import { api } from "./services/api";
import './app.css'

type AdressInfo = {
  logradouro: string;
  localidade: string;
  bairro: string;
  uf: string;
}

function App() {
  const [adress, setAdress] = useState<AdressInfo>()
  const [zipCode, setZipCode] = useState<string>()
  const [number, setNumber] = useState<string>()
  const validateZipCode = zipCode?.length === 8

  useEffect(() => {
    if(!validateZipCode) {
      setAdress({
        logradouro: '',
        localidade: '',
        bairro: '',
        uf: '',
      })

      setNumber('')
    }
  }, [validateZipCode])


  function searchAdress() {
    if(validateZipCode) {
      api.get(`${zipCode}/json/`)
      .then((response) => {
        if(response.data.erro) {
          alert('CEP não encontrado')
        }
        setAdress(response.data)
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <main>
      <h1 className="title">Consultar Endereço</h1>
      <form>
        <label htmlFor="zipCode">CEP</label>
        <div className='zipCode'>
          <input 
            type="number" 
            id="zipCode" 
            value={zipCode} 
            onChange={(event => setZipCode(event.target.value))}
          />
          {validateZipCode ?
            <button 
              type='button' 
              onClick={searchAdress}
            >
              Buscar Endereço
            </button>
          :
            <button 
              type='button' 
              onClick={searchAdress}
              disabled
            >
              Buscar Endereço
            </button>
          }
        </div>

        <label htmlFor="street">Endereço</label>
        <input 
          type="text" 
          id="street" 
          value={adress?.logradouro}
        />

        <label htmlFor="number">Numero</label>
        <input 
          type="text" 
          id="number" 
          value={number} 
          onChange={(event => setNumber(event.target.value))}
        />

        <label htmlFor="city">Cidade</label>
        <input 
          type="text"
          id="city"
          value={adress?.localidade}
        />

        <label htmlFor="district">Bairro</label>
        <input 
          type="text" 
          id="district"
          value={adress?.bairro}
        />

        <label htmlFor="state">Estado</label>
        <input 
          type="text" 
          id="state"
          value={adress?.uf}
        />
      </form>
    </main>
  );
}

export default App;
