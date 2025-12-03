import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
}

const SearchBar = ({ large = false, placeholder = "Search phones, brands..." }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`relative ${large ? "max-w-2xl mx-auto" : ""}`}>
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${large ? "w-5 h-5" : "w-4 h-4"}`} />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${large ? "pl-12 pr-32 h-14 text-base rounded-xl" : "pl-10 pr-4"} bg-background border-border`}
        />
        {large && (
          <Button 
            type="submit" 
            variant="hero"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            Search
          </Button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
