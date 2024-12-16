function User({user}) {
    return (
      <div className="user-container">
       hello, {user?.handle}
      </div>
    );
  }
  
  export default User;
  