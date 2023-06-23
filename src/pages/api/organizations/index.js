// --- import the Schema & Connection Function---
import dbConnect from "@/db/connect";
import Organizations from "@/db/models/organizations";

//-----------------
// This route is to get All the Organizations
//-----------------

export default async function handler(request, response) {
  // connect to DB
  await dbConnect();

  // --- Defining GET APIroute  ---
  if (request.method === "GET") {
    const organization = await Organizations.find();

    // nothing loaded?
    if (!organization || !products || !specificUser) {
      return response.status(404).json({ error: "no request done" });
    }

    // successfully loaded?
    return response.status(200).json([organization]);
  }
}
