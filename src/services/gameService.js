// src/services/gameService.js
import client from "./client";

export const startGameAPI = async () => {
  try {
    const response = await client.post("/action/start-game");
    console.log("response", response);

    return response;
  } catch (error) {
    console.error("Failed to start game:", error);
    throw error;
  }
};

export const makeMoveAPI = async ({ row, col, player }) => {
  try {
    const response = await client.post("/action/make-move", {
      row,
      col,
      player,
    });
    return response;
  } catch (error) {
    console.error("Failed to make move:", error);
    throw error;
  }
};

export const getProfileAPI = async () => {
  try {
    const response = await client.get("/action/profile");
    return response.user;
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};
