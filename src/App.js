// import React from 'react';
// // import ProductPage from './components/ProductsPage/ProductPage';
// import Navigation from './components/Navigation/Navigation';
// import Layout from './components/Layout/Layout';
// import AddProduct from './components/Addproduct/AddProduct';
// import './index.css';
// import {Routes, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       {/* <ProductPage /> */}
//       <Layout>
//         <AddProduct/>
//       </Layout>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';

// function App() {
//   return (
//     <div className="App">
//         <Navigation />
//           <Routes>
//             <Route path="/product" element={<ProductPage />} />
//             <Route path="/" element={<AddProduct />} />
//             <Route path="/overview" element={<Overview />} />

//             {/* Add more routes as needed */}
//           </Routes>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';
// import User from './components/User/User';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login';

// function App() {
//   return (
//     <>    <Routes>
//     <Route path="/" element={<Login/>} />
//     </Routes>
//     <div className="App flex flex-col min-h-screen">
       

//       <Navigation />
//       <main className="flex-grow p-4">
//         <Routes>
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/products" element={<AddProduct />} />
//           <Route path="/overview" element={<Overview />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/dashboard" element={<Dashboard />} />



//         </Routes>
//       </main>
//     </div>
//     </>

//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AddProduct from './components/Addproduct/AddProduct';
import ProductPage from './components/ProductsPage/ProductPage';
import './index.css';
import Overview from './components/Overview/Overview';
import User from './components/User/User';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== '/';

  return (
    <div className="App flex flex-col min-h-screen">
      {showNavigation && <Navigation />}
      <main className="flex-grow p-4 bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<AddProduct />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
