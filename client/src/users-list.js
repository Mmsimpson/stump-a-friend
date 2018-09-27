import React from 'react';
import fetchUsers from './fetch-users';
import { connect } from 'react-redux';

let AllUsersScreen = (props) => 
    <div>
        Users: {props.users}
    </div>

export default connect(
    state => ({users: state.users})
)(fetchUsers(AllUsersScreen));


// import React from 'react';
// import ProductList from './product-list';
// import { connect } from 'react-redux';
// import HeaderContainer from './header-container';
// import SideNavigation from './side-navigation';
// import fetchProducts from './fetch-products';

// let AllProductsPage = (props) =>
//     <div>
//         <HeaderContainer />
//         <SideNavigation />
//         <h1>All Products</h1>
//         <ProductList products={props.products} />
//     </div>

// export default connect(
//     state => ({products: state.products})
// )(fetchProducts(AllProductsPage, '/product'));