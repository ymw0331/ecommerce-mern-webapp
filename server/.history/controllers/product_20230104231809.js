import Product from '../models/product.js';

export const create = async ( req, res ) =>
{
  try
  {
(req.body)
  } catch ( err )
  {
    console.log( err );
    return res.status( 400 ).json( err.message );
  }
};

