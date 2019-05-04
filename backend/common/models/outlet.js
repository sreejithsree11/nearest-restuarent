'use strict';

module.exports = function(Outlet) {

    /**
     * API for getting outlets of corresponding address.
     * @param { Array } coordinates
     * @return { Promise<{totalCount: Number, data: array}> }
     */
    Outlet.getOutlets = async(coordinates) => {
        // Getting the collection details.
        var collection = Outlet.getDataSource().connector.collection("Outlet");
        // Setting the Filter.
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
        return firstElement.properties;
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
                        coordinates: [
                            16.343130,
                            48.194908
                        ]
                    },
                    $maxDistance: 100
                }
            }
        };
    }
};
