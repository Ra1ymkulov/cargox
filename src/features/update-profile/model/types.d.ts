namespace UPDATEPROFILE {
  type GetUserRes = User;
  type GetUserReq = {
    id: string;
    update: User;
  };
}
