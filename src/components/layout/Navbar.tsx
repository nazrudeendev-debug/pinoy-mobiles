import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Smartphone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brands } from "@/data/brands";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBrands, setShowBrands] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Pinoy<span className="text-primary">Mobiles</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/new-phones">
              <Button variant="ghost" className="text-sm font-medium">
                New Phones
              </Button>
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowBrands(true)}
              onMouseLeave={() => setShowBrands(false)}
            >
              <Link to="/brands">
                <Button variant="ghost" className="text-sm font-medium">
                  Brands <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              
              {showBrands && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-elevated p-4 animate-fade-in">
                  <div className="grid grid-cols-2 gap-2">
                    {brands.slice(0, 8).map((brand) => (
                      <Link
                        key={brand.id}
                        to={`/brands/${brand.slug}`}
                        className="px-3 py-2 text-sm hover:bg-accent rounded-lg transition-colors"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                  <Link to="/brands" className="block mt-3 pt-3 border-t border-border">
                    <Button variant="ghost" size="sm" className="w-full text-primary">
                      View All Brands
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/compare">
              <Button variant="ghost" className="text-sm font-medium">
                Compare
              </Button>
            </Link>
            
            <Link to="/news">
              <Button variant="ghost" className="text-sm font-medium">
                News
              </Button>
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search phones, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-surface border-border"
              />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search phones, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-surface"
                />
              </div>
            </form>
            
            <nav className="flex flex-col gap-1">
              <Link to="/new-phones" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  New Phones
                </Button>
              </Link>
              <Link to="/brands" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Brands
                </Button>
              </Link>
              <Link to="/compare" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Compare
                </Button>
              </Link>
              <Link to="/news" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  News
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
