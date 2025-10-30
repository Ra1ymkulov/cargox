namespace STATUS {
  type GetStatusReq = {
    id: string;
    status: OrderStatus;
    userId: string;
  };

  type GetStatusRes = {
    updatedOrder: any;
    notif: any;
  };
}
