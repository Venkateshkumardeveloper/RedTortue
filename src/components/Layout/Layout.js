// // import React from 'react';

// // const Layout = ({ children }) => {
// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       <aside className="w-64 bg-white p-6">
// //         <div className="text-xl font-bold">SalesSync</div>
// //         <nav className="mt-10">
// //           <ul>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Overview</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Analytics</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Product</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Sales</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Payment</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Refunds</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Invoice</a></li>
// //             <li className="mb-4"><a href="#" className="text-gray-700">Returns</a></li>
// //           </ul>
// //         </nav>
// //       </aside>
// //       <main className="flex-1 p-6">
// //         {children}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Layout;


// import React, { useState } from 'react';

// const Layout = ({ children }) => {
//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {isSidebarVisible && (
//         <aside className="w-64 bg-white p-6 flex flex-col justify-between">
//           <div>
//             <div className="text-xl font-bold">SalesSync</div>
//             <nav className="mt-10">
//               <ul>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Overview</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Analytics</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Product</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Sales</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Payment</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Refunds</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Invoice</a></li>
//                 <li className="mb-4"><a href="#" className="text-gray-700">Returns</a></li>
//               </ul>
//             </nav>
//           </div>
//           <button className="px-4 py-2 bg-green-500 text-white rounded-md mt-4" onClick={toggleSidebar}>Hide Sidebar</button>
//         </aside>
//       )}
//       <main className={`flex-1 p-6 ${isSidebarVisible ? 'ml-4' : ''}`}>
//         {children}
//         {!isSidebarVisible && (
//           <button className="fixed bottom-4 left-4 px-4 py-2 bg-green-500 text-white rounded-md" onClick={toggleSidebar}>Show Sidebar</button>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Layout;


// import React, { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const Layout = ({ children }) => {
//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {isSidebarVisible && (
//         <aside className="w-64 bg-white p-6 flex flex-col ">
//           <div className="flex items-center justify-between">
//             <div className="text-xl font-bold">SalesSync</div>
//             <button className="text-gray-700" onClick={toggleSidebar}>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <nav className="mt-10">
//             <ul>
//               <li className="mb-4"><a href="overview" className="text-gray-700">Overview</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Analytics</a></li>
//               <li className="mb-4"><a href="/" className="text-gray-700">Product</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Sales</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Payment</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Refunds</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Invoice</a></li>
//               <li className="mb-4"><a href="#" className="text-gray-700">Returns</a></li>
//             </ul>
//           </nav>
//         </aside>
//       )}
//      <main className={`relative flex-1 p-6 ${isSidebarVisible ? 'ml-4' : ''}`}>
//   <div className="flex items-center justify-between">
//     {!isSidebarVisible && (
//       <button 
//         className="absolute -top-14 left-11" 
//         onClick={toggleSidebar}
//       >
//         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//       </button>
//     )}
//     <div className="flex-1">{children}</div>
//   </div>
// </main>

//     </div>
//   );
// };

// export default Layout;
