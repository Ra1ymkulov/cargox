namespace ALLSERVICE {
  type GetAllServiceRes = AllServiceType[];
}
interface AllServiceType {
  id: string;
  lat: number;
  lon: number;
  name: string;
}
