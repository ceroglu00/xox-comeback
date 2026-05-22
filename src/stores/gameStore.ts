// Utilities
import {defineStore} from 'pinia'
import router from "@/router";
import {
    GetUser,
    CreateUser,
    CreateLobby,
    GetRooms,
    MakePlayerJoin,
    CreateGame,
    GetGame,
    GetRoom, SetGame, CheckIfGameExists
} from '../database/database.ts'
import {Notification} from "@/helpers/notificationHelper.ts";

export const useGameStore = defineStore('gameStore', {
    state: () => ({
        rooms: [],
        currentGame: null,
        currentRoom: null,
        gameId: null,


    }),
    actions: {
        async CreateLobby(player) {
            try {
                await CreateLobby(player);
                Notification("Oda kuruldu");

            } catch (ex) {
                Notification("Oda kurulamadı", "error");
            }

        },
        async GetLobbies() {
            try {
                this.rooms = await GetRooms();

            } catch (ex) {
            }
        },
        async GetLobby(id) {
            try {
                this.currentRoom = await GetRoom(id);

            } catch (ex) {
            }
        },
        async MakePlayerJoin(id, player) {
            await MakePlayerJoin(id, player);
        },
        async CreateGame(roomId, boardState) {
            var data = await CreateGame(roomId, boardState);
            this.gameId = data.id;
            await this.GetLobby(data.room);
        },
        async GetGame(gameId) {
            this.currentGame = await GetGame(gameId);
        },
        async SetGame(gameId,boardState,nextPlayer){
            await SetGame(gameId,boardState,nextPlayer);
        },
        async CheckIfGameExists(roomId){

            var data = await CheckIfGameExists(roomId);

            if (data){
                this.gameId = data.id;
                return true;
            }
            return false;
        }
    }
})
