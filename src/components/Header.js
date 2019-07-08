import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';



export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// });

// export default connect(undefined, mapDispatchToProps)(Header);

  // <button className="button button--link" onClick={startLogout}>Logout</button>


// const Header = () => (
//     <header>
//       <h1>Expensify</h1>
//       <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//       <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
//       <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//     </header>
//   );

// export default Header;
