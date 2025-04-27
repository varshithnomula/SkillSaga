import { Webhook } from "svix";
import User from "../models/user";

//API controller fnc to  manage clerk user with database

export const clerkWebhooks =async()=>{
    try{
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.header["svix-timestamp"],
            "svix-signature":req.header["svix-signature"]
        })

        const {data,type}=req.boby

        switch(type){
            case 'user.created':{
                const userData ={
                    _id:data.id,
                    email:data.email_address[0].email_address,
                    name:data.frist_name+" "+data.last_name,
                    imageUrl:data.image_url,
                }
                await User.create(userData)
                resizeBy.json({})
                break;
            }

            case 'user.update':{
                consuserData={
                    email:data.email_address[0].email_address,
                    name:data.first_name+" "+data.last_name,
                    imageUrl:data.image_url,
                }

                await User.findByIdAndUpdate(data.id,userData)
                resizeBy.json({})
                break;
            }

            case 'user.delete':{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
            default:
                break;
        }
    }
    catch(error){
        res.json({sucess:false,message:error.message})
    }
}