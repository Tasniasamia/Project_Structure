"use client";
import { Card, Dropdown, Select, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { useI18n } from "../../../../../../contexts/i18n";
import TrackCard from "../card/trackCard";
import { fetchAdminTripList } from "../../../../../../helpers/backend";
import { useFetch } from "../../../../../../helpers/hooks";

const ShipmentwiseTracking = ({ data, loading }) => {
  const location = {
    pickup_location: {
      name: "Khulna Railway Station",
      address: "Jashore Road, Khulna, Bangladesh",
      position: {
        lat: 22.8202684,
        lng: 89.55797129999999,
      },
      location: {
        type: "Point",
        coordinates: [89.55797129999999, 22.8202684],
      },
    },
    drop_location: {
      name: "Nilkhet Rd, Dhaka 1000, Bangladesh",
      address: "Nilkhet Rd, Dhaka 1000, Bangladesh",
      position: {
        lat: 23.7339483,
        lng: 90.3929252,
      },
      location: {
        type: "Point",
        coordinates: [90.3929252, 23.7339483],
      },
    },
    waypoints: [
      {
        location: { lat: 22.8476, lng: 89.5475 }, // Example waypoint 1
        stopover: false,
      },
      {
        location: { lat: 23.01, lng: 90.3 }, // Example waypoint 2
        stopover: false,
      },
    ],
    midpoint_location: {
      name: "Midpoint Location",
      position: {
        lat: 23.27710835,
        lng: 89.97544825,
      },
      location: {
        type: "Point",
        coordinates: [89.97544825, 23.27710835],
      },
    },
    fare_amount: 2255.4,
  };
  
  const [tripId, setTripId] = useState("");
  const i18n = useI18n();
  const mapRef = useRef();
  const polylineRef = useRef();
  const polylineRef2 = useRef();

  useEffect(() => {
    if (tripId) {
      getTrip({ _id: tripId });
    }
  }, [tripId]);

  const mapContainerStyle = {
    width: "100%",
    height: 290, 
  };

  useEffect(() => {
    if (trip && mapRef.current) {
      const pickupLatLng = {
        lat:
          trip?.pickup_location?.position?.lat ||
          location?.pickup_location?.position?.lat,
        lng:
          trip?.pickup_location?.position?.lng ||
          location?.pickup_location?.position?.lng,
      };
      const dropLatLng = {
        lat:
          trip?.drop_location?.position?.lat ||
          location?.drop_location?.position?.lat,
        lng:
          trip?.drop_location?.position?.lng ||
          location?.drop_location?.position?.lng,
      };
      const midLatLng = {
        lat: location?.midpoint_location?.position?.lat,
        lng: location?.midpoint_location?.position?.lng,
      };
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(pickupLatLng);
      bounds.extend(dropLatLng);
    
      const map = new window.google.maps.Map(mapRef.current, {
        center: pickupLatLng,
        zoom: 8, // You can adjust the zoom level as needed
      });
      new window.google.maps.Marker({
        position: pickupLatLng,  // Specify the marker position
        map: map,  // The map where the marker will be placed
        title: "Pickup Location",  // Title on hover
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,  // Shape of the marker
          scale: 3,  // Size of the marker
          fillColor: "#01b78c",  // Your desired color (pickup color)
          fillOpacity: 1.0,  // Make sure the marker is fully opaque
          strokeColor: "#01b78c",  // Color of the border of the marker
          strokeWeight: 0.5,  // Width of the border
        },
      });
      
      
      new window.google.maps.Marker({
        position: dropLatLng,
        map: map,
        title: "Drop Location",
        icon:{
          url: "/images/locationpoint.png",  // Path to your custom image
          scaledSize: new window.google.maps.Size(20, 20),  
       }
      });
      new window.google.maps.Marker({
        position: midLatLng,
        map: map,
        title: "Midpoint Location",
        icon: {
          path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,  // Shape of the marker
          scale: 2.5,  // Size of the marker
          fillColor: "white",  // Your desired color (pickup color)
          fillOpacity: 1.0,  // Make sure the marker is fully opaque
          strokeColor: "#3f7df6",  // Color of the border of the marker
          strokeWeight: 2,  // Width of the border
        },
     
      });
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickupLatLng,
          destination: midLatLng,
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            const route = response.routes[0];
            const legs = route.legs[0];
            const steps = legs.steps;
            const path = steps.reduce((path, step) => {
              return path.concat(step.path);
            }, []);
            const polyline2 = new window.google.maps.Polyline({
              path: path,
              geodesic: true,
              strokeColor: "#01b78c",
              // strokeOpacity: 1.0,
              strokeWeight: 2,
            });
            polyline2.setMap(map);
            map.fitBounds(bounds);
            polylineRef2.current = polyline2;
          } else {
            console.error("Directions request failed due to " + status);
          }
        }
      );
      directionsService.route(
        {
          origin: midLatLng,
          destination: dropLatLng,
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            const route = response.routes[0];
            const legs = route.legs[0];
            const steps = legs.steps;
            const path = steps.reduce((path, step) => {
              return path.concat(step.path);
            }, []);
            const polyline = new window.google.maps.Polyline({
              path: path,
              geodesic: true,
              strokeColor: "#3f7df6",
              // strokeOpacity: 1.0,
              strokeWeight: 2,
            });
            polyline.setMap(map);
            map.fitBounds(bounds);
            polylineRef.current = polyline;
          } else {
            console.error("Directions request failed due to " + status);
          }
        }
      );
    }
  }, [trip]);
  

    return (
    <Card>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 px-4 ">
        <div className="h-[290px] overflow-y-auto">
          {/* title */}
          <div className="flex flex-wrap gap-2 justify-between items-center pb-5  sticky top-0 bg-white">
            <div className="flex gap-2 items-center">
              <div className="p-1  bg-white rounded-lg border-2 border-[#ebedf0] w-fit h-fit text-[#3682f3] text-[16px] shadow-sm">
                <FaTruckFast />
              </div>
              <span className="!text-[16px] !font-medium">
                {i18n.t("Ongoing delivery")}
              </span>
            </div>
          </div>
      
        </div>
        {/* tracking with map */}
       
          <div className="md:h-auto h-[296px] " style={mapContainerStyle} ref={mapRef}></div>
    
      </div>
    </Card>
  );
};

export default ShipmentwiseTracking;
