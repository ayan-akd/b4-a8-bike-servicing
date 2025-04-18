import { AppError } from "../../../errors/AppError";
import prisma from "../../../shared/prisma";
import httpStatus from "http-status";

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }
  return result;
};

const createCustomerIntoDB = async (data: any) => {
  const result = await prisma.customer.create({
    data,
  });
  return result;
};

const updateCustomerIntoDB = async (id: string, data: any) => {

  const isExist = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

const deleteCustomerFromDB = async (id: string) => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};  

export const CustomerService = {
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
  createCustomerIntoDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
};