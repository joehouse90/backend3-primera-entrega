import { Router } from "express";
import {
  getMockUsersService,
  getMockPetsService,
  generateAndInsertDataService,
} from "../services/mocks.service.js";

const router = Router();

router.get("/mockingusers", (req, res) => {
  try {
    const users = getMockUsersService(50);

    res.status(200).json({
      status: "success",
      payload: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/mockingpets", (req, res) => {
  try {
    const pets = getMockPetsService(20);

    res.status(200).json({
      status: "success",
      payload: pets,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;

    const usersQty = Number(users);
    const petsQty = Number(pets);

    if (isNaN(usersQty) || isNaN(petsQty)) {
      return res.status(400).json({
        status: "error",
        message: "Los parámetros users y pets deben ser numéricos",
      });
    }

    const result = await generateAndInsertDataService(usersQty, petsQty);

    res.status(200).json({
      status: "success",
      message: "Datos generados e insertados correctamente",
      payload: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;