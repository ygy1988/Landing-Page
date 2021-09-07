import nc from "next-connect";
import { metrics } from "next-step-metrics";

const handler = nc().post((req, res) => {
 return metrics(req, res);
});


export default handler;