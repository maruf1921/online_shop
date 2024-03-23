import './App.css';

// import Navbar from '../Components/Navbar/Navbar';

// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar></Navbar> <Shop />
        </>
      ),
    },
    {
      path: '/mens',
      element: (
        <>
          <Navbar></Navbar>
          <div>
            <ShopCategory category="men" banner={men_banner}/>
          </div>
          <Footer />
        </>
      ),
    },
    {
      path: '/womens',
      element: (
        <>
          <Navbar></Navbar>
          <div>womens</div>
          <Footer />
        </>
      ),
    },
    {
      path: '/kids',
      element: (
        <>
          <Navbar></Navbar>
          <div>kids</div>
          <Footer />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Navbar></Navbar>
          <div>cart</div>
          <Footer />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <Navbar></Navbar>
          <LoginSignup />
          <Footer />
        </>
      ),
    },
    {
      path: '/product',
      element: (
        <>
          <Navbar></Navbar>
          <div>
            <Outlet />
          </div>
          <Footer />
        </>
      ),
      children: [
        {
          path: 'productId',
          element: (
            <>
              <Navbar></Navbar>
              <div>login</div>
              <Footer />
            </>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

/*<BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>*/
