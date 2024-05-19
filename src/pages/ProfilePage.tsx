const ProfilePage = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex py-4 flex-col">
        <h2 className="card-title">Hello Agent P</h2>
        <p>Welcome to your workspace</p>
      </div>
      <div className="flex flex-row gap-4">
        <div className="avatar">
          <div className="w-96 h-96 rounded-xl">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card mr-4 bg-base-100 shadow-xl w-full flex flex-col p-10 gap-4">
          <h1 className="card-title text-2xl">Eric Thomas</h1>
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-2xl">Call center agent</h2>
            <h2 className="font-normal text-xl">{`+91 6512360175`}</h2>
            <h2 className="font-normal text-xl">ericthomas@buildit</h2>
          </div>

          <div className="flex flex-row gap-2 mt-2 items-center">
            <p>{`Current status : `}</p>
            <div className="badge badge-success">Active</div>
          </div>
          <p>{`Employee ID : CCA187198273D`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
