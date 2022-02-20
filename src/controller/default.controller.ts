
import { Router } from 'express';

import * as defaultService from 'service/default.service';

const defaultController = Router();

defaultController.get('/', (req, res) => {
    res.status(200).send(defaultService.getDefaultResponse());
})

export default defaultController;
