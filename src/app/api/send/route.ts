import { NextResponse } from "next/server";
import { Resend } from "resend";
export  async function GET(){
    const resend=new Resend(process.env.RESEND_API_KEY);
    console.log(process.env.RESEND_API_KEY);
try{

    const {data}= await resend.emails.send({
        from:"bakhtmuner06@gmail.com",
        to:"ubunerstudent@gmail.com",
        subject:"Next Email",
        html:"<h1>Hello This is a test Email</h1>"

    })

    return NextResponse.json({'message':data});
}catch{
    return NextResponse.json({"message":"Error"})
}
}