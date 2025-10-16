namespace USER {
  type GetUserRes = IUserType;
  type GetUserReq = IRegReq;
}
interface IRegReq {
  id?: string;
  fullName: string;
  email: string;
  userName: string;
  avatar: string;
  password: string;
}
//
interface IUserType {
  id: string;
  avatar: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: Role;
  orders: Order[];
}
enum Role {
  CLIENT = "CLIENT",
  ADMIN = "ADMIN",
}
interface Order {
  id: number;
  userId: string;
  trackingCode: string;
  weightKg: number;
  price: number;
  read: boolean;
  status: any;

  fromCityId: string;
  toCityId: string;
  serviceTypeId: string;

  fromCity?: any;
  toCity?: any;
  serviceType?: any;
}
