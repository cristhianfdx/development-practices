module.exports = (sequelize, DataType) =>{

    const Users = sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        email:{
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: false
            }
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.Tasks);
    };

    return Users;

};