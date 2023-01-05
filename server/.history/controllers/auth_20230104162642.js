import User from "../models/user.js";

/

export const register = async ( req, res ) =>
{
  // console.log( req.body );
  try
  {
    const user = await new User( req.body ).save();
    res.json( user ); //send back user information

  } catch ( err )
  {
    console.log( err );
  }
};