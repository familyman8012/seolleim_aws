import type { NextApiRequest, NextApiResponse } from "next";
import createHandler from "../middleware";
import Product from "../models/product";
import User from "../models/user";

const productRouter = createHandler();

productRouter.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const user = User.find({}).limit(1);
    const products = await Product.find({ _id })
      .populate("creator", "name email phone")
      .populate("joinMembr", "name email phone");
    return res.send(products);
  } catch (err) {
    res.status(500).send(JSON.stringify(err));
  }
});

productRouter.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const products = await Product.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    return res.send(products);
  } catch (err) {
    res.status(500).send(JSON.stringify(err));
  }
});

productRouter.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const products = await Product.findByIdAndDelete(_id);
    return res.send(products);
  } catch (err) {
    res.status(500).send(JSON.stringify(err));
  }
});

// islive 여부.
productRouter.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    // console.log("_id", _id, "req.body", req.body);
    // const { title, content, mediaId, filename } = req.body.lessons;

    // console.log(title, content, mediaId);
    // const products = await Product.updateOne(
    //   { _id },
    //   { $push: { lessons: { title, content, mediaId, filename } } },
    //   { upsert: true }
    // );
    const products = await Product.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    return res.send(products);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send(JSON.stringify(err));
  }
});

export default productRouter;
