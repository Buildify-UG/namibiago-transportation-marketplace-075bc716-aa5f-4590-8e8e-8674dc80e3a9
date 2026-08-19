import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, MapPin, Clock, DollarSign } from "lucide-react";

// Sample trip data
const sampleTrips = [
  {
    id: 1,
    driver: "John Kazembe",
    rating: 4.9,
    reviews: 287,
    vehicle: "Toyota Hiace - White",
    departure: "08:00 AM",
    arrival: "02:30 PM",
    seats: 4,
    price: 280,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    driver: "Maria Nambinga",
    rating: 4.8,
    reviews: 156,
    vehicle: "Mercedes Sprinter - Silver",
    departure: "09:30 AM",
    arrival: "04:00 PM",
    seats: 6,
    price: 250,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    driver: "Peter Oshikango",
    rating: 4.7,
    reviews: 98,
    vehicle: "Ford Transit - Blue",
    departure: "10:00 AM",
    arrival: "04:15 PM",
    seats: 5,
    price: 265,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    driver: "Anna Tjitjamba",
    rating: 5.0,
    reviews: 203,
    vehicle: "Toyota Hiace - Black",
    departure: "07:00 AM",
    arrival: "01:30 PM",
    seats: 3,
    price: 300,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {
    pickup: "Windhoek",
    destination: "Walvis Bay",
    date: new Date().toISOString().split("T")[0],
    passengers: "1",
  };

  const handleViewTrip = (tripId: number) => {
    navigate(`/trip/${tripId}`, { state });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Available Trips
          </h1>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">{state.pickup}</span>
            {" → "}
            <span className="font-semibold text-foreground">{state.destination}</span>
            {" on "}
            <span className="font-semibold text-foreground">
              {new Date(state.date).toLocaleDateString()}
            </span>
            {" for "}
            <span className="font-semibold text-foreground">{state.passengers} passenger{state.passengers !== "1" ? "s" : ""}</span>
          </p>
        </div>

        {/* Trips List */}
        <div className="space-y-4">
          {sampleTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Driver Info */}
                <div className="md:col-span-3 flex gap-4">
                  <img
                    src={trip.image}
                    alt={trip.driver}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{trip.driver}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(trip.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {trip.rating} ({trip.reviews})
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{trip.vehicle}</p>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="md:col-span-5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Departure</span>
                    </div>
                    <p className="font-bold text-foreground">{trip.departure}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Arrival</span>
                    </div>
                    <p className="font-bold text-foreground">{trip.arrival}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Seats</span>
                    </div>
                    <p className="font-bold text-foreground">{trip.seats} available</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Route</span>
                    </div>
                    <p className="font-bold text-foreground">Direct</p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="md:col-span-4 flex flex-col justify-between items-end">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Per seat</p>
                    <p className="text-3xl font-bold text-primary">
                      N${trip.price}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleViewTrip(trip.id)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto mt-4"
                  >
                    View Trip
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {sampleTrips.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              No trips found for this route. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
