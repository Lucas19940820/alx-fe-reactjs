function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm: max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow.xl">
            <img
            className="rounded-full w-24 h-24 sm: w-36 sm: h-36 max-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            src="https://via.placeholder.com/150" alt="User" />
            <h1 className="text-lg sm: text-xl text-blue-800 my-4 hover: text-blue-500">John Doe</h1>
            <p className="text-sm sm:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies</p>
        </div>
    );
}
export default UserProfile;