namespace STATUS {
  type GetStatusReq = {
    id: number;
    status: OrderStatus;
    userId: string;
  };

  type GetStatusRes = {
    updatedOrder: any;
    notif: any;
  };
}
