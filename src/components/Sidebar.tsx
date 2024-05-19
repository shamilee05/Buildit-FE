const Sidebar = ({ selectedPage }: { selectedPage: string }) => {
  return (
    <div className="drawer lg:drawer-open w-96 m-4 rounded-2xl h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side rounded-xl h-[98%]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex items-center justify-start btn btn-ghost h-16">
            <a className="w-12 h-12">
              <img src="/logo.png" />
            </a>
            <p className="text-3xl font-semibold ml-4">Buildit</p>
          </div>
          <div className="flex flex-col items-start justify-start mt-8 gap-2">
            <li className="text-lg font-medium w-full">
              <a
                className={selectedPage === "profile" ? "active" : ""}
                href="/"
              >
                Profile
              </a>
            </li>
            <li className="text-lg font-medium w-full">
              <a
                className={selectedPage === "inbox" ? "active" : ""}
                href="/inbox"
              >
                Inbox
              </a>
            </li>
            <li className="text-lg font-medium w-full">
              <a
                className={selectedPage === "analytics" ? "active" : ""}
                href="/analytics"
              >
                Analytic
              </a>
            </li>
            <li className="text-lg font-medium w-full">
              <a
                className={selectedPage === "help" ? "active" : ""}
                href="/help"
              >
                Help
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
