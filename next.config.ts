import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/eastern-european-cuisine",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      {
        source: "/central-asian-cuisine",
        destination: "/menu/central-asian",
        permanent: true,
      },
      {
        source: "/appetizers",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      { source: "/salads", destination: "/menu/eastern-european", permanent: true },
      {
        source: "/soups---sides",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      {
        source: "/menu/appetizers",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      {
        source: "/menu/salads",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      {
        source: "/menu/soups-and-sides",
        destination: "/menu/eastern-european",
        permanent: true,
      },
      {
        source: "/coffees---drinks",
        destination: "/menu/coffees-and-drinks",
        permanent: true,
      },
      { source: "/blog", destination: "/news", permanent: true },
      { source: "/10--off", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
