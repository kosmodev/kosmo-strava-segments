const geoCoordinates = require("../getCoordinates");
const cityNation = 'Livorno Italy';

describe("get Coordinates from openstreetmap api", () => {
  it("Should be is a array of objects", done => {
    geoCoordinates
      .geoByCityCoordinates(city)
      .then(function(response) {
        expect(Array.isArray(response.data)).toEqual(true);
      });
    done();
  });

  it("Coordinates from openstreetmap Should contain an array of objects", done => {
    geoCoordinates
      .geoByCityCoordinates(cityNation)
      .then(function(response) {
        response.data.forEach(dataObj => {
          expect(typeof dataObj).toEqual("object");
          expect(Object.keys(dataObj).sort()).toEqual([
            "address",
            "boundingbox",
            "class",
            "display_name",
            "icon",
            "importance",
            "lat",
            "licence",
            "lon",
            "osm_id",
            "osm_type",
            "place_id",
            "type"
          ]);
          done();
        });
      });

  }, 60000);
});
