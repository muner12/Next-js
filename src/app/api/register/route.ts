import User from "@/utils/model/register/register";
import {connectToDB} from "@/utils/dbConnection/connections";

export const POST=async (request:any,res:any)=>{
    try {
        
        connectToDB();

    } catch (error) {
        
    }


}