import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BrandCard from "@/components/cards/BrandCard";
import { brands } from "@/data/brands";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const BrandsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredBrands = useMemo(() => {
    let result = brands;
    
    if (searchQuery) {
      result = result.filter(brand => 
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedLetter) {
      result = result.filter(brand => 
        brand.name.charAt(0).toUpperCase() === selectedLetter
      );
    }
    
    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const availableLetters = useMemo(() => {
    return new Set(brands.map(brand => brand.name.charAt(0).toUpperCase()));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[{ label: "All Brands" }]} />
        
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">All Mobile Brands</h1>
          <p className="text-muted-foreground">Browse phones from your favorite manufacturers</p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Alphabet Filter */}
          <div className="flex flex-wrap gap-1">
            <Button
              variant={selectedLetter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLetter(null)}
            >
              All
            </Button>
            {alphabet.map(letter => (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLetter(letter)}
                disabled={!availableLetters.has(letter)}
                className="w-9"
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>

        {/* Brands Grid */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredBrands.map((brand, index) => (
              <div key={brand.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No brands found matching your search.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BrandsPage;
