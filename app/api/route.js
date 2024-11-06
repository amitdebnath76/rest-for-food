import { connectionStr } from "@/app/lib/db";
import { restaurentSchema } from "@/app/lib/restaurentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);

  const data = await restaurentSchema.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let result;
  if (payload.login) {
    result = await restaurentSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
  } else {
    let restaurent = new restaurentSchema(payload);
    result = await restaurent.save();
  }

  console.log(payload);
  return NextResponse.json({ result, success: true });
}
// export async function POST(){
//     return NextResponse.json({return:true})
// }
