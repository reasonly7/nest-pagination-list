import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    type: 'mysql',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: Number(process.env.DATABASE_PORT || 3306),
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    synchronize: process.env.NODE_ENV === 'development',
  };
});
