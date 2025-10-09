"use client";

import { useState } from "react";
import { Card, Typography, Button, Avatar } from "@/lib/MtConfig";
import { cn } from "@/lib/utils";
import MapboxExample from "@/components/MapBox";
import { Calendar, Clock, CreditCard, CheckCircle, XCircle, AlertCircle, MapPin, Users } from "lucide-react";

export default function Dashboard() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      date: "2025-09-25",
      time: "10:00 AM",
      status: "upcoming",
      service: "Physiotherapy Session",
      fee: 1200,
      paid: false,
      patientName: "John Michael",
      patientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      age: 34,
      condition: "Lower back pain",
    },
    {
      id: 2,
      date: "2025-09-10",
      time: "4:00 PM",
      status: "completed",
      service: "Rehab Therapy",
      fee: 1500,
      paid: true,
      patientName: "Alexa Liras",
      patientImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      age: 28,
      condition: "Knee rehabilitation",
    },
    {
      id: 3,
      date: "2025-09-12",
      time: "11:30 AM",
      status: "canceled",
      service: "Yoga Therapy",
      fee: 800,
      paid: false,
      patientName: "Wade Richards",
      patientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      age: 42,
      condition: "Stress management",
    },
    {
      id: 4,
      date: "2025-09-28",
      time: "2:00 PM",
      status: "upcoming",
      service: "Massage Therapy",
      fee: 900,
      paid: true,
      patientName: "Sarah Johnson",
      patientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      age: 31,
      condition: "Muscle tension",
    },
    {
      id: 5,
      date: "2025-09-15",
      time: "9:00 AM",
      status: "completed",
      service: "Chiropractic Care",
      fee: 1100,
      paid: true,
      patientName: "Michael Chen",
      patientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      age: 29,
      condition: "Spinal alignment",
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "canceled":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "upcoming":
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "canceled":
        return "bg-red-100 text-red-800 border-red-200";
      case "upcoming":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <div className="p-8 pb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          👋 Welcome back, Debayan!
      </h1>
        <p className="text-gray-600 text-lg">Here's your patient overview</p>
      </div>

      {/* Stats Cards */}
      <div className="px-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Total Bookings</h3>
              <p className="text-2xl font-bold text-purple-600">{bookings.length}</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Completed</h3>
              <p className="text-2xl font-bold text-green-600">
            {bookings.filter((b) => b.status === "completed").length}
          </p>
        </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Upcoming</h3>
              <p className="text-2xl font-bold text-orange-600">
                {bookings.filter((b) => b.status === "upcoming").length}
              </p>
            </div>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">Canceled</h3>
              <p className="text-2xl font-bold text-red-600">
            {bookings.filter((b) => b.status === "canceled").length}
          </p>
        </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Patient Cards */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Upcoming Appointments</h2>
                    <p className="text-sm text-gray-600">
                      {bookings.filter(b => b.status === 'upcoming').length} appointments scheduled
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {bookings.filter(b => b.status === 'upcoming').length > 0 ? (
                  <>
                    {/* Table Headers */}
                    <div className="hidden md:grid md:grid-cols-5 gap-4 px-4 py-2 mb-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-700">Patient Info</div>
                      <div className="font-semibold text-gray-700">Service & Condition</div>
                      <div className="font-semibold text-gray-700">Date & Time</div>
                      <div className="font-semibold text-gray-700 text-center">Fee & Payment</div>
                      <div className="font-semibold text-gray-700">Actions</div>
                    </div>
                    <div className="space-y-4">
                    {bookings.filter(b => b.status === 'upcoming').map((booking) => (
                      <div 
                        key={booking.id}
                        className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100 hover:bg-orange-50 transition-all duration-200"
                      >
                        <Avatar
                          src={booking.patientImage}
                          alt={booking.patientName}
                          size="lg"
                          className="border-2 border-white shadow-md flex-shrink-0"
                        />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-gray-800">{booking.patientName}</h3>
                            <p className="text-sm text-gray-500">Age: {booking.age}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{booking.service}</p>
                            <p className="text-xs text-gray-500">{booking.condition}</p>
                          </div>
                          <div>
                            <div className="flex items-center text-sm text-gray-600 mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(booking.date)}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {booking.time}
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-purple-600">
                              {formatCurrency(booking.fee)}
                            </p>
                            <div className={`flex items-center justify-center gap-1 text-xs ${booking.paid ? 'text-green-600' : 'text-red-600'}`}>
                              <CreditCard className="w-3 h-3" />
                              {booking.paid ? 'Paid' : 'Pending'}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs">
                              View
                            </Button>
                            <Button size="sm" variant="outlined" className="text-xs">
                              Reschedule
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-3 text-orange-300" />
                    <p>No upcoming appointments</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Completed Appointments */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Completed Appointments</h2>
                    <p className="text-sm text-gray-600">
                      {bookings.filter(b => b.status === 'completed').length} appointments completed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {bookings.filter(b => b.status === 'completed').length > 0 ? (
                  <>
                    {/* Table Headers */}
                    <div className="hidden md:grid md:grid-cols-5 gap-4 px-4 py-2 mb-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-700">Patient Info</div>
                      <div className="font-semibold text-gray-700">Service & Condition</div>
                      <div className="font-semibold text-gray-700">Date & Time</div>
                      <div className="font-semibold text-gray-700 text-center">Fee & Payment</div>
                      <div className="font-semibold text-gray-700">Actions</div>
                    </div>
                    <div className="space-y-4">
                    {bookings.filter(b => b.status === 'completed').map((booking) => (
                      <div 
                        key={booking.id}
                        className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-green-50/50 rounded-xl border border-green-100 hover:bg-green-50 transition-all duration-200"
                      >
                        <Avatar
                          src={booking.patientImage}
                          alt={booking.patientName}
                          size="lg"
                          className="border-2 border-white shadow-md flex-shrink-0"
                        />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-gray-800">{booking.patientName}</h3>
                            <p className="text-sm text-gray-500">Age: {booking.age}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{booking.service}</p>
                            <p className="text-xs text-gray-500">{booking.condition}</p>
                          </div>
                          <div>
                            <div className="flex items-center text-sm text-gray-600 mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(booking.date)}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {booking.time}
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-purple-600">
                              {formatCurrency(booking.fee)}
                            </p>
                            <div className={`flex items-center justify-center gap-1 text-xs ${booking.paid ? 'text-green-600' : 'text-red-600'}`}>
                              <CreditCard className="w-3 h-3" />
                              {booking.paid ? 'Paid' : 'Pending'}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                              View Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-300" />
                    <p>No completed appointments</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Canceled Appointments */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Canceled Appointments</h2>
                    <p className="text-sm text-gray-600">
                      {bookings.filter(b => b.status === 'canceled').length} appointments canceled
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {bookings.filter(b => b.status === 'canceled').length > 0 ? (
                  <>
                    {/* Table Headers */}
                    <div className="hidden md:grid md:grid-cols-5 gap-4 px-4 py-2 mb-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-700">Patient Info</div>
                      <div className="font-semibold text-gray-700">Service & Condition</div>
                      <div className="font-semibold text-gray-700">Date & Time</div>
                      <div className="font-semibold text-gray-700 text-center">Fee & Payment</div>
                      <div className="font-semibold text-gray-700">Actions</div>
                    </div>
                    <div className="space-y-4">
                    {bookings.filter(b => b.status === 'canceled').map((booking) => (
                      <div 
                        key={booking.id}
                        className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100 hover:bg-red-50 transition-all duration-200"
                      >
                        <Avatar
                          src={booking.patientImage}
                          alt={booking.patientName}
                          size="lg"
                          className="border-2 border-white shadow-md flex-shrink-0"
                        />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <h3 className="font-semibold text-gray-800">{booking.patientName}</h3>
                            <p className="text-sm text-gray-500">Age: {booking.age}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{booking.service}</p>
                            <p className="text-xs text-gray-500">{booking.condition}</p>
                          </div>
                          <div>
                            <div className="flex items-center text-sm text-gray-600 mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(booking.date)}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {booking.time}
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-purple-600">
                              {formatCurrency(booking.fee)}
                            </p>
                            <div className={`flex items-center justify-center gap-1 text-xs ${booking.paid ? 'text-green-600' : 'text-red-600'}`}>
                              <CreditCard className="w-3 h-3" />
                              {booking.paid ? 'Paid' : 'Pending'}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outlined" className="text-xs">
                              Rebook
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <XCircle className="w-12 h-12 mx-auto mb-3 text-red-300" />
                    <p>No canceled appointments</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
          
          {/* Map Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                Patient Locations & Clinic Map
              </h2>
              <p className="text-gray-600 text-lg">Interactive map showing patient locations and clinic details</p>
            </div>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-[600px]">
              <div className="h-full">
                <MapboxExample />
              </div>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  );
}
