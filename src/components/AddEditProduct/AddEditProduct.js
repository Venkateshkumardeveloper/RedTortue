// // 

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// export default function AddEditProduct({ products, setProducts }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [product, setProduct] = useState({
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: ''
//   });

//   useEffect(() => {
//     if (location.state && location.state.product) {
//       setProduct(location.state.product);
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (location.state && location.state.product) {
//       setProducts(products.map(p => p.name === product.name ? product : p));
//     } else {
//       setProducts([...products, product]);
//     }
//     navigate('/products');
//   };

//   return (
//     <div className="max-w-lg mx-auto my-10">
//       <h2 className="text-2xl font-semibold mb-6">{product.name ? 'Edit Product' : 'Add Product'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="name">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={product.name}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="price">Price</label>
//           <input
//             type="text"
//             name="price"
//             id="price"
//             value={product.price}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="discount">Discount</label>
//           <input
//             type="text"
//             name="discount"
//             id="discount"
//             value={product.discount}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="size">Size</label>
//           <input
//             type="text"
//             name="size"
//             id="size"
//             value={product.size}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="stock">Stock</label>
//           <input
//             type="number"
//             name="stock"
//             id="stock"
//             value={product.stock}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="image">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             value={product.image}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {product.name ? 'Update Product' : 'Add Product'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPen, FaTrash, FaPlus } from 'react-icons/fa';
// import * as XLSX from 'xlsx';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';

// const products = [
//   { name: 'T-Shirt', price: '₹1000', discount: '10%', size: 'M', stock: 50, image: shirtImage, category: 'Clothing', description: 'Comfortable cotton T-shirt' },
//   { name: 'Casual Shirt', price: '₹1200', discount: '15%', size: 'L', stock: 30, image: Shirt2, category: 'Clothing', description: 'Stylish casual shirt' },
//   { name: 'Formal Shirt', price: '₹1500', discount: '20%', size: 'S', stock: 20, image: Shirt3, category: 'Clothing', description: 'Elegant formal shirt' },
//   { name: 'Denim Jacket', price: '₹2500', discount: '25%', size: 'XL', stock: 10, image: Shirt4, category: 'Clothing', description: 'Trendy denim jacket' },
//   { name: 'Hoodie', price: '₹2000', discount: '30%', size: 'M', stock: 5, image: Shirt5, category: 'Clothing', description: 'Warm and cozy hoodie' },
//   { name: 'Polo Shirt', price: '₹800', discount: '35%', size: 'L', stock: 15, image: Shirt6, category: 'Clothing', description: 'Classic polo shirt' },
//   { name: 'Jeans', price: '₹1800', discount: '40%', size: 'S', stock: 25, image: jeans, category: 'Clothing', description: 'Comfortable jeans' },
//   { name: 'Sweatshirt', price: '₹1500', discount: '45%', size: 'XL', stock: 35, image: sweatshirt, category: 'Clothing', description: 'Casual sweatshirt' },
// ];

// export default function AddEditProduct({ initialProduct }) {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(initialProduct || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';

// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: ''
//   };

//   const [product, setProduct] = useState(initialProduct);

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Tops' },
  { id: 2, name: 'Bottoms' },
  { id: 3, name: 'Accessories' },
  // Add more categories as needed
];
export default function AddEditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialProduct = location.state?.product || {
    name: '',
    price: '',
    discount: '',
    size: '',
    stock: '',
    image: '',
    category: '',
    description: ''
  };

  const [product, setProduct] = useState(initialProduct);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));


  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    // Handle save functionality here (e.g., updating the product list)
    console.log('Product saved:', product);
    navigate('/products');
  };

  const handleCancel = () => {
    navigate('/products');
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
            {initialProduct ? 'Edit Product' : 'Add Product'}
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                        Discount
                      </label>
                      <input
                        type="text"
                        name="discount"
                        id="discount"
                        value={product.discount}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                        Size
                      </label>
                      <input
                        type="text"
                        name="size"
                        id="size"
                        value={product.size}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                        Stock
                      </label>
                      <input
                        type="text"
                        name="stock"
                        id="stock"
                        value={product.stock}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={product.image}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        value={product.category}
                        onChange={handleChange}
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      />
                    </div> */}
                     
                    <div className="col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        value={product.description}
                        onChange={handleChange}
                        rows="3"
                        // className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"

                      ></textarea>
                    </div>
                    
                  </div>
                  <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <Combobox
              as="div"
              value={selectedCategory}

              onChange={(category) => {
                setQuery('');
                setSelectedCategory(category);
             
              }}
            >
              <div className="relative mt-2">
                <ComboboxInput

                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(category) => category?.name}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">

                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />

                </ComboboxButton>

                {filteredCategories.length > 0 && (
                  <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                    {filteredCategories.map((category) => (
                      <ComboboxOption
                        key={category.id}
                        value={category}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                        <span className="block truncate group-data-[selected]:font-semibold">{category.name}</span>

                        <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />

                        </span>
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                )}
              </div>
            </Combobox>
          </div>
        
                </div>
                
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}






// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const categories = [
//   { id: 1, name: 'Tops' },
//   { id: 2, name: 'Bottoms' },
//   { id: 3, name: 'Accessories' },
//   // Add more categories as needed
// ];

// export default function AddEditProduct() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialProduct = location.state?.product || {
//     name: '',
//     price: '',
//     discount: '',
//     size: '',
//     sizeType: '',
//     stock: '',
//     image: '',
//     category: '',
//     description: '',
//     gender: ''
//   };

//   const [product, setProduct] = useState(initialProduct);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) => category.name.toLowerCase().includes(query.toLowerCase()));

//   useEffect(() => {
//     setProduct(initialProduct);
//   }, [initialProduct]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSave = () => {
//     // Handle save functionality here (e.g., updating the product list)
//     console.log('Product saved:', product);
//     navigate('/products');
//   };

//   const handleCancel = () => {
//     navigate('/products');
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             {initialProduct ? 'Edit Product' : 'Add Product'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             {initialProduct ? 'Edit the product details below.' : 'Fill in the product details below.'}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <form>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Product Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
//                         Discount
//                       </label>
//                       <input
//                         type="text"
//                         name="discount"
//                         id="discount"
//                         value={product.discount}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="size" className="block text-sm font-medium text-gray-700">
//                         Size
//                       </label>
//                       <input
//                         type="text"
//                         name="size"
//                         id="size"
//                         value={product.size}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="sizeType" className="block text-sm font-medium text-gray-700">
//                         Size Type
//                       </label>
//                       <input
//                         type="text"
//                         name="sizeType"
//                         id="sizeType"
//                         value={product.sizeType}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
//                         Stock
//                       </label>
//                       <input
//                         type="text"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6 sm:col-span-3">
//                       <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image URL
//                       </label>
//                       <input
//                         type="text"
//                         name="image"
//                         id="image"
//                         value={product.image}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         name="description"
//                         id="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         rows="3"
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       ></textarea>
//                     </div>
//                     <div className="col-span-6">
//                       <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//                         Gender
//                       </label>
//                       <input
//                         type="text"
//                         name="gender"
//                         id="gender"
//                         value={product.gender}
//                         onChange={handleChange}
//                         className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
//                       />
//                     </div>
//                     <div className="col-span-6">
//                       <label className="block text-sm font-medium text-gray-700">Category</label>
//                       <Combobox
//                         as="div"
//                         value={selectedCategory}
//                         onChange={(category) => {
//                           setQuery('');
//                           setSelectedCategory(category);
//                           setProduct({ ...product, category: category?.name });
//                         }}
//                       >
//                         <div className="relative mt-2">
//                           <ComboboxInput
//                             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             onChange={(event) => setQuery(event.target.value)}
//                             displayValue={(category) => category?.name}
//                           />
//                           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                           </ComboboxButton>
//                           {filteredCategories.length > 0 && (
//                             <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                               {filteredCategories.map((category) => (
//                                 <ComboboxOption
//                                   key={category.id}
//                                   value={category}
//                                   className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                                 >
//                                   <span className="block truncate group-data-[selected]:font-semibold">{category.name}</span>
//                                   <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                   </span>
//                                 </ComboboxOption>
//                               ))}
//                             </ComboboxOptions>
//                           )}
//                         </div>
//                       </Combobox>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="button"
//                       onClick={handleCancel}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleSave}
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
