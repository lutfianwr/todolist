const Layout = (props) => {
  return (
    <div className="bg-indigo-500 h-screen w-full overflow-auto pb-10">
      {props.children}
    </div>
  );
};

export default Layout;
