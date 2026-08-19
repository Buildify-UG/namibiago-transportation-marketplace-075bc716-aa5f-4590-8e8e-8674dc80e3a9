import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, DollarSign, CheckCircle, AlertCircle, Calendar } from "lucide-react";

const upcomingBookings = [
  {
    id: "BK001",
    driver: "John Kazembe",
    from: "Windhoek",
    to: "Walvis Bay",
    date: "2024-12-20",
    time: "08:00 AM",
    seats: 2,
    price: 560,
    status: "confirmed",
    vehicle: "Toyota Hiace - White",
  },
  {
    id: "BK002",
    driver: "Maria Nambinga",
    from: "Windhoek",
    to: "Swakopmund",
    date: "2024-12-25",
    time: "09:30 AM",
    seats: 1,
    price: 250,
    status: "pending",
    vehicle: "Mercedes Sprinter - Silver",
  },
];

const previousBookings = [
  {
    id: "BK003",
    driver: "Peter Oshikango",
    from: "Windhoek",
    to: "Rundu",
    date: "2024-12-10",
    time: "07:00 AM",
    seats: 1,
    price: 280,
    status: "completed",
    vehicle: "Ford Transit - Blue",
    rating: 5,
  },
  {
    id: "BK004",
    driver: "Anna Tjitjamba",
    from: "Windhoek",
    to: "Oshakati",
    date: "2024-12-05",
    time: "08:30 AM",
    seats: 2,
    price: 560,
    status: "completed",
    vehicle: "Toyota Hiace - Black",
    rating: 4,
  },
];

export default function Bookings() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "previous">("upcoming");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-50 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "completed":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "pending":
        return "Pending";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Bookings</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-4 font-semibold transition-colors ${
              activeTab === "upcoming"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Upcoming ({upcomingBookings.length})
          </button>
          <button
            onClick={() => setActiveTab("previous")}
            className={`pb-4 font-semibold transition-colors ${
              activeTab === "previous"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Previous ({previousBookings.length})
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {activeTab === "upcoming" && (
            <>
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      {/* Route */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Route</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-foreground">{booking.from}</p>
                            <p className="text-xs text-muted-foreground">→ {booking.to}</p>
                          </div>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Departure</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-foreground">
                              {new Date(booking.date).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-muted-foreground">{booking.time}</p>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Details</p>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            {booking.seats} seat{booking.seats !== 1 ? "s" : ""}
                          </p>
                          <p className="text-sm text-muted-foreground">{booking.vehicle}</p>
                        </div>
                      </div>

                      {/* Price & Status */}
                      <div className="flex flex-col justify-between items-end">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">N${booking.price}</p>
                          <div
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border mt-2 ${getStatusColor(
                              booking.status
                            )}`}
                          >
                            {getStatusIcon(booking.status)}
                            {getStatusLabel(booking.status)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-border pt-4 flex gap-3">
                      <Button variant="outline" className="flex-1">
                        Contact Driver
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">No upcoming bookings</p>
                  <Button className="mt-4 bg-primary hover:bg-primary/90">
                    Book a Trip
                  </Button>
                </div>
              )}
            </>
          )}

          {activeTab === "previous" && (
            <>
              {previousBookings.length > 0 ? (
                previousBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all opacity-75"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      {/* Route */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Route</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-foreground">{booking.from}</p>
                            <p className="text-xs text-muted-foreground">→ {booking.to}</p>
                          </div>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Date</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-foreground">
                              {new Date(booking.date).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-muted-foreground">{booking.time}</p>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Amount Paid</p>
                        <p className="text-2xl font-bold text-primary">N${booking.price}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex flex-col justify-between items-end">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-2">Your Rating</p>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-lg ${
                                  i < (booking.rating || 0)
                                    ? "text-primary"
                                    : "text-muted"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-border pt-4 flex gap-3">
                      <Button variant="outline" className="flex-1">
                        View Receipt
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Book Again
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">No previous bookings</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
