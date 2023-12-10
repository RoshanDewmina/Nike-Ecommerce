/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "cdn.sanity.io**",
            },
          ],
        },
        typescript: {
            ignoreBuildErrors: true,
        },
}

module.exports = nextConfig
