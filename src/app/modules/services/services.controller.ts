import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { ServiceService } from "./services.service";
import httpStatus from "http-status";
import sendResponse from "../../../utils/sendResponse";

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceService.getSingleServiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.createServiceInDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceService.updateServiceInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

const dueServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getDueServicesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceController = {
  getAllServices,
  getSingleService,
  createService,
  updateService,
  dueServices,
};