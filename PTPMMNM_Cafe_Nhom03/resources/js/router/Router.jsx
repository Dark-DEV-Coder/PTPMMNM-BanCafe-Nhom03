import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLogin from "../admin/features/Login/index";
import HomeAdmin from "../admin/features/HomePage/index";
import Products from "../admin/features/Products";
import NotFoundPage from "../components/NotFound";
import New from "../admin/features/Products/components/newproduct/Newproduct";
import SingleProduct from "../admin/features/Products/components/singleproduct/Single";
import Category from "../admin/features/Category";
import NewCategory from "../admin/features/Category/components/newcategory/Newcategory";
import SingleCategory from "../admin/features/Category/components/singlecategory/Single";
import Customer from "../admin/features/Customers";
import Newcustomers from "../admin/features/Customers/components/newcustomer/Newcustomers";
import { customerInputs } from "../admin/features/Customers/components/newcustomer/formSource";
import SingleCustomer from "../admin/features/Customers/components/singlecustomer/Single";
import Provider from "../admin/features/Providers";
import Newprovider from "../admin/features/Providers/components/newprovider/Newprovider";
import SingleProvider from "../admin/features/Providers/components/singleprovider/Single";
import Staff from "../admin/features/Staffs";
import NewStaff from "../admin/features/Staffs/components/newstaff/Newstaff";
import SingleStaff from "../admin/features/Staffs/components/singlestaff/Single";
import Bill from "../admin/features/Bills";
import NewBill from "../admin/features/Bills/components/newbill/Newbill";
import SingleBill from "../admin/features/Bills/components/singlebill/Single";
import { billInputs } from "../admin/features/Bills/components/newbill/formSource";
import Statistical from "../admin/features/Bills/components/statistical/Statistical";
import Import from "../admin/features/Imports";
import NewImport from "../admin/features/Imports/components/newimport/Newimport";
import SingleImport from "../admin/features/Imports/components/singleimport/Single";
import Account from "../admin/features/Accounts";
import NewAccount from "../admin/features/Accounts/components/newaccount/Newaccount";
import { accountInputs } from "../admin/features/Accounts/components/newaccount/formSource";
import Function from "../admin/features/Functions";
import NewFunction from "../admin/features/Functions/components/newfunction/Newfunction";
import SingleFunction from "../admin/features/Functions/components/singlefunction/Single";
import { functionInputs } from "../admin/features/Functions/components/newfunction/formSource";
import Vote from "../admin/features/Votes";
import SingleVote from "../admin/features/Votes/components/singlevote/Single";
import Home from "../user/features/Home";
import Shop from "../user/features/Shop";
import ForgotPassword from "../admin/features/ForgotPassword";
import SuccessReset from "../admin/features/SuccessReset";
import Register from "../user/features/Register";
import DetailProduct from "../user/features/DetailProduct";
import Cart from "../user/features/Cart";
import About from "../user/features/About";
import Checkout from "../user/features/Checkout";
import OrderConfirmation from "../user/features/OrderConfirmation";
import AccountUser from "../user/features/Account";
import ChangePass from "../user/features/ChangePass";
import ChangePassAd from "../admin/features/ChangePass";
import History from "../user/features/History";
import LoginUsers from "../user/features/Login";
const Router = () => {
    const [loggedIn, setLoggedIn] = React.useState(false); // <-- undefined

    React.useEffect(() => {
        if (localStorage['auth_token'])
            setLoggedIn(true);
        else
            setLoggedIn(false);
    }, []);
    return loggedIn == true
        ?
        <div>
            {/* Mu???n html n??o k thay ?????i theo router th?? l??m ??? ????y */}
            <Routes>
                <Route path="/">
                    <Route path="admin">
                        <Route index element={<IndexLogin />}></Route>
                        <Route path="forgot" element={<ForgotPassword />}></Route>
                        <Route path="reset-susscess" element={<SuccessReset />}></Route>
                        {/* <Route path='api/reset-password' element={<Navigate to="/reset-password" />} /> */}
                        <Route path="home" element={<HomeAdmin />}></Route>
                        <Route path="changepass" element={<ChangePassAd />}></Route>
                        {/* <Route path="login_admin" element={<IndexLogin />}></Route> */}
                        <Route path="404" element={<NotFoundPage />}></Route>
                        <Route path="products">
                            <Route index element={<Products />}></Route>
                            <Route path="new" element={<New title="Th??m s???n ph???m" />}></Route>
                            <Route path="single/:id" element={<SingleProduct title="Th??ng tin chi ti???t s???n ph???m" />}></Route>

                        </Route>
                        <Route path="category">
                            <Route index element={<Category />}></Route>
                            <Route path="new" element={<NewCategory title="Th??m lo???i s???n ph???m" />}></Route>
                            <Route path="single/:id" element={<SingleCategory title="Th??ng tin chi ti???t lo???i s???n ph???m" />}></Route>
                        </Route>
                        <Route path="customer">
                            <Route index element={<Customer />}></Route>
                            <Route path="new" element={<Newcustomers inputs={customerInputs} title="Th??m kh??ch h??ng" />}></Route>
                            <Route path="single/:id" element={<SingleCustomer title="Th??ng tin chi ti???t kh??ch h??ng" />}></Route>
                        </Route>
                        <Route path="provider">
                            <Route index element={<Provider />}></Route>
                            <Route path="new" element={<Newprovider title="Th??m nh?? cung c???p" />}></Route>
                            <Route path="single/:id" element={<SingleProvider title="Th??ng tin chi ti???t nh?? cung c???p" />}></Route>
                        </Route>
                        <Route path="staff">
                            <Route index element={<Staff />}></Route>
                            <Route path="new" element={<NewStaff title="Th??m nh??n vi??n" />}></Route>
                            <Route path="single/:id" element={<SingleStaff title="Th??ng tin chi ti???t nh??n vi??n" />}></Route>
                        </Route>
                        <Route path="bill">
                            <Route index element={<Bill />}></Route>
                            <Route path="new" element={<NewBill inputs={billInputs} title="Th??m h??a ????n" />}></Route>
                            <Route path="single/:id" element={<SingleBill title="Th??ng tin chi ti???t h??a ????n" />}></Route>
                        </Route>
                        <Route path="statistical">
                            <Route index element={<Statistical />}></Route>

                        </Route>
                        <Route path="imports">
                            <Route index element={<Import />}></Route>
                            <Route path="new" element={<NewImport title="Th??m phi???u nh???p h??ng" />}></Route>
                            <Route path="single/:id" element={<SingleImport title="Th??ng tin chi ti???t phi???u nh???p h??ng" />}></Route>
                        </Route>
                        <Route path="accounts">
                            <Route index element={<Account />}></Route>
                            <Route path="new" element={<NewAccount inputs={accountInputs} title="Th??m t??i kh???an" />}></Route>
                            {/* <Route path="single" element={<Single />}></Route> */}
                        </Route>
                        <Route path="functions">
                            <Route index element={<Function />}></Route>
                            <Route path="new" element={<NewFunction inputs={functionInputs} title="Th??m quy???n t??i kho???n" />}></Route>
                            <Route path="single/:id" element={<SingleFunction title="Th??ng tin chi ti???t quy???n t??i kho???n" />}></Route>
                        </Route>
                        <Route path="votes">
                            <Route index element={<Vote />}></Route>
                            {/* <Route path="new" element={<New inputs={productInputs} title="Th??m s???n ph???m" />}></Route> */}
                            <Route path="single/:id" element={<SingleVote title="Th??ng tin chi ti???t b??nh lu???n" />}></Route>
                        </Route>
                    </Route>
                </Route>

                <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<LoginUsers />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="shop" element={<Shop />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="user" element={<AccountUser />}></Route>
                    <Route path="changepass" element={<ChangePass />}></Route>
                    <Route path="reset-password" element={<SuccessReset />}></Route>
                    <Route path="history" element={<History />}></Route>
                    <Route path="checkout">
                        <Route index element={<Checkout />}></Route>
                        <Route path="OrderCon" element={<OrderConfirmation />}></Route>
                    </Route>
                    <Route path="product">
                        <Route index element={<Shop />}></Route>
                        <Route path="single" element={<DetailProduct />}></Route>

                    </Route>
                </Route>
            </Routes>
        </div >
        :
        <div>
            {/* Mu???n html n??o k thay ?????i theo router th?? l??m ??? ????y */}
            <Routes>
                <Route path="/">
                    <Route path="register" element={<Register />}></Route>
                    <Route path="forgot" element={<ForgotPassword />}></Route>

                    <Route path="admin">
                        <Route index element={<IndexLogin />}></Route>
                        <Route path="changepass" element={<NotFoundPage />}></Route>
                        <Route path="home" element={<NotFoundPage />}></Route>
                        <Route path="products" element={<NotFoundPage />}></Route>
                        <Route path="category" element={<NotFoundPage />}></Route>
                        <Route path="customer" element={<NotFoundPage />}></Route>
                        <Route path="provider" element={<NotFoundPage />}></Route>
                        <Route path="staff" element={<NotFoundPage />}></Route>
                        <Route path="bill" element={<NotFoundPage />}></Route>
                        <Route path="statistical" element={<NotFoundPage />}></Route>
                        <Route path="imports" element={<NotFoundPage />}></Route>
                        <Route path="accounts" element={<NotFoundPage />}></Route>
                        <Route path="functions" element={<NotFoundPage />}></Route>
                        <Route path="votes" element={<NotFoundPage />}></Route>
                    </Route>
                </Route>

                <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<LoginUsers />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="shop" element={<Shop />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="user" element={<AccountUser />}></Route>
                    <Route path="changepass" element={<ChangePass />}></Route>
                    <Route path="history" element={<History />}></Route>
                    <Route path="checkout">
                        <Route index element={<Checkout />}></Route>
                        <Route path="OrderCon" element={<OrderConfirmation />}></Route>
                    </Route>
                    <Route path="product">
                        <Route index element={<Shop />}></Route>
                        <Route path="single" element={<DetailProduct />}></Route>

                    </Route>
                </Route>
            </Routes>
        </div >


    // return (
    //     <div>
    //         {/* Mu???n html n??o k thay ?????i theo router th?? l??m ??? ????y */}
    //         <Routes>
    //             <Route path="/">
    //                 <Route path="admin">
    //                     <Route index element={<IndexLogin />}></Route>
    //                     <Route path="home" element={<HomeAdmin />}></Route>
    //                     {/* <Route path="login_admin" element={<IndexLogin />}></Route> */}
    //                     <Route path="404" element={<NotFoundPage />}></Route>
    //                     <Route path="products">
    //                         <Route index element={<Products />}></Route>
    //                         <Route path="new" element={<New title="Th??m s???n ph???m" />}></Route>
    //                         <Route path="single/:id" element={<SingleProduct title="Th??ng tin chi ti???t s???n ph???m" />}></Route>

    //                     </Route>
    //                     <Route path="category">
    //                         <Route index element={<Category />}></Route>
    //                         <Route path="new" element={<NewCategory title="Th??m lo???i s???n ph???m" />}></Route>
    //                         <Route path="single/:id" element={<SingleCategory title="Th??ng tin chi ti???t lo???i s???n ph???m" />}></Route>
    //                     </Route>
    //                     <Route path="customer">
    //                         <Route index element={<Customer />}></Route>
    //                         <Route path="new" element={<Newcustomers inputs={customerInputs} title="Th??m kh??ch h??ng" />}></Route>
    //                         <Route path="single/:id" element={<SingleCustomer title="Th??ng tin chi ti???t kh??ch h??ng" />}></Route>
    //                     </Route>
    //                     <Route path="provider">
    //                         <Route index element={<Provider />}></Route>
    //                         <Route path="new" element={<Newprovider title="Th??m nh?? cung c???p" />}></Route>
    //                         <Route path="single/:id" element={<SingleProvider title="Th??ng tin chi ti???t nh?? cung c???p" />}></Route>
    //                     </Route>
    //                     <Route path="staff">
    //                         <Route index element={<Staff />}></Route>
    //                         <Route path="new" element={<NewStaff title="Th??m nh??n vi??n" />}></Route>
    //                         <Route path="single/:id" element={<SingleStaff title="Th??ng tin chi ti???t nh??n vi??n" />}></Route>
    //                     </Route>
    //                     <Route path="bill">
    //                         <Route index element={<Bill />}></Route>
    //                         <Route path="new" element={<NewBill inputs={billInputs} title="Th??m h??a ????n" />}></Route>
    //                         {/* <Route path="single" element={<Single />}></Route> */}
    //                     </Route>
    //                     <Route path="statistical">
    //                         <Route index element={<Statistical />}></Route>

    //                     </Route>
    //                     <Route path="imports">
    //                         <Route index element={<Import />}></Route>
    //                         <Route path="new" element={<NewImport inputs={importInputs} title="Th??m phi???u nh???p h??ng" />}></Route>
    //                         {/* <Route path="single" element={<Single />}></Route> */}
    //                     </Route>
    //                     <Route path="accounts">
    //                         <Route index element={<Account />}></Route>
    //                         <Route path="new" element={<NewAccount inputs={accountInputs} title="Th??m t??i kh???an" />}></Route>
    //                         {/* <Route path="single" element={<Single />}></Route> */}
    //                     </Route>
    //                     <Route path="functions">
    //                         <Route index element={<Function />}></Route>
    //                         <Route path="new" element={<NewFunction inputs={functionInputs} title="Th??m quy???n t??i kho???n" />}></Route>
    //                         {/* <Route path="single" element={<Single />}></Route> */}
    //                     </Route>
    //                     <Route path="votes">
    //                         <Route index element={<Vote />}></Route>
    //                         {/* <Route path="new" element={<New inputs={productInputs} title="Th??m s???n ph???m" />}></Route>
    //                     <Route path="single" element={<Single />}></Route> */}
    //                     </Route>
    //                 </Route>
    //             </Route>

    //             <Route path="/">
    //                 <Route index element={<Home />}></Route>
    //             </Route>
    //         </Routes>
    //     </div >
    // )
}
export default Router