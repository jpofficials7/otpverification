class UserController {
  //send OTP to user
  static userLogin = async (req, res) => {
    res.status(200).send({ message: "OTP Send Successfully" });
  };
}

export default UserController;
