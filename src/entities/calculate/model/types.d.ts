namespace CALCULATEPRICE {
  type GetCalculateRes = {
    price: number;
    distancekm: number;
  };
  type GetCalculateReq = {
    toCityId: string;
    fromCityId: string;
    weightKg: number;
    serviceTypeId: string;
  };
}
