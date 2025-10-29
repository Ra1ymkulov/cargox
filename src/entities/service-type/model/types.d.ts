namespace SERVICETYPE {
  type GetServiceTypeRes = {
    data: {
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
    };
  };
}
