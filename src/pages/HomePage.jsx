import {useSelector} from "react-redux";
import {authSelectors} from "../redux/auth";
import { NotAuthPage } from "pages";
import {Typography} from "@mui/material";

export function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
   return (
     <Typography
       textAlign="center"
       sx={{ paddingTop: '20px', fontSize: '24px', color: '#1976d2' }}
     >
       Welcome to the Main Page
     </Typography>
   )
  }

  return <NotAuthPage />
}
