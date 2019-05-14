# Nearest Restaurants

Weekend project to learn and develop a app for finding Nearest Restaurants.
Its using constant set of geographical coodinates for testing(Used GeoJSON).


Frontend which allows a user to enter and submit an address and then displays the outlet identifier returned from the API.

Created an API which accepts an address as an input parameter and returns the correct outlet identifier for the address.

Addresses are stored in MongoDB as GeoJSON and retrieved using  Geospatial Queries.


Backend ### :
Language : Node - v8.9.4

Package Manager : NPM - v6.8.0

Framework : LoopBack - v3.x

Database : MongoDB

Environment Variable Management : dotenv

Local Setup Clone the git repository Install project dependencies npm install Copy the ecosystm.env from conf directory to the user's home directory e.g. /Users/mark/ To start the server node .

I have already converted the KML file into GeoJSON and stored a JSON file. It will insert to db when you tried to start the project.

Database ###

Please create a mongoDB with name and update the same with ENV file. after starting the project please createIndex to the collection(Outlet)

 db.Outlet.createIndex( { geometry : "2dsphere" } )
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 1,
    "numIndexesAfter" : 2,
    "ok" : 1
}
Frontend
React - 16.X
