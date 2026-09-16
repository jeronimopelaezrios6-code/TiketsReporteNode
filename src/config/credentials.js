import dotenv from 'dotenv';

// Cargar las variables del archivo .env
dotenv.config();

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;

export const OBJ_CONN = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT
};

