import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="bg-indigo-500 h-auto w-full overflow-auto">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
