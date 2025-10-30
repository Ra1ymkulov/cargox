namespace SERVICETYPE {
  type GetServiceTypeRes = {
    id: string;
    name: strign;
    code: string;
    description: {
      info: [
        {
          text: string;
          title: strign;
        }
      ];
    };
    deliveryTime: strign;
    pricekg: number;
    priceKm: number;
  }[];
}
