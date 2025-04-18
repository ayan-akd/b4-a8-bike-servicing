import { AppError } from "../../../errors/AppError";
import prisma from "../../../shared/prisma";
import httpStatus from "http-status";


const getAllBikeFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const createBikeIntoDB = async (data: any) => {
  const result = await prisma.bike.create({ data });
  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
  }
  return result;
};

export const BikeService = {
  getAllBikeFromDB,
  createBikeIntoDB,
  getSingleBikeFromDB,
};
