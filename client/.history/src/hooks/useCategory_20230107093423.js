import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCategory ()
{
  const [ categories, setCategories ] = useState( [] );

  useEffect( () =>
  {
    loadCategories();
  }, [] );

  const loadCategories = async () =>
  {
    try {
      const {data} =
      
    } catch (error) {
      
    }
  };



}