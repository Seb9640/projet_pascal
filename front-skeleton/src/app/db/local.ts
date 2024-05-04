import { EsperoDB } from 'esperodb';

// Example database structure
const dataStructure: any = [
  {
    'users': [
      { indexes: [
        { 'email': { unique: true } },
        { 'username': { unique: true } }
    ],
    primaryKey: 'id' },
    ],
  },
  {
    'movies': [
      { indexes: [],
    primaryKey: 'id' },
    ],
  },
  {
    'places': [
      { indexes: [],
    primaryKey: 'id' },
    ],
  },
  {
    'review': [
      { indexes: [{ 'entity_id': { unique: false } },],
    primaryKey: 'id' },
    ],
  },

];
const dbVersion: number = 1;

// Create an instance of the local database
export const localDb = new EsperoDB('review_app_db', dataStructure, dbVersion);
