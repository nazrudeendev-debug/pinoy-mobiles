import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MobileCard from "@/components/cards/MobileCard";
import Pagination from "@/components/shared/Pagination";
import { searchMobiles } from "@/data/mobiles";

const ITEMS_PER_PAGE = 12;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    let results = searchMobiles(query);
    
    if (filters.includes("5G")) {
      results = results.filter(m => m.network === "5G");
    }
    if (filters.includes("Under ₱20K")) {
      results = results.filter(m => m.priceMin < 20000);
    }
    if (filters.includes("₱20K - ₱50K")) {
      results = results.filter(m => m.priceMin >= 20000 && m.priceMin <= 50000);
    }
    if (filters.includes("Above ₱50K")) {
      results = results.filter(m => m.priceMin > 50000);
    }
    
    return results;
  }, [query, filters]);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
    setCurrentPage(1);
  };

  const toggleFilter = (filter: string) => {
    setFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    setCurrentPage(1);
  };

  const filterOptions = ["5G", "Under ₱20K", "₱20K - ₱50K", "Above ₱50K"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[{ label: "Search" }]} />

        {/* Search Bar */}
        <div className="mt-6 mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search phones by name or brand..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-base rounded-xl"
              />
              <Button 
                type="submit" 
                variant="hero"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filterOptions.map(filter => (
            <Badge
              key={filter}
              variant={filters.includes(filter) ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              onClick={() => toggleFilter(filter)}
            >
              {filter}
              {filters.includes(filter) && (
                <X className="w-3 h-3 ml-1" />
              )}
            </Badge>
          ))}
        </div>

        {/* Results */}
        {query.trim() ? (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {searchResults.length} results for "{query}"
            </p>

            {paginatedResults.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedResults.map((mobile, index) => (
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
                <p className="text-xl font-semibold text-foreground mb-2">No results found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl font-semibold text-foreground mb-2">Search for phones</p>
            <p className="text-muted-foreground">
              Enter a phone name or brand to start searching.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
