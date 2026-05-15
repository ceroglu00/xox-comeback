import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://ubpcxnbsygdltdbxyhkj.supabase.co"
const supabasePublishableKey = "sb_publishable_mQ8gu7143I3FJH9WuXUOFw_Q8Cs5A0c"
export const supabase = createClient(supabaseUrl, supabasePublishableKey)


export async function GetUser(username, password) {
    var {data} = await supabase.from("users")
        .select()
        .eq("username", username)
        .eq("password", password);


    if (data && data.length > 0) {
        return data[0];
    } else {
        return null;
    }


}

export async function CreateUser(username, password) {
    var {success} = await supabase.from("users").insert(
        {
            username,
            password,
        }
    )
    return success;
}

export async function CreateLobby(player_1) {
    var {success} = await supabase.from("rooms").insert(
        {
            player_1
        }
    )
    return success;
}

export async function GetRooms() {
    var {data} = await supabase.from("rooms")
        .select()
        .order("id", {ascending: true})
    ;
    if (data && data.length > 0) {
        return data;
    } else {
        return null;
    }
}

export async function GetRoom(id) {
    var {data} = await supabase.from("rooms")
        .select()
        .eq("id", id)
        .single();
    if (data) {
        return data;
    } else {
        return null;
    }
}

export async function MakePlayerJoin(id, player_2) {
    console.log(id)
    console.log(player_2)
    var {success} = await supabase.from("rooms")
        .update({
            player_2,
        })
        .eq("id", id)

    return success;
}

export async function CreateGame(roomId, boardState) {
    var {data, error} = await supabase.from("game").insert(
        {
            boardState: boardState,
            room: roomId,
            turn: 0
        }
    )
        .select()
        .single()
    return data;
}

export async function GetGame(gameId) {
    var {data, error} = await supabase.from("game").select()
        .eq("id", gameId).single();
    return data
}

export async function SetGame(gameId, board, nextPlayer) {
    var {data, error} = await supabase.from("game").update(
        {boardState: board, turn: nextPlayer}
    )
        .eq("id", gameId);
    return data
}
