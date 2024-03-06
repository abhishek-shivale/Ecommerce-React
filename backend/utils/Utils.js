import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWTPASS = process.env.JWTPASS;
export const SendResponse = (statuscode, success, message, res) => {
  return res.status(statuscode).json({
    success: success,
    message: message,
  });
};

export const SendToken = async (message, res, id, userInfo) => {
  console.log(JWTPASS);
  try {
    const paylod = { id: id };
    const Token = jwt.sign(paylod, JWTPASS);
    res.status(200).json({
      success: true,
      message: message,
      userInfo: userInfo,
      token: Token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const VerfiyToken = (token) => {
  const decode = jwt.verify(token, JWTPASS);
  if (decode) {
    const success = {
      id: decode.id,
      success: true,
    };
    return success;
  }
  return false;
};

export const createPassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    return hashPassword;
  } catch (error) {
    console.error("Error creating password:", error);
    throw error;
  }
};

export const verifyPassword = async (password, hashPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashPassword);

    return isMatch;
  } catch (error) {
    console.error("Error verifying password:", error);
    return false;
  }
};
