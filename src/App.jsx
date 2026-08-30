import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopAllPage from './pages/ShopAllPage';
import ForCouplesPage from './pages/ForCouplesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomOrderPage from './pages/CustomOrderPage';
import StoryPage from './pages/StoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-on-background font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopAllPage />} />
          <Route path="/couples" element={<ForCouplesPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/custom" element={<CustomOrderPage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
