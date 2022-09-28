//const Sequelize = require('sequelize');
//import {Sequelize, Op, DataTypes, Model} from "sequelize";
import Sequelize from "sequelize";
import { UUIDV4 } from "sequelize";
import {Model, DataTypes, Op} from 'sequelize';


const exportSequelize = () =>{
   const sequelize = new Sequelize(
      "sequelize_tuts_db", //database name
      "root",             //user 
      "fsocns!ntern22",   //password: 
      {
          host: "127.0.0.1", //
          port: 3306,
          dialect: "mysql"
      }
   )


   const sequelizeTest = async () => {
   try { 
         await sequelize.authenticate();
   } catch (err) {
         console.error("Unable to connect to the database: ", err);
   }
   }
   sequelizeTest();



   class User extends Model {}
   User.init(
   {
      _id:{
         type: Sequelize.UUID,
         primaryKey: true,
         defaultValue: UUIDV4
      },
      username: {
         type: Sequelize.STRING
      },
      password: {
         type: Sequelize.STRING
      },
      age: {
         type: Sequelize.INTEGER
      }, 
   },

   { sequelize, modelName: 'User', tableName: 'userstable', timestamps: false}

   )

   class AdditionalInfo extends Model {}
   AdditionalInfo.init(
   {
      _id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      birthDate: {
         type: Sequelize.DATE
      },
      motherName: {
         type: Sequelize.STRING
      },
      fatherName: {
         type: Sequelize.STRING
      }, 
      userID:{
         type: Sequelize.INTEGER
      }
   },

   { sequelize, modelName: 'AdditionalInfo', tableName: 'existingtable', timestamps: false}

   )

   const syncThis = async ()=>{
   try {
      await sequelize.sync();
   } catch (err){
      console.log("error: ", err)
   }
   }

   syncThis();

   //return this.sequelize;
   return sequelize;
}


export default exportSequelize();
// const selectQuery = async ()=>{
//    let result1 = await sequelize.models.AdditionalInfo.findAll({raw:true})
//    let result2 = await sequelize.models.AdditionalInfo.findAll({
//       where: {
//          _id: 1
//       },
//       raw: true
//    })

//    console.log(result1)
// }

// selectQuery();










