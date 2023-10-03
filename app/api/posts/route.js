import Post from "@/modules/post";
import { connectToDb } from "@/utils/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req){
    const dbConnection = await connectToDb();
    try{
        const PostModel = await Post.find();
        if(!PostModel){
            return NextResponse.error(
                new Error('not post found')
            );
        }
        return NextResponse.json(PostModel)
    }catch(error){
        return NextResponse.error(new Error('Error fetching posts'))
    }
}