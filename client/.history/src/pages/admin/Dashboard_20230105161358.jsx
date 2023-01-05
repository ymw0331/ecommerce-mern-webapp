import { useAuth } from '../../context/auth';
import Jumbotron from '../../components/cards/Jumbotron';


export default function AdminDashboard ()
{

  //context
  const [ auth, setAuth ] = useAuth();

  return (
    <>
      <Jumbotron
        title={ `Hello ${ auth?.user?.name }` }
        subTitle="Admin Dashboard"
      />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>Sidebar</div>
          <div className='col-md-9'>Sidebar</div>

        </div>

      </div>

      {/* <pre>{ JSON.stringify( auth, null, 4 ) }</pre> */ }
    </>
  );
}