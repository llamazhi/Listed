import dotenv from 'dotenv';
dotenv.config();

import { neon } from '@neondatabase/serverless';

// Database credentials
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PORT = 5432 } = process.env;

// Neon database connection
const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

/**
 * Fetches up to 10 records from the specified database table.
 * 
 * @param {string} table - The name of the targeted table.
 * @returns {Promise<any>} A promise resolving to the query result, or null if an error occurs.
 * 
 */
async function fetchAllData(table) {
  let sqlStatements = `SELECT * FROM ${table} LIMIT 10`;
  let res = null;
  try {
    res = await sql(sqlStatements); 
  } catch (error) {
    console.error("Error fetching data:", error); 
  } finally {
    console.log(`fetchAllData query successfully executed`); 
  }
  return res;
}

/**
 * Insert a single record into the targeted table
 * @param {string} table - The name of the targeted table.
 * @param {string[]} cols - An array of column names where data will be inserted.
 * @param {any[]} fields - An array of values corresponding to the columns.
 * @returns {Promise<any>} A promise resolving to the query result, or null if an error occurs.
 */
async function insertData(table, cols, fields) {
  let placeholders = fields.map((_, index) => `$${index + 1}`).join(', ');
  let sqlStatements = `INSERT INTO ${table} (${cols.map(String).join(', ')}) VALUES (${placeholders});`;
  let res = null;

  try {
    res = await sql(sqlStatements, fields);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    console.log(`insertData query successfully executed`);
  }
  return res;
}

/**
 * Update record(s) in the targeted table
 * @param {string} table - The name of the targeted table.
 * @param {Object} fields - An object where keys represent column names and values represent new data to update.
 * @returns {Promise<any>} A promise resolving to the query result, or null if an error occurs.
 * 
 */
async function updateData(table, fields) {
  let setStatements = Object.keys(fields)
    .map(key => `${key} = '${fields[key]}'`)
    .join(', ');

  let sqlStatements = `UPDATE ${table} SET ${setStatements};`;
  let res = null;

  try {
    res = await sql(sqlStatements); 
  } catch (error) {
    console.error("Error updating data:", error); 
  } finally {
    console.log(`updateData query successfully executed`); 
  }
  return res;
}

/**
 * Delete record(s) from the targeted table
 * @param {string} table - The name of the targeted table.
 * @param {Object} fields - An object where keys represent column names and values represent new data to update.
 * @returns {Promise<any>} A promise resolving to the query result, or null if an error occurs.
 * 
 */
async function deleteData(table, fields) {
  let keys = Object.keys(fields);
  let values = Object.values(fields);
  let whereClause = keys.map((key, index) => `${key} = $${index + 1}`).join(' AND ');
  let sqlStatements = `DELETE FROM ${table} WHERE ${whereClause};`;

  let res = null;
  try {
    res = await sql(sqlStatements, values);
  } catch (error) {
    console.error("Error deleting data:", error);
  } finally {
    console.log(`deleteData query successfully executed`);
  }
  return res;
}


export {fetchAllData, insertData, updateData, deleteData};
