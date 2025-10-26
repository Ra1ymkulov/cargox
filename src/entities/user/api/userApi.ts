import { USER_API } from "@/shared/api/userApi";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
interface Decode {
  id: string;
  email: string;
  iat: number;
  exp: number;
}
const useGetUserQuery = () => {
  return useQuery<USER.GetUser, Error>({
    queryKey: [`/get-user`],
    queryFn: async () => {
      const token = JSON.parse(localStorage.getItem("user") || "null");
      const decoded = jwtDecode<Decode>(token);
      const response = await USER_API.get(`/get-user/${decoded.id}`);
      return response.data.user;
    },
  });
};
export { useGetUserQuery };
