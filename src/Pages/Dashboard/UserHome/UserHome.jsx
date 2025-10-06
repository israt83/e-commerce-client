import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <div className="md:mx-auto  flex justify-center items-center flex-col bg-orange-400 md:w-2/3 py-10 mt-6 md:mt-40 space-y-4 mx-5">
            <h2 className="text-3xl px-10 mt-5">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName:'Back'
                }
            </h2>
             <div
            className="avatar"
        
          >
            <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || ""} alt="User Avatar" />
            </div>
          </div>
        <p className="text-lg text-white mt-4">
          {user?.email ? user.email : 'No Email Provided'}
        </p>
        </div>
    );
};

export default UserHome;