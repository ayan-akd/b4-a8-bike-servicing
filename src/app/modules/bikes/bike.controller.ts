import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { BikeService } from "./bike.service";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllBikeFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BikeService.getSingleBikeFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

export const BikeController = {
  getAllBikes,
  getSingleBike,
  createBike,
};