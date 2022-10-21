import { useSelector } from "react-redux";

function useUserInfo() {
  const userInfo = useSelector((state) => state.LoggedState);
  return { userInfo };
}

export default useUserInfo;
