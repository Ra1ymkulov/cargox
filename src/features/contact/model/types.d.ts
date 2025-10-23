namespace USERLOGIN {
  type GetUserReq = ILoginUser;
  type GetUserRes = void;
}
interface ILoginUser {
  userName: string;
  email: string;
  text: string;
  password: string;
  message: string;
}
