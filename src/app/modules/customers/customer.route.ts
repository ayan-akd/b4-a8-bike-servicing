import { Router } from 'express';
import { CustomerController } from './customer.controller';

const router = Router();

router.get('/', CustomerController.getAllCustomers);

router.get('/:id', CustomerController.getSingleCustomer);

router.post('/', CustomerController.createCustomer);

router.put('/:id', CustomerController.updateCustomer);

router.delete('/:id', CustomerController.deleteCustomer);

export const CustomerRoutes = router;
