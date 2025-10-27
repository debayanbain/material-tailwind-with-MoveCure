"use client";

import { useState } from "react";
import { Card, Typography, Button, Avatar } from "@/lib/MtConfig";
import { cn } from "@/lib/utils";
import MapboxExample from "@/components/MapBox";
import {
  Calendar,
  Clock,
  CreditCard,
  CheckCircle,
  XCircle,
  AlertCircle,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface Booking {
  id: number;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancled";
  service: string;
  fee: number;
  paid: boolean;
  patientName: string;
  patientImage: string;
  age: number;
  condition: string;
}

export default function Dashboard() {
  const [bookings] = useState<Booking[]>([
    {
      id: 1,
      date: "2025-09-25",
      time: "10:00 AM",
      status: "upcoming",
      service: "Physiotherapy Session",
      fee: 1200,
      paid: false,
      patientName: "John Michael",
      patientImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      age: 34,
      condition: "Lower back pain",
    },
    {
      id: 3,
      date: "2025-09-12",
      time: "11:30 AM",
      status: "cancled",
      service: "Yoga Therapy",
      fee: 800,
      paid: false,
      patientName: "Wade Richards",
      patientImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      age: 42,
      condition: "Stress management",
    },
    {
      id: 3,
      date: "2025-09-12",
      time: "11:30 AM",
      status: "upcoming",
      service: "Yoga Therapy",
      fee: 800,
      paid: false,
      patientName: "Wade Richards",
      patientImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      age: 42,
      condition: "Stress management",
    },
    {
      id: 3,
      date: "2025-09-12",
      time: "11:30 AM",
      status: "cancled",
      service: "Yoga Therapy",
      fee: 800,
      paid: false,
      patientName: "Wade Richards",
      patientImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
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
      patientImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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
      patientImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      age: 29,
      condition: "Spinal alignment",
    },
  ]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const SectionHeader = ({
    icon,
    color,
    title,
    count,
    subtitle,
  }: {
    icon: JSX.Element;
    color: string;
    title: string;
    count: number;
    subtitle: string;
  }) => (
    <div className="p-6 border-b border-gray-100 flex items-center gap-3">
      <div
        className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">
          {count} {subtitle}
        </p>
      </div>
    </div>
  );

  const BookingSection = ({
    title,
    icon,
    color,
    status,
    actionButtons,
    className = "",
  }: {
    title: string;
    icon: JSX.Element;
    color: string;
    status: string;
    actionButtons?: (booking?: Booking) => JSX.Element | undefined;
    className?: string;
  }) => {
    const filtered = bookings.filter((b) => b.status === status);

    return (
      <Card
        className={cn(
          "bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full flex flex-col",
          className
        )}
      >
        <SectionHeader
          icon={icon}
          color={color}
          title={title}
          count={filtered.length}
          subtitle={`appointments ${status}`}
        />

        {/* Scrollable Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {filtered.length ? (
            filtered.map((b) => (
              <div
                key={b.id}
                className={cn(
                  "flex flex-col md:flex-row items-start md:items-center gap-2 p-4 rounded-xl border transition-all duration-200",
                  status === "completed" &&
                    "bg-green-50/50 border-green-100 hover:bg-green-50",
                  status === "upcoming" &&
                    "bg-orange-50/50 border-orange-100 hover:bg-orange-50",
                  status === "cancled" &&
                    "bg-red-50/50 border-red-100 hover:bg-red-50"
                )}
              >
                <Avatar
                  src={b.patientImage}
                  alt={b.patientName}
                  size="lg"
                  className="border-2 border-white shadow-md flex-shrink-0"
                />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <h3 className="font-semibold text-base text-gray-800">
                      {b.patientName}
                    </h3>
                    <p className="text-sm text-gray-500">Age: {b.age}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {b.service}
                    </p>
                    <p className="text-xs text-gray-500">{b.condition}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(b.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {b.time}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-600">
                      {formatCurrency(b.fee)}
                    </p>
                    <div
                      className={cn(
                        "flex items-center justify-center gap-1 text-xs",
                        b.paid ? "text-green-600" : "text-red-600"
                      )}
                    >
                      <CreditCard className="w-3 h-3" />
                      {b.paid ? "Paid" : "Pending"}
                    </div>
                  </div>
                  {actionButtons &&
                    (actionButtons(b) as unknown as JSX.Element)}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center py-8 text-gray-500 h-full w-full">
              <Image
                src={"/images/nutritionist.png"}
                alt="status image"
                width={150}
                height={150}
              />
              <p className="mt-2">No {status} appointments</p>
            </div>
          )}
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-2">
        <header className="p-8 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 mt-14">
            👋 Welcome back, Debayan!
          </h1>
          <p className="text-gray-600 text-lg">Here is your patient overview</p>
        </header>

        <div className="flex justify-center items-center pr-4 mt-9">
          <Button
            size="md"
            variant="gradient"
            color="deep-purple"
            className="flex justify-center items-center gap-2 group"
          >
            Booking Appointment
            <FaArrowRightLong size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="px-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Calendar />,
              label: "Total Bookings",
              color: "purple",
              value: bookings.length,
            },
            {
              icon: <CheckCircle />,
              label: "Completed",
              color: "green",
              value: bookings.filter((b) => b.status === "completed").length,
            },
            {
              icon: <AlertCircle />,
              label: "Upcoming",
              color: "orange",
              value: bookings.filter((b) => b.status === "upcoming").length,
            },
            {
              icon: <XCircle />,
              label: "Canceled",
              color: "red",
              value: bookings.filter((b) => b.status === "cancled").length,
            },
          ].map((s, i) => (
            <Card
              key={i}
              className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className={`w-12 h-12 bg-${s.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                {s.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                {s.label}
              </h3>
              <p className={`text-2xl font-bold text-${s.color}-600`}>
                {s.value}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="px-8 flex-1 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden h-full">
        {/* Upcoming Appointments */}
        <BookingSection
          title="Upcoming Appointments"
          icon={<AlertCircle className="w-5 h-5 text-orange-600" />}
          color="bg-orange-100"
          status="upcoming"
          actionButtons={(b) => (
            <div className="flex gap-2">
              <Button
                size="md"
                className="bg-purple-600 hover:bg-purple-700 text-xs"
              >
                View
              </Button>
            </div>
          )}
        />

        {/* Completed Appointments */}
        <BookingSection
          title="Completed Appointments"
          icon={<CheckCircle className="w-5 h-5 text-green-600" />}
          color="bg-green-100"
          status="completed"
          actionButtons={(b) => (
            <div className="flex gap-2">
              <Button
                size="md"
                className="bg-green-700 hover:bg-green-600 text-xs"
              >
                View
              </Button>
            </div>
          )}
        />

        {/* Canceled Appointments */}
        <BookingSection
          title="Canceled Appointments"
          icon={<XCircle className="w-5 h-5 text-red-600" />}
          color="bg-red-100"
          status="cancled"
          className="overflow-y-auto h-[34.3rem]"
          // actionButtons={(b) => (
          //   <div className="flex gap-2">
          //     <Button size="sm" className="bg-red-500 hover:ring-red-700">Rebook</Button>
          //   </div>
          // )}
        />

        {/* Map Section */}
        <div className="bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full flex flex-col rounded-xl">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-purple-400/50 rounded-full">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Clinic Locations
              </h2>
              <p className="text-sm text-gray-600">
                Track & Manage Locations Overview
              </p>
            </div>
          </div>
          <div className="flex w-full h-[1px] bg-blue-gray-400/20"></div>
          <Card className="h-auto bg-white backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-t-none">
            <MapboxExample />
          </Card>
        </div>
      </main>
    </div>
  );
}
