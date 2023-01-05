import Category from '../models/category.js';
import slugify from 'slugify';

export const create = async ( req, res ) =>
{
  try
  {
    const { name } = req.body;
    if ( !name.trim() )
    {
      return res.json( { error: "Name is required" } );
    }
    const existingCategory = await Category.findOne( { name } );
    if(existingCategory){
      return res.json()
    }
  }
  catch ( err )
  {
    console.log( err );
    return res.status( 400 ).json( err );
  }
};