import jwt from 'jsonwebtoken';

const generateToken = (res, doctorId) => {
  const token = jwt.sign({ doctorId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return token
};

export default generateToken;