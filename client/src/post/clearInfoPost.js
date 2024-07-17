import axios from "axios";

export function clear() {
  document.addEventListener("load", async () => {
    try {
      const dataGet = await axios.get("http://localhost:8000/api/cases/exit", {
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
