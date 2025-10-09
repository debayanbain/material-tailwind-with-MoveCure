"use client";

import { useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card, Typography, Button, Input } from "@/lib/MtConfig";
import { FaSearchLocation } from "react-icons/fa";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_API_MAPBOX_TOKEN as string;


const MapboxExample = () => {
    return (
        <div className="relative w-full h-full">
            <Map
                initialViewState={{
                    latitude: 22.590354609780633,
                    longitude: 88.36641341226412,
                    zoom: 10,
                }}
                minZoom={4}
                style={{ width: '100%', height: 400, borderRadius: '12px' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
            >,
            </Map>

            <div className="absolute top-2 right-4 bg-white shadow-md rounded-lg w-72">
                <Input
                    maxLength={16}
                    placeholder="Search place..."
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    icon={
                        <FaSearchLocation />
                    }
                />
            </div>
        </div>
    )
}

export default MapboxExample;