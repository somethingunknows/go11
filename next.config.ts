import type { NextConfig } from "next";

const CANONICAL_HOST = "gopay11apk.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const LEGACY_HOSTS = [
  "www.gopay11apk.com",
  "goplay11-apk.com",
  "www.goplay11-apk.com",
];

const nextConfig: NextConfig = {
  async redirects() {
    const domainRedirects = LEGACY_HOSTS.map((host) => ({
      source: "/:path*",
      has: [
        {
          type: "host" as const,
          value: host,
        },
      ],
      destination: `${CANONICAL_ORIGIN}/:path*`,
      permanent: true,
    }));

    return [
      ...domainRedirects,
      {
        source: "/blog/fantasy-cricket-scoring-system-explained",
        destination: "/blog/fantasy-cricket-scoring-system-guide-2026",
        permanent: true,
      },
      {
        source: "/blog/fantasy-cricket-bankroll-management-guide",
        destination: "/blog/fantasy-cricket-bankroll-management-complete-guide-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
