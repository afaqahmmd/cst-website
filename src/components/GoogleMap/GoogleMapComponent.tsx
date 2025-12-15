"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface GoogleMapProps {
  address: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 33.6844, lng: 73.0479 }, // fallback: Islamabad
          zoom: 14,
        });

        // Geocode the address
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address }, (results, status) => {
          if (status === "OK" && results && results[0]) {
            map.setCenter(results[0].geometry.location);

            new google.maps.Marker({
              map,
              position: results[0].geometry.location,
              title: address,
            });
          } else {
            console.error("Geocode failed: " + status);
          }
        });
      }
    });
  }, [ address]);

  return <div ref={mapRef} className="w-full h-[500px] " />;
};

export default GoogleMap;
