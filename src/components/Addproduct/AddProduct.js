// import React from 'react';

// const AddProduct = () => {
//   return (
//     <div className="p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex space-x-2 mt-1">
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XS</button>
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">S</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">M</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">L</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XL</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XXL</button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex space-x-2 mt-1">
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">Men</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Woman</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Unisex</button>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <div className="flex space-x-2">
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <button className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                   <span className="text-gray-500">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//             </select>
//             <button className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


// import React from 'react';

// const AddProduct = () => {
//   return (
//     <div className="p-4 sm:p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XS</button>
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">S</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">M</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">L</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XL</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XXL</button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">Men</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Woman</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Unisex</button>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <div className="flex flex-wrap space-x-2">
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <img src="https://via.placeholder.com/100" className="h-20 w-20 rounded-md" alt="Product" />
//                 <button className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                   <span className="text-gray-500">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//             </select>
//             <button className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


// import React, { useState } from 'react';

// const AddProduct = () => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const fileURLs = files.map(file => URL.createObjectURL(file));
//     setImages(prevImages => [...prevImages, ...fileURLs]);
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XS</button>
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">S</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">M</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">L</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XL</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">XXL</button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button className="px-3 py-2 bg-green-500 text-white rounded-md">Men</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Woman</button>
//               <button className="px-3 py-2 bg-gray-200 rounded-md">Unisex</button>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <input type="file" multiple onChange={handleImageUpload} className="hidden" id="file-input" />
//               <label htmlFor="file-input" className="cursor-pointer">
//                 <div className="flex flex-wrap space-x-2">
//                   {images.map((image, index) => (
//                     <img key={index} src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
//                   ))}
//                   <button type="button" className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                     <span className="text-gray-500">+</span>
//                   </button>
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//             </select>
//             <button className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


// import React, { useState } from 'react';

// const AddProduct = () => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const fileURLs = files.map(file => URL.createObjectURL(file));
//     setImages(prevImages => [...prevImages, ...fileURLs]);
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XS</button>
//               <button type="button" className="px-3 py-2 bg-green-500 text-white rounded-md">S</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">M</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">L</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XL</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XXL</button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button type="button" className="px-3 py-2 bg-green-500 text-white rounded-md">Men</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">Woman</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">Unisex</button>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <input type="file" multiple onChange={handleImageUpload} className="hidden" id="file-input" />
//               <label htmlFor="file-input" className="cursor-pointer">
//                 <div className="flex flex-wrap space-x-2">
//                   {images.map((image, index) => (
//                     <img key={index} src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
//                   ))}
//                   <div className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                     <span className="text-gray-500">+</span>
//                   </div>
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//             </select>
//             <button type="button" className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button type="button" className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2

// const AddProduct = () => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const fileURLs = files.map((file) => URL.createObjectURL(file));
//     setImages((prevImages) => [...prevImages, ...fileURLs]);
//   };

//   const handleImageDelete = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XS</button>
//               <button type="button" className="px-3 py-2 bg-green-500 text-white rounded-md">S</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">M</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">L</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XL</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">XXL</button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               <button type="button" className="px-3 py-2 bg-green-500 text-white rounded-md">Men</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">Woman</button>
//               <button type="button" className="px-3 py-2 bg-gray-200 rounded-md">Unisex</button>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <input type="file" multiple onChange={handleImageUpload} className="hidden" id="file-input" />
//               <label htmlFor="file-input" className="cursor-pointer">
//                 <div className="flex flex-wrap space-x-2">
//                   {images.map((image, index) => (
//                     <div key={index} className="relative">
//                       <img src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
//                       <button
//                         type="button"
//                         className="absolute -top-1 -right-2  bg-red-500 text-white rounded-full"
//                         onClick={() => handleImageDelete(index)}
//                       >
//                         < XMarkIcon className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ))}
//                   <div className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                     <span className="text-gray-500">+</span>
//                   </div>
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//               <option>TShrit</option>

//             </select>
//             <button type="button" className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button type="button" className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// const AddProduct = () => {
//   const [images, setImages] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedGender, setSelectedGender] = useState(null);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const fileURLs = files.map((file) => URL.createObjectURL(file));
//     setImages((prevImages) => [...prevImages, ...fileURLs]);
//   };

//   const handleImageDelete = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const toggleSize = (size) => {
//     setSelectedSizes((prevSizes) =>
//       prevSizes.includes(size)
//         ? prevSizes.filter((s) => s !== size)
//         : [...prevSizes, size]
//     );
//   };

