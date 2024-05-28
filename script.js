
import * as turf from "@turf/turf";
import data from "./data.js"
console.log(data)


function isPolygons(l, la, Data) {
    var point = turf.point([l, la]);

    for (var i = 0; i < Data.features.length; i++) {
        var feature = Data.features[i];
        var geometry = feature.geometry;
        if (geometry.type === "Polygon") {
            if (turf.booleanPointInPolygon(point, geometry)) {
                return true;
            }
        } 
    }

    return false;
}

var latitude = 40.718;
var longitude = -74.060;

if (isPolygons(latitude, longitude, data)) {
    console.log("The point is inside one of the Polygons.");
} else {
    console.log("The point is not inside any of the Polygons.");
}
