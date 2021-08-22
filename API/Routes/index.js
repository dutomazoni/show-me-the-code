import { Router } from 'express';
import plan_routes from "./plan.routes";
import price_routes from "./price.routes";

const router = Router();

router.use(price_routes)
router.use(plan_routes)


export default router;
