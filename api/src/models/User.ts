import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

// @Table ---> decorator, its like a interface for the dbs, a design patron
// @Table ---> condition the class and his execution, talks with the db and create the table
@Table
export class User extends Model<User> {

    // @Colums ---> for create and set the types of data of the column(property)
    @Column
	name!: string;

	@Column
	lastName!: string;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;

    // THE RELATIONSHIPS SHOULD ALSO GO HERE, NOT IN A FILE ON THE OUTSIDE.
};