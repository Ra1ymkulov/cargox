namespace Inter {
  type PostLoginRes = {
    token: string;
    email: String;
    password: String;
  };
  type PostLoginReq = {
    email: String;
    password: String;
  };
}
