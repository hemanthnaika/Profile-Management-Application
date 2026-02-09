import { profiles } from "@/constants";

export async function GET() {
  return new Response(
    JSON.stringify({
      success: true,
      total: profiles.length,
      data: profiles,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
