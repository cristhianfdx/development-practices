import Firebase from 'firebase';
import config from './config';

export const db = Firebase.initializeApp(config).database(); 
