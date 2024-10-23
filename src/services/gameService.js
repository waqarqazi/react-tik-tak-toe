// src/services/gameService.js
import client from "./client";

export const startGameAPI = async () => {
  try {
    const response = await client.post("/action/start-game");
    return response;
  } catch (error) {
    console.log("error", error);

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
    return response; // Ensure you're returning the data property
  } catch (error) {
    console.error("Failed to make move:", error);
    throw error;
  }
};

export const getProfileAPI = async () => {
  try {
    const response = await client.get("/action/profile");
    return response; // Ensure you're returning the user property
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};
