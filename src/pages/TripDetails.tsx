import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, MapPin, Clock, DollarSign, Phone, MessageCircle, Shield, CheckCircle } from "lucide-react";

export default function TripDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  // Sample trip details
  const trip = {
    id: 1,
    driver: "John Kazembe",
    rating: 4.9,
    reviews: 287,
    vehicle: "Toyota Hiace - White",
    licensePlate: "NAM-123-456",
    departure: "08:00 AM",
    arrival: "02:30 PM",
    seats: 4,
    availableSeats: 2,
    price: 280,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=200&h=200&fit=crop",
    description: "Comfortable van with air conditioning and WiFi. Stops for lunch at Walvis Bay.",
    amenities: ["Air Conditioning", "WiFi", "Phone Charger", "Water Bottles", "First Aid Kit"],
    rules: ["No smoking", "Luggage limit: 2 bags per person", "Seatbelts mandatory"],
    stops: [
      { name: "Windhoek Central", time: "08:00 AM" },
      { name: "Okahandja Rest Stop", time: "10:30 AM" },
      { name: "Walvis Bay Port", time: "02:30 PM" },
    ],
  };

  const handleBooking = () => {
    navigate("/bookings", { state: { bookedTrip: trip } });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/search", { state })}
          className="text-primary hover:text-primary/80 font-semibold mb-6 flex items-center gap-2"
        >
          ← Back to Results
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trip Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Driver Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-4 mb-6">
                <img
                  src={trip.image}
                  alt={trip.driver}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground">{trip.driver}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(trip.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {trip.rating} ({trip.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Verified Driver
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Message
                </Button>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Vehicle Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vehicle</span>
                  <span className="font-semibold text-foreground">{trip.vehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License Plate</span>
                  <span className="font-semibold text-foreground">{trip.licensePlate}</span>
                </div>
              </div>
            </div>

            {/* Trip Schedule */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Trip Schedule</h2>
              <div className="space-y-4">
                {trip.stops.map((stop, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-primary" : "bg-muted"}`} />
                      {idx < trip.stops.length - 1 && (
                        <div className="w-0.5 h-12 bg-border my-1" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{stop.name}</p>
                      <p className="text-sm text-muted-foreground">{stop.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-3">
                {trip.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Trip Rules</h2>
              <ul className="space-y-2">
                {trip.rules.map((rule, idx) => (
                  <li key={idx} className="text-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Departure</p>
                <p className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  {trip.departure}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Arrival</p>
                <p className="text-lg font-semibold text-foreground">{trip.arrival}</p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-1">Available Seats</p>
                <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  {trip.availableSeats} of {trip.seats}
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Price per Seat</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">N${trip.price}</span>
                  <span className="text-sm text-muted-foreground">/person</span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mt-4">
                <p className="text-sm font-semibold text-foreground">
                  Total: <span className="text-primary">N${trip.price * parseInt(state.passengers || "1")}</span>
                </p>
              </div>

              <Button
                onClick={handleBooking}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
              >
                Book Seat
              </Button>

              <Button variant="outline" className="w-full">
                Save Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
