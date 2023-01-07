import Jumbotron from '../components/cards/Jumbotron';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Prod

export default function CategoryView ()
{
  //state
  const [ products, setProducts ] = useState( [] );
  const [ category, setCategory ] = useState( {} );

  //hooks
  const navigate = useNavigate();
  const params = useParams();

  useEffect( () =>
  {
    if ( params?.slug ) loadPoductsByCategory();
  }, [ params?.slug ] );

  const loadPoductsByCategory = async () =>
  {
    try
    {
      const { data } = await axios.get( `/products-by-category/${ params.slug }` );

      setCategory( data.category );
      setProducts( data.products );
      // console.log( data );
    } catch ( error )
    {
      console.log( error );
    }

  };
  // console.log( "params =>", params );

  return ( <>

    <Jumbotron
      title={ category?.name }
      subTitle={ `${ products.length } products found in "${ category.name }"` }
    />




  </> );
}