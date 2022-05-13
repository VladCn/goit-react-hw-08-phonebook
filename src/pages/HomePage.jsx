import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {authSelectors} from "../redux/auth";
import { NotAuthPage } from "pages";

export function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  if (isLoggedIn) {
    return navigate('/contacts')
  }

  return <NotAuthPage />
}
