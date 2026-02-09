import { profiles } from "@/constants";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Profile not found",
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      data: profile,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
