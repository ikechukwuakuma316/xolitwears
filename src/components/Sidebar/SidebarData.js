import React from "react";
import {
  FaStar,
  FaLocationArrow,
  FaCertificate,
  FaClock,
  FaWindows,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Popular",
    icon: <FaStar />,
    link: "/popular",
  },
  {
    title: "Pickup",
    icon: <FaLocationArrow />,
    link: "/pickup",
  },
  {
    title: "Blitz Buy",
    icon: <FaCertificate />,
    link: "/blitzbuy",
  },
  {
    title: "Brands",
    icon: <FaClock />,
    link: "/brands",
  },
  {
    title: "Categories",
    icon: <FaWindows />,
    link: "/categories",
  },
];
