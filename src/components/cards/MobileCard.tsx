import { Link } from "react-router-dom";
import { Camera, Battery, Cpu, HardDrive } from "lucide-react";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Mobile } from "@/data/mobiles";

interface MobileCardProps {
  mobile: Mobile;
}

const MobileCard = ({ mobile }: MobileCardProps) => {
  return (
    <Link to={`/mobile/${mobile.slug}`}>
      <CardHover className="h-full overflow-hidden group">
        <div className="aspect-[4/3] relative bg-surface overflow-hidden">
          <img
            src={mobile.images[0]}
            alt={mobile.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {mobile.trending && (
            <Badge className="absolute top-3 left-3 bg-highlight text-highlight-foreground">
              Trending
            </Badge>
          )}
          {mobile.network === "5G" && (
            <Badge className="absolute top-3 right-3 bg-badge text-badge-foreground">
              5G
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{mobile.brandName}</p>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {mobile.name}
          </h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Camera className="w-3.5 h-3.5" />
              <span className="truncate">{mobile.camera.split('+')[0].trim()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Battery className="w-3.5 h-3.5" />
              <span>{mobile.battery}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Cpu className="w-3.5 h-3.5" />
              <span className="truncate">{mobile.ram}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <HardDrive className="w-3.5 h-3.5" />
              <span>{mobile.storage}</span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-border">
            <p className="text-sm font-semibold text-price">{mobile.priceNew}</p>
          </div>
        </div>
      </CardHover>
    </Link>
  );
};

export default MobileCard;
