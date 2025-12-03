import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Camera, Battery, Cpu, Monitor, HardDrive, Signal, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MobileCard from "@/components/cards/MobileCard";
import { getMobileBySlug, mobiles } from "@/data/mobiles";

const MobileDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const mobile = getMobileBySlug(slug || "");
  const [currentImage, setCurrentImage] = useState(0);

  if (!mobile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Phone Not Found</h1>
          <p className="text-muted-foreground">The phone you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const similarPhones = mobiles
    .filter(m => m.brandSlug === mobile.brandSlug && m.id !== mobile.id)
    .slice(0, 4);

  const keySpecs = [
    { icon: Camera, label: "Camera", value: mobile.camera.split('+')[0].trim() },
    { icon: Battery, label: "Battery", value: mobile.battery },
    { icon: Monitor, label: "Display", value: mobile.display.split(' ')[0] },
    { icon: Cpu, label: "Chipset", value: mobile.chipset.split(' ').slice(0, 2).join(' ') },
    { icon: HardDrive, label: "RAM", value: mobile.ram },
    { icon: Signal, label: "Network", value: mobile.network },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[
          { label: "Brands", href: "/brands" },
          { label: mobile.brandName, href: `/brands/${mobile.brandSlug}` },
          { label: mobile.name }
        ]} />

        {/* Phone Header */}
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <Card className="p-4 mb-4">
              <div className="aspect-square relative bg-surface rounded-lg overflow-hidden">
                <img
                  src={mobile.images[currentImage]}
                  alt={mobile.name}
                  className="w-full h-full object-cover"
                />
                {mobile.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImage(prev => prev === 0 ? mobile.images.length - 1 : prev - 1)}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImage(prev => prev === mobile.images.length - 1 ? 0 : prev + 1)}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
            </Card>
            
            {mobile.images.length > 1 && (
              <div className="flex gap-2">
                {mobile.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImage ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Info */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">{mobile.brandName}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{mobile.name}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {mobile.trending && (
                <Badge className="bg-highlight text-highlight-foreground">Trending</Badge>
              )}
              {mobile.network === "5G" && (
                <Badge className="bg-badge text-badge-foreground">5G</Badge>
              )}
            </div>

            {/* Price */}
            <Card className="p-6 mb-6 bg-surface">
              <p className="text-sm text-muted-foreground mb-1">Price in Philippines</p>
              <p className="text-2xl font-bold text-price">{mobile.priceNew}</p>
              <Button variant="hero" className="w-full mt-4">
                Check Best Prices
              </Button>
            </Card>

            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-4">
              {keySpecs.map((spec, index) => (
                <Card key={index} className="p-4 text-center">
                  <spec.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-foreground truncate">{spec.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Specs */}
        <div className="mt-12">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="specs" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="pros-cons"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Pros & Cons
              </TabsTrigger>
              <TabsTrigger 
                value="variants"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Variants
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(mobile.specs).map(([category, specs]) => (
                  <Card key={category} className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 capitalize">{category}</h3>
                    <table className="w-full">
                      <tbody>
                        {Object.entries(specs).map(([key, value]) => (
                          <tr key={key} className="border-b border-border last:border-0">
                            <td className="py-2 text-sm text-muted-foreground w-1/3">{key}</td>
                            <td className="py-2 text-sm text-foreground">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pros-cons" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-price" />
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {mobile.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-price mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-destructive" />
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {mobile.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="variants" className="mt-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Available Variants</h3>
                <div className="flex flex-wrap gap-3">
                  {mobile.variants.map((variant, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Phones */}
        {similarPhones.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar Phones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarPhones.map((phone) => (
                <MobileCard key={phone.id} mobile={phone} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileDetailPage;
