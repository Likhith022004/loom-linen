import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-20 border-t border-surface-container-high text-on-surface-variant font-body text-base">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link to="/" className="font-display text-3xl md:text-[48px] font-bold text-primary tracking-tight">
            Dudi's
          </Link>
          <p className="max-w-xs text-sm">
            Elevating everyday basics with bespoke, handcrafted embroidery.
          </p>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display text-lg text-on-background mb-2">Shop</h4>
          <Link to="/shop" className="hover:text-primary transition-colors duration-200">Shop All</Link>
          <Link to="/couples" className="hover:text-primary transition-colors duration-200">For Couples</Link>
          <Link to="/custom" className="hover:text-primary transition-colors duration-200">Custom Order</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display text-lg text-on-background mb-2">Support</h4>
          <a href="#" className="hover:text-primary transition-colors duration-200">Shipping & Returns</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display text-lg text-on-background mb-2">Connect</h4>
          <a href="#" className="hover:text-primary transition-colors duration-200">Newsletter</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Pinterest</a>
        </div>
      </div>

      <div className="px-5 md:px-16 max-w-[1280px] mx-auto mt-12 pt-8 border-t border-surface-container-high/50 text-center md:text-left text-sm opacity-80">
        &copy; 2024 Dudi's Custom Embroidery. Handcrafted with care.
      </div>
    </footer>
  );
}
