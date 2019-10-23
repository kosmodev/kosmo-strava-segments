const axios = require("axios");
const OPEN_STREET_MAP_DOMAIN = 'https://nominatim.openstreetmap.org/';
const geoByCityCoordinates = async (q) => {
    const params = new URLSearchParams({
      q,
      format: "json",
      polygon: 1,
      addressdetails: 1,
      limit: 1,

    });

    const ENDPOINT = `${OPEN_STREET_MAP_DOMAIN}search?${params.toString()}`;
    const location = await axios.get(ENDPOINT);

    if (!location.data) {
        throw new Error(`No response for Address: ${q}`);
    }
    return location;
  };

  module.exports.geoByCityCoordinates = geoByCityCoordinates;
