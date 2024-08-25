const {Sequelize, DataTypes}=require('sequelize');
const sequelize = require('../config/database');
const book= sequelize.define('book',{
    bookID: { 
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    inventoryNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    rating:{
        type: DataTypes.FLOAT,
        allowNull:false,
    
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    stripeID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
    },

} ,{
    tableName:'book',
    timestamp:false
}
);
module.exports=book;

