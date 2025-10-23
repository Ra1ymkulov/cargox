"use client";

import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useUserStore } from "@/entities/user/model/userstore";
import { useEffect } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { data } = useGetUserQuery();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  return children;
}
