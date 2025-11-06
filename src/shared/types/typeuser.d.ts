interface User {
  id: string;
  avatar: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: UserRole;
  phone: string;
  country: string;
  orders: OrderUser[];
  notifications: Notifications[];
  createdAt: Date;
  updatedAt: Date;
}
enum UserRole {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
}
interface Notifications {
  id: string;
  userId: string;
  orderId: string;
  message: string;
  read: false;
  order: OrderUser;
  createdAt: Date;
}

interface OrderUser {
  id: string;
  userId: string;
  createdAt: Date;
  weightKg: number;
  price: number;
  trackingCode: string;
  read: boolean;
  status: OrderStatus;
  fromCityId: string;
  toCityId: string;
  serviceTypeId: string;
}
enum OrderStatus {
  CREATED = "CREATED",
  IN_PROGRESS = "IN_PROGRESS",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}
interface Reviews {
  id: string;
  userId: string;
  name: string;
  city: string;
  email: string;
  text: string;
  star: number;
}
