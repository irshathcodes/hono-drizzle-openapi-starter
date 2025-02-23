export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DB_PASSWORD: string;
      DB_USER: string;
      DB_NAME: string;
      DB_PORT: string;
      DATABASE_URL: string;
      FE_ORIGIN: string;
      BE_PORT: string;
    }
  }
}
