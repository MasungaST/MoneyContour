import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; // Assuming you have a sequelize instance

class Profile extends Model {
    public ProfileID!: number;
    public Name!: string;
    public Surname!: string;
    public DateOfBirth!: Date;
    public Gender!: string;
    public Email!: string;
    public Password!: string;
    public Image!: string;
}

Profile.init(
    {
        ProfileID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DateOfBirth: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Profile',
        tableName: 'profiles',
    }
);

export default Profile;
