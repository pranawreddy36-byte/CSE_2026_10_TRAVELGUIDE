// CO2: JavaScript & TypeScript Engineering - pure utility module normalizes external asset URLs.
export function wikimediaFile(fileName: string) {
  const normalizedName = encodeURIComponent(fileName).replace(/%20/g, "_");

  return `https://commons.wikimedia.org/wiki/Special:FilePath/${normalizedName}?width=1400`;
}