//   const selectGender = (gender) => {
//     setSelectedGender(gender);
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Add New Product</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name Product</label>
//             <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description Product</label>
//             <textarea className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"></textarea>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Size</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   className={`px-3 py-2 rounded-md ${
//                     selectedSizes.includes(size) ? 'bg-green-500 text-white' : 'bg-gray-200'
//                   }`}
//                   onClick={() => toggleSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="flex flex-wrap space-x-2 mt-1">
//               {['Men', 'Women', 'Unisex'].map((gender) => (
//                 <button
//                   key={gender}
//                   type="button"
//                   className={`px-3 py-2 rounded-md ${
//                     selectedGender === gender ? 'bg-green-500 text-white' : 'bg-gray-200'
//                   }`}
//                   onClick={() => selectGender(gender)}
//                 >
//                   {gender}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Pricing And Stock</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Base Pricing" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Stock" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
//               <input type="text" placeholder="Discount" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//               <input type="text" placeholder="Discount Type" className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Img</label>
//             <div className="mt-1">
//               <input type="file" multiple onChange={handleImageUpload} className="hidden" id="file-input" />
//               <label htmlFor="file-input" className="cursor-pointer">
//                 <div className="flex flex-wrap space-x-2">
//                   {images.map((image, index) => (
//                     <div key={index} className="relative">
//                       <img src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
//                       <button
//                         type="button"
//                         className="absolute -top-1 -right-2  bg-red-500 text-white rounded-full"
//                         onClick={() => handleImageDelete(index)}
//                       >
//                         <XMarkIcon className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ))}
//                   <div className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
//                     <span className="text-gray-500">+</span>
//                   </div>
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
//               <option>Jacket</option>
//             </select>
//             <button type="button" className="mt-2 px-3 py-2 bg-green-500 text-white rounded-md">Add Category</button>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button type="button" className="px-6 py-3 bg-green-500 text-white rounded-md">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Jacket');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...fileURLs]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const selectGender = (gender) => {
    setSelectedGender(gender);
  };

  const toggleColor = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const description = formData.get('description');
    const basePrice = formData.get('basePrice');
    const stock = formData.get('stock');
    const discount = formData.get('discount');
    const discountType = formData.get('discountType');
    const sizeStock = selectedSizes.reduce((acc, size) => {
      acc[size] = formData.get(`stock-${size}`);
      return acc;
    }, {});

    if (
      !name ||
      !description ||
      !basePrice ||
      !stock ||
      !discount ||
      !discountType ||
      !selectedSizes.length ||
      !selectedGender ||
      !selectedColors.length ||
      !selectedCategory ||
      !selectedSubcategory ||
      images.length === 0
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    const product = {
      name,
      description,
      basePrice,
      stock,
      discount,
      discountType,
      sizes: selectedSizes,
      sizeStock,
      gender: selectedGender,
      colors: selectedColors,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      images,
    };

    setProductDetails(product);
    alert('Product successfully added!');
  };

  return (
    // <div className="p-4 ml-72  sm:p-6  bg-white shadow-md rounded-md">
    <div className="p-4 ml-10 lg:ml-72 sm:p-6 bg-white shadow rounded-md">

      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              name="description"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Size and Stock</label>
            <div className="flex flex-wrap space-x-2 mt-1">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-md ${
                      selectedSizes.includes(size) ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                  {selectedSizes.includes(size) && (
                    <input
                      type="number"
                      name={`stock-${size}`}
                      required
                      placeholder="Stock"
                      className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex flex-wrap space-x-2 mt-1">
              {['Men', 'Women', 'Unisex'].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  className={`px-3 py-2 rounded-md ${
                    selectedGender === gender ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => selectGender(gender)}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pricing and Stock</label>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
              <input
                type="number"
                name="basePrice"
                required
                placeholder="Base Pricing"
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                name="stock"
                required
                placeholder="Total Stock"
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Discount</label>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-1">
              <input
                type="number"
                name="discount"
                required
                placeholder="Discount"
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="discountType"
                required
                placeholder="Discount Type"
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Colors</label>
            <div className="flex flex-wrap space-x-2 mt-1">
              {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`px-3 py-2 rounded-md ${
                    selectedColors.includes(color) ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => toggleColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Images</label>
            <div className="mt-1">
              <input type="file" multiple onChange={handleImageUpload} className="hidden" id="file-input" />
              <label htmlFor="file-input" className="cursor-pointer">
                <div className="flex flex-wrap space-x-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
                      <button
                        type="button"
                        className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full"
                        onClick={() => handleImageDelete(index)}
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <div className="h-20 w-20 flex items-center justify-center bg-gray-200 rounded-md">
                    <span className="text-gray-500">+</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Jacket">Jacket</option>
              <option value="TShirt">TShirt</option>
            </select>
            
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subcategory</label>
            <input
              type="text"
              name="subcategory"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-3 bg-custom-red text-white rounded-md">
            Add Product
          </button>
        </div>
      </form>
      {productDetails && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Added Product Details</h3>
          <p><strong>Name:</strong> {productDetails.name}</p>
          <p><strong>Description:</strong> {productDetails.description}</p>
          <p><strong>Base Price:</strong> {productDetails.basePrice}</p>
          <p><strong>Total Stock:</strong> {productDetails.stock}</p>
          <p><strong>Discount:</strong> {productDetails.discount}</p>
          <p><strong>Discount Type:</strong> {productDetails.discountType}</p>
          <p><strong>Sizes:</strong> {productDetails.sizes.join(', ')}</p>
          <p><strong>Size Stock:</strong> {JSON.stringify(productDetails.sizeStock)}</p>
          <p><strong>Gender:</strong> {productDetails.gender}</p>
          <p><strong>Colors:</strong> {productDetails.colors.join(', ')}</p>
          <p><strong>Category:</strong> {productDetails.category}</p>
          <p><strong>Subcategory:</strong> {productDetails.subcategory}</p>
          <div className="flex flex-wrap space-x-2 mt-2">
            {productDetails.images.map((image, index) => (
              <img key={index} src={image} className="h-20 w-20 rounded-md" alt={`Product ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
