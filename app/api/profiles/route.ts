import { profiles } from "@/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, data: profiles },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch profiles" },
      { status: 500 }
    );
  }
}
