export async function POST(request: Request) {
  const formData = await request.formData();

  const files = formData.getAll("files");

  console.log("Files received:", files.length);

  return Response.json({
    success: true,
    filesReceived: files.length,
  });
}