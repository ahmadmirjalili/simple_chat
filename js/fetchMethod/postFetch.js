import { base_url } from "../env.js";

export const POST = async (url, body, isLogin = false) => {
  try {
    const response = await fetch(`${base_url}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //             'Authorization':
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTaG9wIjoiNjE0MzE1ZGE3YTA0ZDMwMDI5YWI2NjUzIiwicGVyc29uIjoiNjE0MzBlMTY3YTA0ZDMwMDI5YWI2NGEzIiwiX2lkIjoiNjE0MzBlMTY3YTA0ZDMwMDI5YWI2NGEzIiwid2FsbGV0IjoiNjE0MzE1ZGE3YTA0ZDMwMDI5YWI2NjU0IiwiaWF0IjoxNjM4NjI4Mjg3fQ.Tws6jcu9fiMcU60CWSEHEvDC6ccImSCBNVRwAvb6TRs'
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.log("err", error);
    //call toast
  }
};
