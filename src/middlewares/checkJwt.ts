import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    //Get the jwt token from the head
    if (!req.get('Authorization')) {
        res.status(401).send({ 'message': "Format token tidak sesuai, Format header harus Authorization", 'status': 401 });
        return;
    }
    
    let authorization = req.get('Authorization');
    let authorizationArr = authorization.split(' ');
    if (authorizationArr[0] !== 'Bearer') {
        res.status(401).send({ 'message': "Format header harus Bearer Schema", 'status': 401 });
        return;
    }

    let token = authorizationArr[1];
    let jwtPayload;

    //Try to validate the token and get data
    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send({ 'message': 'Token is not valid', 'status': 401});
        return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);

    //Call the next middleware or controller
    next();
};