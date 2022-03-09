// import Sequelize for create the conection with the db
import {Sequelize} from 'sequelize-typescript';
// import the config to set the new Sequelize conection like a object
import config from './lib/config';

export const sequelize = new Sequelize({
	dialect: 'postgres',
	database: config.dbName,
	password: config.dbPassword,
	username: config.dbUser,
	storage: ':memory:',
	models: [__dirname + '/models'],
});