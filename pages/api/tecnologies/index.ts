import type { NextApiRequest, NextApiResponse } from "next";
import { db, CLASS_CONSTANTS } from "../../../database";
import { Tecnology } from "../../../models";
import { ITecnology } from "../../../interfaces";

type Data = { message: string } | ITecnology[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getTecnologies(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const getTecnologies = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { clase = "all" }:any = req.query;

  let condition = {};

  if (clase !== "all" && CLASS_CONSTANTS.validClass.includes(`${clase}`)) {
    condition = { clase };
  }

  await db.connect();

  const tecs = await Tecnology.find(condition)
    .select("title images description clase slug -_id")
    .lean();
  await db.disconnect();

  return res.status(200).json(tecs);
};
