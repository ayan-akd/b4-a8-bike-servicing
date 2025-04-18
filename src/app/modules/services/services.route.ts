import { Router } from 'express';
import { ServiceController } from './services.controller';

const router = Router();

// Define routes
router.get('/', ServiceController.getAllServices);

router.get('/status', ServiceController.dueServices);

router.post('/', ServiceController.createService);

router.get('/:id', ServiceController.getSingleService);

router.put('/:id/complete', ServiceController.updateService);

export const ServiceRoutes = router;
