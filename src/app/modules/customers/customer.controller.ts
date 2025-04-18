import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { CustomerService } from "./customer.service";
import httpStatus from "http-status";

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const getSingleCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CustomerService.getSingleCustomerFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  }
);
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.deleteCustomerFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: null,
  });
});

export const CustomerController = {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};