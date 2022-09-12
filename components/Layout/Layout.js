import Footer from "../Navigation/Footer";
import MyNavbar from "../Navigation/MyNavbar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MyNavbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
