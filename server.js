const Sequelize = require('sequelize');

const sequelize = new Sequelize(
        "sequelize_tuts_db", //database name
        "root",             //user 
        "fsocns!ntern22",   //password
        {
            host: "127.0.0.1",
            dialect: "mysql"
        }
)


// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

const sequelizeTest = async () => {
    try { await sequelize.authenticate();
    } catch (err) {
        console.error("Unable to connect to the database: ", err);
    }
}
sequelizeTest();