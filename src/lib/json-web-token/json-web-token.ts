import { sign, verify } from 'jsonwebtoken';
import { IPayload, ISecret,ISignOptions } from './interfaces'

const { 
    JWT_TOKEN,
    JWT_EXPIRES_TIME,
    JWT_EXPIRES_FORMAT
} = process.env;

export const createToken = (data: IPayload, expiresIn = `${JWT_EXPIRES_TIME}${JWT_EXPIRES_FORMAT}`) => {
    const secret: ISecret = JWT_TOKEN || ''
    const options: ISignOptions = {
        algorithm: 'HS512',
        expiresIn: expiresIn,
    };
    return sign(data, secret, options);
};

export const verifyToken = (token: string) => {
    const secret: ISecret = JWT_TOKEN || ''
    try {
        verify(token, secret);
    } catch (err) {
        throw new Error("Token invalid!");
    }
};
