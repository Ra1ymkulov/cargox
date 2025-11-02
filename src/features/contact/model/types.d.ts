namespace USERLOGIN {
  type GetUserRes = void;
  type GetUserReq = ILoginUser;
}
interface ILoginUser {
  userName: string;
  email: string;
  password: string;
  message: string;
}
