import {price_routes} from '../Controllers';
import { Router } from 'express';

let router = Router();

router.get(
    '/price',
    price_routes.get_price,
);

export default router;
