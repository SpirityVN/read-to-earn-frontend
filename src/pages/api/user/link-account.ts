// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AxiosInstance from "@/axiosInstance";
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method, body, headers } = req;
  if (method === "POST") {
    try {
      const { data } = await AxiosInstance.post(
        "/user/link-account",
        {
          wallet_address: body.wallet_address,
          signature: body.signature,
        },
        {
          headers: {
            Authorization: `Bearer ${headers["authorization"]}`,
          },
        }
      );

      res.status(200).json(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error as AxiosError;
        res.status(400).json(response?.data);
      } else {
        res.status(400).send("Bad Request!");
      }
    }
  }
}
