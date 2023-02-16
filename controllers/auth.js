import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) return next(createError(404, "User not found!"));
    const ispasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!ispasswordCorrect)
      return next(createError(400, "Wrong UserName or Password"));
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { readOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
    console.log(res);
  } catch (err) {
    next(err);
    console.log(err);
  }
};
