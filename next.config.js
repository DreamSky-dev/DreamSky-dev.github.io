/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  output: 'export', // This enables static HTML export
  trailingSlash: true, // Ensures paths have trailing slashes (required by GitHub Pages)
};
