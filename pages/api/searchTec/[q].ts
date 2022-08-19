import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { ITecnology } from "../../../interfaces";
import { Tecnology } from "../../../models";

type Data = { message: string } | ITecnology[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchTecs(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}
const searchTecs = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = "" } = req.query;

  // if (q.length === 0) {
  //   return res
  //     .status(400)
  //     .json({ message: "Debe especificar una query de busqueda" });
  // }

  q = q.toString().toLowerCase();

  await db.connect();
  const tecs = await Tecnology.find({
    $text: { $search: q },
  })
    .select("title description clase slug images tags -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(tecs);
};
