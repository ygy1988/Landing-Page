// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// import nc from "next-connect";

// import { metrics } from "next-step-metrics";

// const handler = nc().post((req, res) => {
//   return metrics(req, res);
// });

// export default handler;
