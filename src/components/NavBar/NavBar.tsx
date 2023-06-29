import styles from "./NavBar.module.css";
import {
  MdSpaceDashboard,
  MdLogout,
  MdAddBox,
  MdHelpCenter,
} from "react-icons/md";
import { Column, Row } from "../Layouts";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const checkSelected = (index: number) => {
    if (selected === 0 && index === 0) {
      return styles.selected;
    } else if (selected === 1 && index === 1) {
      return styles.selected;
    } else if (selected === 2 && index === 2) {
      return styles.selected;
    } else {
      return styles.unselected;
    }
  };

  const handleDashboardClick = () => {
    setSelected(0);
    navigate("/dashboard");
  };

  const handleAddPostClick = () => {
    setSelected(1);
    navigate("/addpost");
  };

  const handleHelpClick = () => {
    setSelected(2);
    navigate("/help");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.assign("/login");
    // navigate("/login");
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarBackground}>
        <Typography
          variant="h4"
          fontWeight={500}
          color={"white"}
          marginBottom={4}
          marginTop={2}
          textAlign={"center"}
        >
          Social Listener
        </Typography>
        <div className={styles.navbar}>
          <Column justifyContent="start" alignItems="start">
            <div className={checkSelected(0)} onClick={handleDashboardClick}>
              <Row justifyContent="flex-start" alignItems="center" gap="20px">
                <MdSpaceDashboard size={30} />
                <Typography variant="body1">Dashboard</Typography>
              </Row>
            </div>
            <div className={checkSelected(1)} onClick={handleAddPostClick}>
              <Row justifyContent="flex-start" alignItems="center" gap="20px">
                <MdAddBox size={30} />
                <Typography variant="body1">Add Post</Typography>
              </Row>
            </div>
            <div className={checkSelected(2)} onClick={handleHelpClick}>
              <Row justifyContent="flex-start" alignItems="center" gap="20px">
                <MdHelpCenter size={30} />
                <Typography variant="body1">Help</Typography>
              </Row>
            </div>
            <div className={styles.logout} onClick={handleLogout}>
              <Row justifyContent="flex-start" alignItems="center" gap="20px">
                <MdLogout size={30} />
                <Typography variant="body1">Logout</Typography>
              </Row>
            </div>
          </Column>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
