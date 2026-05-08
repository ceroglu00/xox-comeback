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