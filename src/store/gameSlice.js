import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  startGameAPI,
  makeMoveAPI,
  getProfileAPI,
} from "../services/gameService";

// Initial state for the game slice
const initialState = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  currentPlayer: "X",
  sessionId: null,
  status: "idle",
  error: null,
  winner: null,
  wins: 0,
  loses: 0,
  draws: 0,
  email: null,
  firstName: null,
  lastName: null,
};

// Async thunk for starting a game
export const startGame = createAsyncThunk(
  "game/startGame",
  async (_, { rejectWithValue }) => {
    try {
      const response = await startGameAPI();
      return response;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to start the game";
      return rejectWithValue(errorMessage);
    }
  }
);

// Async thunk for making a move
export const makeMove = createAsyncThunk(
  "game/makeMove",
  async ({ row, col, player }, { rejectWithValue }) => {
    try {
      const response = await makeMoveAPI({ row, col, player });
      return response;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to make move";
      return rejectWithValue(errorMessage);
    }
  }
);

// Async thunk for fetching user profile (wins, loses, draws, and other info)
export const getProfile = createAsyncThunk(
  "game/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfileAPI();
      return response;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to fetch profile";
      return rejectWithValue(errorMessage);
    }
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      state.currentPlayer = "X";
      state.sessionId = null;
      state.status = "idle";
      state.error = null;
      state.winner = null;
    },
    changePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
  },
  extraReducers: (builder) => {
    // Handle start game
    builder
      .addCase(startGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(startGame.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.board = action.payload.board;
        state.sessionId = action.payload.sessionId;
        state.error = null;
        state.winner = null;
      })
      .addCase(startGame.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to start the game";
      });

    // Handle make move
    builder
      .addCase(makeMove.pending, (state) => {
        state.status = "loading";
      })
      .addCase(makeMove.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.board = action.payload.board;
        state.winner = action.payload.winner;
        state.error = null;
        if (state.winner) {
          state.currentPlayer = "X"; // Reset to X after a winner is found
        }
      })
      .addCase(makeMove.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to make move";
      });

    // Handle fetching user profile
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        console.log("action", action);

        state.status = "succeeded";
        state.wins = action.payload?.user?.wins;
        state.loses = action.payload?.user?.loses;
        state.draws = action.payload?.user?.draws;
        state.email = action.payload?.user?.email;
        state.firstName = action.payload?.user?.firstName;
        state.lastName = action.payload?.user?.lastName;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch profile";
      });
  },
});

export const { resetGame, changePlayer } = gameSlice.actions;

export default gameSlice.reducer;
