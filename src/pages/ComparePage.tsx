import { useState } from "react";
import { X, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { mobiles, type Mobile } from "@/data/mobiles";

const ComparePage = () => {
  const [selectedPhones, setSelectedPhones] = useState<(Mobile | null)[]>([null, null, null, null]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const filteredMobiles = mobiles.filter(mobile =>
    mobile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mobile.brandName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPhone = (mobile: Mobile) => {
    if (activeSlot !== null) {
      const newSelected = [...selectedPhones];
      newSelected[activeSlot] = mobile;
      setSelectedPhones(newSelected);
      setActiveSlot(null);
      setSearchQuery("");
    }
  };

  const handleRemovePhone = (index: number) => {
    const newSelected = [...selectedPhones];
    newSelected[index] = null;
    setSelectedPhones(newSelected);
  };

  const activePhones = selectedPhones.filter(Boolean) as Mobile[];

  const specCategories = [
    { key: "display", label: "Display", getValue: (m: Mobile) => m.display },
    { key: "chipset", label: "Chipset", getValue: (m: Mobile) => m.chipset },
    { key: "ram", label: "RAM", getValue: (m: Mobile) => m.ram },
    { key: "storage", label: "Storage", getValue: (m: Mobile) => m.storage },
    { key: "camera", label: "Camera", getValue: (m: Mobile) => m.camera },
    { key: "battery", label: "Battery", getValue: (m: Mobile) => m.battery },
    { key: "network", label: "Network", getValue: (m: Mobile) => m.network },
    { key: "price", label: "Price", getValue: (m: Mobile) => m.priceNew },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom py-8">
        <Breadcrumb items={[{ label: "Compare Phones" }]} />
        
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Compare Phones</h1>
          <p className="text-muted-foreground">Select up to 4 phones to compare side by side</p>
        </div>

        {/* Phone Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {selectedPhones.map((phone, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className={`p-4 min-h-[200px] flex flex-col items-center justify-center cursor-pointer transition-all ${
                    phone ? 'hover:shadow-md' : 'border-dashed hover:border-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setActiveSlot(index)}
                >
                  {phone ? (
                    <div className="text-center relative w-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -top-2 -right-2 w-6 h-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePhone(index);
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      <img
                        src={phone.images[0]}
                        alt={phone.name}
                        className="w-20 h-20 object-cover mx-auto rounded-lg mb-3"
                      />
                      <p className="text-xs text-muted-foreground">{phone.brandName}</p>
                      <p className="text-sm font-medium text-foreground line-clamp-2">{phone.name}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                        <Plus className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Add Phone</p>
                    </div>
                  )}
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Select a Phone</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search phones..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {filteredMobiles.map((mobile) => (
                        <button
                          key={mobile.id}
                          onClick={() => handleSelectPhone(mobile)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                          disabled={selectedPhones.some(p => p?.id === mobile.id)}
                        >
                          <img
                            src={mobile.images[0]}
                            alt={mobile.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground">{mobile.brandName}</p>
                            <p className="text-sm font-medium text-foreground truncate">{mobile.name}</p>
                            <p className="text-xs text-price">{mobile.priceNew}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Comparison Table */}
        {activePhones.length >= 2 && (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left text-sm font-semibold text-foreground bg-surface w-40">
                      Specification
                    </th>
                    {activePhones.map((phone) => (
                      <th key={phone.id} className="p-4 text-center min-w-[180px]">
                        <img
                          src={phone.images[0]}
                          alt={phone.name}
                          className="w-16 h-16 object-cover mx-auto rounded-lg mb-2"
                        />
                        <p className="text-xs text-muted-foreground">{phone.brandName}</p>
                        <p className="text-sm font-semibold text-foreground">{phone.name}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specCategories.map((spec, index) => (
                    <tr key={spec.key} className={index % 2 === 0 ? 'bg-surface/50' : ''}>
                      <td className="p-4 text-sm font-medium text-foreground bg-surface">
                        {spec.label}
                      </td>
                      {activePhones.map((phone) => (
                        <td key={phone.id} className="p-4 text-sm text-center text-muted-foreground">
                          {spec.getValue(phone)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activePhones.length < 2 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              Select at least 2 phones to start comparing
            </p>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
