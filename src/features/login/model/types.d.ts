namespace USERLOGIN {
  type GetUserReq = ILoginUser;
  type GetUserRes = IToken;
}
interface ILoginUser {
  email: string;
  password: string;
}
