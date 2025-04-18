import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus, { status } from 'http-status';
import { CustomerRoutes } from './app/modules/customers/customer.route';
import globalErrorHandler from './middlewares/globalErrorhandler';
import { BikeRoutes } from './app/modules/bikes/bike.route';

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/customers', CustomerRoutes);
app.use('/api/bikes', BikeRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Bike Servicing Management API running ."
    })
});

//not found route
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        statusCode: httpStatus.NOT_FOUND,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

app.use(globalErrorHandler);

export default app;