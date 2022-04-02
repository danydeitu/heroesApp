import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeroeCard } from '../components/HeroeCard';
import { useForm } from '../hooks/useForm';
import { getHeroesBySearch } from '../selectors/getHeroesBySearch';

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  })

  const [{ keyword }, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  })

  const resultado = 
  useMemo(() => getHeroesBySearch(searchParams.get('keyword')), [searchParams])


  const handleSearch = (e) => {

    e.preventDefault();

    setSearchParams({
      keyword
    })

  }

  return (
    <div className='row'>
      <div className='col-3'>
        <h4>Búsqueda</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder='Buscá tu héroe'
            className='form-control'
            name='keyword'
            value={keyword}
            onChange={handleInputChange}

          />
        </form>
      </div>
      <div className='col-9'>
        <h4>Resultado</h4>
        <hr/>
        <div className="row animate__animated animate__fadeIn">

          {
            searchParams.get('keyword') === "" && 
            <div className='alert alert-info'>
              Buscar héroe
            </div>
          }
          {
            searchParams.get('keyword') !== "" && resultado.length === 0 &&
            <div className='alert alert-danger'>
              No se encontraron resultados
            </div>
          }
          {
             resultado.map(heroe => (
              <HeroeCard
                key={heroe.id}
                {...heroe}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
