import dotenv from 'dotenv';
dotenv.config();

import { neon } from '@neondatabase/serverless';
import { fetchAllData, insertData, updateData, deleteData } from '../src/server/api.js';

// // Database credentials
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PORT = 5432 } = process.env;

// // Neon database connection
// const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

test('Test fetchAllData function', async () => {
  const consoleSpy = jest.spyOn(console, 'log');

  await fetchAllData('products');

  expect(consoleSpy).toHaveBeenCalledWith('fetchAllData query successfully executed');
});

test('Test insertData function', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const table = 'profiles';
  const cols = ['first_name', 'last_name']; 
  const fields = ['Revy', 'Lee']; 

  await insertData(table, cols, fields);

  expect(consoleSpy).toHaveBeenCalledWith('insertData query successfully executed');
});

test('Test updateData', async () => {
  const consoleSpy = jest.spyOn(console, 'log');

  const table = 'profiles';
  const fields = { first_name: 'Roku', last_name: 'Okashima' }; // Example fields to update

  await updateData(table, fields);

  expect(consoleSpy).toHaveBeenCalledWith('updateData query successfully executed');
});

test('Test deleteData', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const table = 'profiles';
  const fields = { prid: 1 }; // Example condition for deletion
  await deleteData(table, fields);

  expect(consoleSpy).toHaveBeenCalledWith('deleteData query successfully executed');
});

