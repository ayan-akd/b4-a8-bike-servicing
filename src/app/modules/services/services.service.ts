import { AppError } from "../../../errors/AppError";
import prisma from "../../../shared/prisma";
import httpStatus from "http-status";

const getAllServiceFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();

  return result;
};

const createServiceInDB = async (data: any) => {
  const result = await prisma.serviceRecord.create({
    data,
  });

  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service record not found");
  }

  return result;
};

const updateServiceInDB = async (id: string, payload: any) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      status: 'done',
      completionDate: payload?.completionDate
        ? new Date(payload?.completionDate)
        : new Date(),
    },
  });

  return result;
};

const getDueServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          OR: [{ status: 'pending' }, { status: 'in_progress' }],
        },
        {
          serviceDate: {
            lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      ],
    },
  });

  return result;
};

export const ServiceService = {
  getAllServiceFromDB,
  createServiceInDB,
  getSingleServiceFromDB,
  updateServiceInDB,
  getDueServicesFromDB,
};
