const Layout = (props) => {
  return (
    <div className="bg-red-100 h-screen w-full overflow-auto">
      {props.children}
    </div>
  );
};

export default Layout;
