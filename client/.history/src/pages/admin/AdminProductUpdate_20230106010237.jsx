/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';
import Jumbotron from '../../components/cards/Jumbotron';
import AdminMenu from '../../components/nav/AdminMenu';
import axios from 'axios';
import { Select } from 'antd';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const { Option } = Select;

export default function AdminProductUpdate ()
{
  //context
  const [ auth, setAuth ] = useAuth();

  //state
  const [ categories, setCategories ] = useState( [] );
  const [ photo, setPhoto ] = useState( "" );
  const [ name, setName ] = useState( "" );
  const [ description, setDescription ] = useState( "" );
  const [ price, setPrice ] = useState( "" );
  const [ category, setCategory ] = useState( "" );
  const [ shipping, setShipping ] = useState( "" );
  const [ quantity, setQuantity ] = useState( "" );
  const [ id, setId ] = useState( "" );

  //hook
  const navigate = useNavigate();
  const params = useParams();

  // console.log( "params =>", params );

  useEffect( () =>
  {
    loadProduct();
  }, [] );

  useEffect( () =>
  {
    loadCategories();
  }, [] );

  const loadCategories = async () =>
  {
    try
    {
      const { data } = await axios.get( "/categories" );
      setCategories( data );
    } catch ( err )
    {
      console.log( err );
    }
  };

  const loadProduct = async () =>
  {
    try
    {
      const { data } = await axios.get( `/product/${ params.slug }` );
      // console.log( "data =>", data );
      setName( data.name );
      setDescription( data.description );
      setPrice( data.price );
      setCategory( data.category._id );
      setShipping( data.shipping );
      setQuantity( data.quantity );
      setId( data._id );
    } catch ( err )
    {
      console.log( err );
    }
  };


  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      const productData = new FormData();
      productData.append( 'photo', photo );
      productData.append( 'name', name );
      productData.append( 'description', description );
      productData.append( 'price', price );
      productData.append( 'category', category );
      productData.append( 'shipping', shipping );
      productData.append( 'quantity', quantity );
      // console.log( [ ...productData ] );\

      const { data } = await axios.post( "/product", productData );
      if ( data?.error )
      {
        toast.error( data.error );
      }
      else
      {
        toast.success( ` "${ data.name }" is created ` );
        navigate( '/dashboard/admin/products' );
      }

    } catch ( err )
    {
      console.log( err );
      toast.error( 'Product create failed. Please try again' );
    }
  };

  return (
    <>
      <Jumbotron
        title={ `Hello ${ auth?.user?.name }` }
        subTitle="Admin Product"
      />

      <div className='container-fluid'>
        <div className='row'>
          {/* Sidebar */ }
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          {/* Content */ }
          <div className='col-md-9'>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>Update Product</div>

            {/* Photo */ }
            { photo && <div className='text-center'>
              <img
                src={ URL.createObjectURL( photo ) }
                alt='product photo'
                className='img img-responsive'
                height="200px" />
            </div> }

            {/* Photo Upload */ }
            <div className='pt-2'>
              <label className='btn btn-outline-secondary col-12 mb-3'>
                { photo ? photo.name : "Upload photo" }

                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={ e => setPhoto( e.target.files[ 0 ] ) }
                  hidden
                >
                </input>
              </label>
            </div>

            {/* Name field */ }
            <input
              type="text"
              className='form-control p-2 mb-2'
              placeholder='Enter name'
              value={ name }
              onChange={ e => setName( e.target.value ) }
            ></input>

            {/* Description field */ }
            <textarea
              type="text"
              className='form-control p-2 mb-3'
              placeholder='Enter description'
              value={ description }
              onChange={ e => setDescription( e.target.value ) }
            ></textarea>

            {/* Price filed */ }
            <input
              type="number"
              className='form-control p-2 mb-2'
              placeholder='Enter price'
              value={ price }
              onChange={ e => setPrice( e.target.value ) }
            ></input>

            {/* Dropdown to select category */ }
            <Select
              showSearch
              bordered={ false }
              size="large"
              className='form-select mb-3'
              placeholder="Choose category"
              onChange={ ( value ) => setCategory( value ) }
            >
              { categories?.map( ( c ) =>
              (
                <Option key={ c._id } value={ c._id }>
                  { c.name }
                </Option>
              ) ) }
            </Select>

            {/* Shipping option */ }
            <Select
              bordered={ false }
              size="large"
              className='form-select mb-3'
              placeholder="Choose shipping"
              onChange={ ( value ) => setShipping( value ) }
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>


            {/* Quantity field */ }
            <input
              type="number"
              min="1"
              className='form-control p-2 mb-2'
              placeholder='Enter quantity'
              value={ quantity }
              onChange={ e => setQuantity( e.target.value ) }
            ></input>
            <button onClick={ handleSubmit } className='btn btn-primary mb-5'>Submit</button>

          </div>
        </div>
      </div>

      {/* <pre>{ JSON.stringify( auth, null, 4 ) }</pre> */ }
    </>
  );
};