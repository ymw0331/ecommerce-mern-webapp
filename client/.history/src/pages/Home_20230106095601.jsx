import { useState, useEffect } from 'react';
import axios from 'axios';
import Jumbotron from '../components/cards/Jumbotron';

export default function Home ()
{
  const [ products, setProducts ] = useState( [] );

  useEffect( () =>
  {
    laodProducts();
  }, [] );

  const loadProducts = async () =>
  {
    try {
      
    } catch (error) {
      
    }

  };
  return (
    <div>
      <Jumbotron
        title="Hello World"
      />



    </div>
  );
}

