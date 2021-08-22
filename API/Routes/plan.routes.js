import { Router } from 'express';
import {plan_routes} from '../Controllers';

let router = Router();

router.get(
    '/plan',
    plan_routes.get_plan,
);
router.get(
    '/plans',
    plan_routes.get_plans,
);

export default router;
