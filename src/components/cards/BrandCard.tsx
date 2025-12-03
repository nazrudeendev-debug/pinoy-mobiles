import { Link } from "react-router-dom";
import { CardHover } from "@/components/ui/card";
import type { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Link to={`/brands/${brand.slug}`}>
      <CardHover className="p-6 flex flex-col items-center text-center group">
        <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-xl bg-surface p-3 group-hover:bg-accent transition-colors">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {brand.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {brand.models} phones
        </p>
      </CardHover>
    </Link>
  );
};

export default BrandCard;
