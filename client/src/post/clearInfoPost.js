import axios from "axios";
import { PREFIX } from "../helper/Api";

export function clear() {
  window.addEventListener("load", async () => {
    try {
      const dataGet = await axios.get(`${PREFIX}/exit`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    } catch (e) {
      console.error(e);
    }
  });
}
