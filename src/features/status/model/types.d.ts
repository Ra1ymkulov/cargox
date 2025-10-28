namespace STATUS {
    type GetStatusReq = {
         id: number;
         status:string;
         userId: string;
    }
    type GetStatusRes = {
        userId: string;
    }
}