// import { ErrorRequestHandler } from 'express';
// import { AppError } from '../errors/AppError';


// const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   let statusCode = 500;
//   let message = 'Something went wrong!';

//   if (err instanceof AppError) {
//     statusCode = err?.statusCode;
//     message = err.message;
//   }

//   else if (err instanceof Error) {
//     message = err.message;
//   }

//   res.status(statusCode).json({
//     success: false,
//     status: statusCode,
//     message,
//     stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
//   });
// };

// export default globalErrorHandler;
