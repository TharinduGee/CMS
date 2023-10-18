import {TOKEN_KEY} from '../config.js';
import jwt from 'jsonwebtoken';

function createSecretToken(id){
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createSecretToken;