import { Router } from 'express';
import { BikeController } from './bike.controller';

const router = Router();


router.get('/', BikeController.getAllBikes);

router.post('/', BikeController.createBike);

router.get('/:id', BikeController.getSingleBike);

export const BikeRoutes = router;
