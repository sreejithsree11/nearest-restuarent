'use strict';

module.exports = function(Outlet) {

    /**
     * API for getting outlets of corresponding address.
     * @param { String } lat
     * @param { String } lan
     * @return { Promise<{totalCount: Number, data: array}> }
     */
    Outlet.getOutlets = async(lat, lan) => {
        // Getting the collection details.
        var collection = Outlet.getDataSource().connector.collection("Outlet");
        // Setting the Filter.
        const coordinates = [lan, lat];
        const filter = getFilter(coordinates);
        // Fetching the records.
        var dataSet = await collection.find(filter, function(err, res) {
            return res;
        }).toArray(); 

        // returning first element.
        const outletDetails = getReleventData(dataSet);
        return outletDetails;
    };

    /**
     * Functiont o filter first data with relevent details.
     * @param { Array } dataSet 
     * @return { Object } 
     */
    function getReleventData(dataSet) {
        const firstElement = dataSet[0];
        return firstElement && firstElement.properties;
    }

    /**
     * Fucntion to set filters.
     * @param { Array } coordinates 
     * @return { Object }
     */
    function getFilter(coordinates) {
        return {
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coordinates
                    },
                    $maxDistance: 100
                }
            }
        };
    }
};
