import { input } from "../../public/meta.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  let json = await input.resolveArgument(config.pwd, value.json);
  if (typeof json == "string") json = JSON.parse(json);
  return json[await input.resolveArgument(config.pwd, value.key)];
};
