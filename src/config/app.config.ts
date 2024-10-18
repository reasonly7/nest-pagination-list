import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    port: Number(process.env.APP_PORT || 3000),
    globalPrefix: process.env.APP_GLOBAL_PREFIX || '',
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
  };
});
