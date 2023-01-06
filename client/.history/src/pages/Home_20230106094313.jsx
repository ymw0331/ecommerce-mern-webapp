
import { useEffect } from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../context/auth';
import axios from 'axios';

export default function Home ()
{
  const [ auth, setAuth ] = useAuth();
  return (
    <div>
      <Jumbotron
        title="Hello World"
      />
    </div>
  );
}

