import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, MapPin, Edit2, Save, X } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+264 81 234 5678",
    location: "Windhoek, Namibia",
    bio: "Experienced driver with 5+ years of experience. Friendly and professional service.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  });

  const [formData, setFormData] = useState(profile);

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              className="gap-2"
              variant="outline"
            >
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          )}
        </div>

        {/* Profile Card */}
        <div className="bg-card border border-border rounded-xl p-8 space-y-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90">
                  <Edit2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Profile Information */}
          {!isEditing ? (
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Full Name
                </label>
                <p className="text-xl font-bold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {profile.name}
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <p className="text-lg text-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {profile.email}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Phone Number
                </label>
                <p className="text-lg text-foreground flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  {profile.phone}
                </p>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Location
                </label>
                <p className="text-lg text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {profile.location}
                </p>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  About Me
                </label>
                <p className="text-foreground leading-relaxed">{profile.bio}</p>
              </div>
            </div>
          ) : (
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  About Me
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </form>
          )}

          {/* Action Buttons */}
          {isEditing && (
            <div className="border-t border-border pt-6 flex gap-4">
              <Button
                onClick={handleSave}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1 gap-2 py-6"
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Account Settings */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Account Settings</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Privacy Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Notification Preferences
              </Button>
            </div>
          </div>

          {/* Verification Status */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Verification Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-sm font-semibold text-green-700">Email Verified</span>
                <span className="text-green-600">✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-sm font-semibold text-green-700">Phone Verified</span>
                <span className="text-green-600">✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <span className="text-sm font-semibold text-yellow-700">ID Verification</span>
                <span className="text-yellow-600">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">Danger Zone</h2>
          <p className="text-sm text-red-600 mb-4">
            These actions are permanent and cannot be undone.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="text-red-600 hover:bg-red-50 border-red-200">
              Deactivate Account
            </Button>
            <Button variant="outline" className="text-red-600 hover:bg-red-50 border-red-200">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
