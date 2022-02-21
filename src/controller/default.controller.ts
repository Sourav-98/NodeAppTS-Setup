
import { Router } from 'express';

import * as defaultService from 'service/default.service';

const defaultController = Router();

const asyncDelay = (time : number) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

defaultController.get('/', async(req, res) => {
    await asyncDelay(2000);
    res.status(200).send(defaultService.getDefaultResponse());
})

export default defaultController;
