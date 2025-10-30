namespace USERREADMESSAGE {
  type GetUserRes = ReadMessage;
  type GetUserReq = void;
}
interface ReadMessage {
  type GetUserReq = READ;
  type GetUserRes = void;
}
interface READ {
  id: string;
}
