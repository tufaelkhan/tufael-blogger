import { NextResponse } from "next/server";
import { connectToDb } from "@/utils/db";
import Post from "@/modules/post";
import Post from "@/modules/post";

export async function GET(req, {params: {id}}){
    //add logic here for getting by id
    try{
        const dbConnection = await connectToDb();
        const PostModel = await Post.findOne({
            _id: _id
        })
        if(!PostModel){
            return NextResponse.error(new Error('no post found'))
        }
        return NextResponse.json(PostModel)
    }catch(error){
        return NextResponse.error(new Error('Error Fetching post'))
    }
}