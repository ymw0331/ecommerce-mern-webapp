import Product from '../models/product';

export const create = async ( req, res ) =>
{
  try
  {

  } catch ( err )
  {
    console.log( err );
    return res.status( 400 ).json( err.message );
  }
};