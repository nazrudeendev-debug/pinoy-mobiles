import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SlidersHorizontal, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MobileCard from "@/components/cards/MobileCard";
import Pagination from "@/components/shared/Pagination";
import { getBrandBySlug } from "@/data/brands";
import { getMobilesByBrand } from "@/data/mobiles";

const ITEMS_PER_PAGE = 8;

const BrandDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = getBrandBySlug(slug || "");
  const brandMobiles = getMobilesByBrand(slug || "");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedNetwork, setSelectedNetwork] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");

  const ramOptions = ["4GB", "6GB", "8GB", "12GB", "16GB"];
  const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
  const networkOptions = ["4G", "5G"];

  const filteredMobiles = useMemo(() => {
    let result = brandMobiles;
    
    result = result.filter(mobile => 
      mobile.priceMin >= priceRange[0] && mobile.priceMin <= priceRange[1]
    );
    
    if (selectedRam.length > 0) {
      result = result.filter(mobile => 
        selectedRam.some(ram => mobile.ram.includes(ram.replace("GB", "")))
      );
    }
    
    if (selectedStorage.length > 0) {
      result = result.filter(mobile => 
        selectedStorage.some(storage => mobile.storage.includes(storage.replace("GB", "").replace("TB", "")))
      );
    }
    
    if (selectedNetwork.length > 0) {
      result = result.filter(mobile => 
        selectedNetwork.includes(mobile.network)
      );
    }
    
    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.priceMin - b.priceMin);
        break;
      case "price-high":
        result.sort((a, b) => b.priceMin - a.priceMin);
        break;
      default:
        // Keep original order for "popular"
        break;
    }
    
    return result;
  }, [brandMobiles, priceRange, selectedRam, selectedStorage, selectedNetwork, sortBy]);

  const totalPages = Math.ceil(filteredMobiles.length / ITEMS_PER_PAGE);
  const paginatedMobiles = filteredMobiles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Price Range</Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={100000}
          step={5000}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₱{priceRange[0].toLocaleString()}</span>
          <span>₱{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* RAM */}
      <div>
        <Label className="text-sm font-medium mb-3 block">RAM</Label>
        <div className="space-y-2">
          {ramOptions.map(ram => (
            <div key={ram} className="flex items-center gap-2">
              <Checkbox
                id={`ram-${ram}`}
                checked={selectedRam.includes(ram)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedRam([...selectedRam, ram]);
                  } else {
                    setSelectedRam(selectedRam.filter(r => r !== ram));
                  }
                }}
              />
              <label htmlFor={`ram-${ram}`} className="text-sm cursor-pointer">
                {ram}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Storage */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Storage</Label>
        <div className="space-y-2">
          {storageOptions.map(storage => (
            <div key={storage} className="flex items-center gap-2">
              <Checkbox
                id={`storage-${storage}`}
                checked={selectedStorage.includes(storage)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedStorage([...selectedStorage, storage]);
                  } else {
                    setSelectedStorage(selectedStorage.filter(s => s !== storage));
                  }
                }}
              />
              <label htmlFor={`storage-${storage}`} className="text-sm cursor-pointer">
                {storage}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Network */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Network</Label>
        <div className="space-y-2">
          {networkOptions.map(network => (
            <div key={network} className="flex items-center gap-2">
              <Checkbox
                id={`network-${network}`}
                checked={selectedNetwork.includes(network)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedNetwork([...selectedNetwork, network]);
                  } else {
                    setSelectedNetwork(selectedNetwork.filter(n => n !== network));
                  }
                }}
              />
              <label htmlFor={`network-${network}`} className="text-sm cursor-pointer">
                {network}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Brand Not Found</h1>
          <p className="text-muted-foreground">The brand you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[
          { label: "Brands", href: "/brands" },
          { label: brand.name }
        ]} />
        
        {/* Brand Header */}
        <div className="mt-6 mb-8 flex items-center gap-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-surface p-4 border border-border">
            <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{brand.name} Phones</h1>
            <p className="text-muted-foreground mt-1">{brand.tagline}</p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Filters</h3>
              <FiltersContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <p className="text-sm text-muted-foreground">
                {filteredMobiles.length} phones found
              </p>
              
              <div className="flex items-center gap-3">
                {/* Mobile Filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FiltersContent />
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Phones Grid */}
            {paginatedMobiles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedMobiles.map((mobile, index) => (
                    <div key={mobile.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <MobileCard mobile={mobile} />
                    </div>
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No phones match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrandDetailPage;
