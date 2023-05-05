import type { NextApiRequest, NextApiResponse } from "next";
import { db, PROJECTS_CONSTANTS } from "../../../database";
import { Project } from "../../../models";
import { IProject } from "../../../interfaces";

type Data = { message: string } | IProject[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProjects(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const getProjects = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { clase  = "all" }:any  = req.query;

  let condition = {};

  if (clase !== "all" && PROJECTS_CONSTANTS.validClass.includes(`${clase}`)) {
    condition = { clase };
  }

  await db.connect();

  const projects = await Project.find(condition)
    .select("title image description clase slug tags web -_id")
    .lean();
  //await db.disconnect();

  return res.status(200).json(projects);
  
};
