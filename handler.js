import { resolveInput } from "../../public/api.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  let json = await resolveInput(config.pwd, value.json);
  if (typeof json == "string") json = JSON.parse(json);
  return json[await resolveInput(config.pwd, value.key)];
};
