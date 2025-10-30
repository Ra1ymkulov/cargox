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
  type GetServiceTypeRes = ServiceType[];
}
interface ServiceType {
  id: string;
  name: strign;
  code: string;
  description: {
    info: ServiceTypeDesInfo[];
  };
  deliveryTime: strign;
  pricekg: number;
  priceKm: number;
}
interface ServiceTypeDesInfo {
  text: string;
  title: strign;
}
