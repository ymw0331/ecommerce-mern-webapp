import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Jumbotron from '../components/cards/Jumbotron';

export default function Home ()
{
  const [ products, setProducts ] = useState( [] );

  useEffect( () =>
  {
    loadProducts();
  }, [] );

  const loadProducts = async () =>
  {
    try
    {
      const { data } = await axios.get( `/products` );
      setProducts( data );

    } catch ( error )
    {
      console.log( error );
    }

  };

  const arr = [ ...products ];
  const sortedBySold = arr?.sort( ( a, b ) => ( a.sold < b.sold ? 1 : -1 ) );

  return (
    <div>
      <Jumbotron
        title="Hello World" subTitle='Welcome to React E-Commerce'
      />

      <div className='row'>

        <div className='col-md-6'>
          <h2 className='p-3 mt-2 mb-2 h4 '>New Arrivals</h2>
          { products?.map( p => (
            <div key={ p._id }>
              <p>{ p.name }</p>
              <p>{ moment( p.createdAt ).fromNow() }</p>
              <p>{ p.sold } sold</p>

            </div>
          ) ) }

        </div>
        <div className='col-md-6'>
          <h2>Best Sellers</h2>
          { sortedBySold?.map( p => (
            <div key={ p._id }>
              <p>{ p.name }</p>
              <p>{ moment( p.createdAt ).fromNow() }</p>
              <p>{ p.sold } sold</p>

            </div>
          ) ) }
        </div>
      </div>




    </div>
  );
}

