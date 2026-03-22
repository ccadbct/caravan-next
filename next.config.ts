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
        destination: "/menu/appetizers",
        permanent: true,
      },
      { source: "/salads", destination: "/menu/salads", permanent: true },
      {
        source: "/soups---sides",
        destination: "/menu/soups-and-sides",
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
