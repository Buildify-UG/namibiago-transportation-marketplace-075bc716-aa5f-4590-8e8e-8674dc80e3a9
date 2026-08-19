import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Users, Calendar, DollarSign, TrendingUp, AlertCircle, Plus, CheckCircle } from "lucide-react";

export default function DriverDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "trips" | "requests" | "create">("overview");

  const driverStats = {
    totalTrips: 47,
    totalEarnings: 12450,
    rating: 4.9,
    completionRate: 98,
  };

  const myTrips = [
    {
      id: 1,
      from: "Windhoek",
      to: "Walvis Bay",
      date: "2024-12-20",
      time: "08:00 AM",
      passengers: 4,
      price: 280,
      status: "active",
    },
    {
      id: 2,
      from: "Windhoek",
      to: "Swakopmund",
      date: "2024-12-25",
      time: "09:30 AM",
      passengers: 3,
      price: 250,
      status: "scheduled",
    },
  ];

  const bookingRequests = [
    {
      id: "REQ001",
      passenger: "Thomas Okahandja",
      from: "Windhoek",
      to: "Walvis Bay",
      date: "2024-12-20",
      passengers: 2,
      price: 560,
      status: "pending",
    },
    {
      id: "REQ002",
      passenger: "Sarah Nkosi",
      from: "Windhoek",
      to: "Walvis Bay",
      date: "2024-12-20",
      passengers: 1,
      price: 280,
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Driver Dashboard</h1>
          <p className="text-muted-foreground">Manage your trips and earnings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Trips</p>
                <p className="text-3xl font-bold text-foreground">{driverStats.totalTrips}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-3xl font-bold text-primary">N${driverStats.totalEarnings}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="text-3xl font-bold text-foreground">{driverStats.rating}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-3xl font-bold text-foreground">{driverStats.completionRate}%</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          {["overview", "trips", "requests", "create"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-4 font-semibold transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 gap-2">
                    <Plus className="w-4 h-4" />
                    Create New Trip
                  </Button>
                  <Button variant="outline" className="py-6 gap-2">
                    <AlertCircle className="w-4 h-4" />
                    View Booking Requests
                  </Button>
                  <Button variant="outline" className="py-6 gap-2">
                    <DollarSign className="w-4 h-4" />
                    Withdraw Earnings
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900">Complete Your Profile</h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Add your vehicle details and insurance information to unlock more features and increase bookings.
                    </p>
                    <Button variant="outline" className="mt-3">
                      Complete Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Trips Tab */}
          {activeTab === "trips" && (
            <div className="space-y-4">
              {myTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Route</p>
                      <p className="font-bold text-foreground">{trip.from} → {trip.to}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                      <p className="font-bold text-foreground">
                        {new Date(trip.date).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground">{trip.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Passengers</p>
                      <p className="font-bold text-foreground flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        {trip.passengers}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price/Seat</p>
                      <p className="font-bold text-primary">N${trip.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        trip.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 flex gap-3">
                    <Button variant="outline" className="flex-1">
                      Edit Trip
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Bookings
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Cancel Trip
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Booking Requests Tab */}
          {activeTab === "requests" && (
            <div className="space-y-4">
              {bookingRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Passenger</p>
                      <p className="font-bold text-foreground">{request.passenger}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Route</p>
                      <p className="font-bold text-foreground">{request.from} → {request.to}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p className="font-bold text-foreground">
                        {new Date(request.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Amount</p>
                      <p className="font-bold text-primary">N${request.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 flex gap-3">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      Accept Booking
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Decline
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Create Trip Tab */}
          {activeTab === "create" && (
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Create New Trip</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Starting Location
                    </label>
                    <Input placeholder="e.g., Windhoek" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Destination
                    </label>
                    <Input placeholder="e.g., Walvis Bay" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Departure Date
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Departure Time
                    </label>
                    <Input type="time" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Available Seats
                    </label>
                    <Input type="number" min="1" max="8" placeholder="e.g., 4" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Price Per Seat (N$)
                    </label>
                    <Input type="number" placeholder="e.g., 280" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Trip Description
                  </label>
                  <textarea
                    placeholder="Describe your trip, amenities, stops, etc."
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                    Create Trip
                  </Button>
                  <Button variant="outline" className="flex-1 py-6">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
