const MongoClient = require('mongodb').MongoClient;
//TO BE CHANGED WHEN IN PRODUCTION
const USER_NAME = "robbin113";
//TO BE CHANGED WHEN IN PRODUCTION
const PASSWORD = "bajamaja";
//DEFAULT DATABASE NAME
const D_DB = "pictionary-db";
//DEFAULT COLLECTION NAME
const D_COLLECTION = "category";

//GET ALL DOCUMENTS FROM THE DATABASE
exports.getDocuments = async (dbName = D_DB, collName = D_COLLECTION) => {
  return await resultSet(dbName, collName, {}, {projection: {_id: 0}});
}

//USED TO DIFFRENTIATE THE DIFFERENT CALLS TO THE DATABASE FROM THE EXPORTET METHODS
async function resultSet(dbName, collName, query, projection = {}) {
  const client = await getConnection();
  const collection = getCollection(client, dbName, collName);

  try {
    const items = await collection.find(query, projection).toArray();
    return items;
  } catch (err) { throw new Error("Could not find database or collection"); }
  finally { client.close(); }
}

//CONNECT TO DATABASE AND RETURN A CLIENT
function getConnection() {
  const URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@words.slp99.mongodb.net/${D_DB}?retryWrites=true&w=majority`;
  return MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

//RETURN A SPECIFIED COLLECTION
function getCollection(client, dbName, dbColl) {
  const db = client.db(dbName);
  return db.collection(dbColl);
}