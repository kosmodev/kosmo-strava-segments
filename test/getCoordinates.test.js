const geoCoordinates = require("../getCoordinates");

describe("get Coordinates from openstreetmao api", () => {
  it("Should be is a array of objects", done => {
    geoCoordinates
      .geoByCityCoordinates("Livorno Italy")
      .then(function(response) {
        expect(Array.isArray(response.data)).toEqual(true);
      });
    done();
  });

  it("Should contain an array of objects", done => {
    geoCoordinates
      .geoByCityCoordinates("Livorno Italy")
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
