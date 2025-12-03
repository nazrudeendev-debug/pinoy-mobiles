import { useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import NewsCard from "@/components/cards/NewsCard";
import { getNewsBySlug, getRelatedNews } from "@/data/news";
import { format } from "date-fns";

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getNewsBySlug(slug || "");
  const relatedArticles = getRelatedNews(slug || "", 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/news">
            <Button>
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>
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
          { label: "News", href: "/news" },
          { label: article.title }
        ]} />

        <article className="mt-6 max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(article.date), "MMMM d, yyyy")}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <Card className="p-8 mb-12">
            <div 
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Card>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <NewsCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
