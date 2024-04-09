const config = {
  secretKey: 'SuperManisMyhero',
  databaseURL: process.env.MONGODB_URL || 'mongodb://localhost:27017/mydb'
};
module.exports = config;