import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
    'db-social-media',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
)

export default sequelize;
