import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/shared/SearchBar";
import MobileCard from "@/components/cards/MobileCard";
import BrandCard from "@/components/cards/BrandCard";
import NewsCard from "@/components/cards/NewsCard";
import { brands } from "@/data/brands";
import { getTrendingMobiles, getFeaturedMobiles } from "@/data/mobiles";
import { getLatestNews } from "@/data/news";

const Index = () => {
  const trendingMobiles = getTrendingMobiles();
  const featuredMobiles = getFeaturedMobiles();
  const latestNews = getLatestNews(3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Philippines' #1 Mobile Phone Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="text-primary block">Mobile Phone</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Compare prices, specs, and reviews of the latest smartphones available in the Philippines.
            </p>
            
            <SearchBar large placeholder="Search phones by name, brand, or features..." />
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/new-phones">
                <Button variant="outline" size="lg">
                  <Smartphone className="w-4 h-4" />
                  Browse Phones
                </Button>
              </Link>
              <Link to="/compare">
                <Button variant="outline" size="lg">
                  <Scale className="w-4 h-4" />
                  Compare Phones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Brands */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Popular Brands</h2>
              <p className="text-muted-foreground mt-1">Browse phones by your favorite brand</p>
            </div>
            <Link to="/brands">
              <Button variant="ghost">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.slice(0, 6).map((brand, index) => (
              <div key={brand.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Phones */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trending Phones</h2>
              <p className="text-muted-foreground mt-1">Most searched phones this week</p>
            </div>
            <Link to="/new-phones">
              <Button variant="ghost">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingMobiles.slice(0, 8).map((mobile, index) => (
              <div key={mobile.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <MobileCard mobile={mobile} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
        <div className="container-custom">
          <Card className="bg-background/10 backdrop-blur border-primary-foreground/20 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Can't decide between phones?
                </h2>
                <p className="text-primary-foreground/80">
                  Use our comparison tool to see specs side by side and make the right choice.
                </p>
              </div>
              <Link to="/compare">
                <Button variant="secondary" size="xl" className="whitespace-nowrap">
                  <Scale className="w-5 h-5" />
                  Compare Now
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Phones</h2>
              <p className="text-muted-foreground mt-1">Top picks from our editors</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMobiles.slice(0, 4).map((mobile, index) => (
              <div key={mobile.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <MobileCard mobile={mobile} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest News</h2>
              <p className="text-muted-foreground mt-1">Stay updated with the mobile world</p>
            </div>
            <Link to="/news">
              <Button variant="ghost">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article, index) => (
              <div key={article.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
