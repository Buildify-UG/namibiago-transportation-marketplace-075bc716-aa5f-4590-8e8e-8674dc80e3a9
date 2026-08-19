import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react";

const popularRoutes = [
  { from: "Windhoek", to: "Oshakati", distance: "450 km", trips: 12 },
  { from: "Windhoek", to: "Ondangwa", distance: "480 km", trips: 8 },
  { from: "Windhoek", to: "Rundu", distance: "680 km", trips: 6 },
  { from: "Windhoek", to: "Walvis Bay", distance: "380 km", trips: 14 },
  { from: "Windhoek", to: "Swakopmund", distance: "360 km", trips: 15 },
  { from: "Windhoek", to: "Oshikango", distance: "520 km", trips: 5 },
];

export default function Home() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && destination && date) {
      navigate("/search", {
        state: { pickup, destination, date, passengers },
      });
    }
  };

  const handleQuickRoute = (from: string, to: string) => {
    navigate("/search", {
      state: {
        pickup: from,
        destination: to,
        date: new Date().toISOString().split("T")[0],
        passengers: "1",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Journey Across Namibia
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with drivers and passengers for affordable, reliable travel
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-16 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Where are you going?
          </h2>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Pickup */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-primary" />
                  <Input
                    type="text"
                    placeholder="Starting point"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-primary" />
                  <Input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-primary" />
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-primary" />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 gap-2"
                >
                  Search
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Popular Routes */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickRoute(route.from, route.to)}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <p className="font-bold text-foreground">{route.from}</p>
                    <p className="text-sm text-muted-foreground">Starting point</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">{route.to}</p>
                  <p className="text-sm text-muted-foreground">Destination</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs text-muted-foreground">
                  <span>{route.distance}</span>
                  <span>{route.trips} trips available</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
