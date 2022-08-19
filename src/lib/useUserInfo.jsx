import { useSelector } from "react-redux";

function useUserInfo() {
  const userInfo = useSelector((state) => state.logged);
  return { userInfo };
}

export default useUserInfo;
