namespace CREATEORDER {
  type GetCreateOrderRes = OrderUser[];
  type GetCreateOrderReq = {
    userId?: string;
    fromCityId: string;
    toCityId: string;
    serviceTypeId: string;
    weightKg: number;
  };
}
