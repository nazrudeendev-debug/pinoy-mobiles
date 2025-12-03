import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NewsArticle } from "@/data/news";
import { format } from "date-fns";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link to={`/news/${article.slug}`}>
      <CardHover className="h-full overflow-hidden group">
        <div className="aspect-video relative bg-surface overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-background/80 text-foreground backdrop-blur-sm">
            {article.category}
          </Badge>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{format(new Date(article.date), "MMM d, yyyy")}</span>
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </CardHover>
    </Link>
  );
};

export default NewsCard;
