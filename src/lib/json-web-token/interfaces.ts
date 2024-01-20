import { Secret, SignOptions } from 'jsonwebtoken';

export type IPayload = string | object | Buffer;
export type ISecret = Secret;
export type ISignOptions = SignOptions;