import { Link } from "react-router-dom";
import { Smartphone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Pinoy<span className="text-primary">Mobiles</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for mobile phone reviews, comparisons, and the latest tech news in the Philippines.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/new-phones" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  New Phones
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Brands
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compare Phones
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/brands/samsung" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Samsung Phones
                </Link>
              </li>
              <li>
                <Link to="/brands/apple" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  iPhone
                </Link>
              </li>
              <li>
                <Link to="/brands/xiaomi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Xiaomi Phones
                </Link>
              </li>
              <li>
                <Link to="/brands/oppo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  OPPO Phones
                </Link>
              </li>
              <li>
                <Link to="/brands/vivo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vivo Phones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: info@pinoymobiles.ph
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +63 2 1234 5678
              </li>
              <li className="text-sm text-muted-foreground">
                Location: Metro Manila, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PinoyMobiles. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
