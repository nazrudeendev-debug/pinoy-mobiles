import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import NewsCard from "@/components/cards/NewsCard";
import Pagination from "@/components/shared/Pagination";
import { news } from "@/data/news";

const ITEMS_PER_PAGE = 6;

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedNews = [...news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);
  const paginatedNews = sortedNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[{ label: "News" }]} />
        
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Latest Mobile News</h1>
          <p className="text-muted-foreground">Stay updated with the latest in the mobile world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedNews.map((article, index) => (
            <div key={article.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <NewsCard article={article} />
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
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
