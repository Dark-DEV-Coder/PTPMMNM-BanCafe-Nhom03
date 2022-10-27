import React from 'react'
import "./Sidebar.scss";
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CategoryIcon from '@mui/icons-material/Category';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()
    const click = (link) => {
        navigate("/" + link)
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Mizuuu</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li onClick={() => click("home")}>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <LocalCafeIcon className='icon' />
                        <span>Sản phẩm</span>
                    </li>

                    <li>
                        <CategoryIcon className='icon' />
                        <span>Loại sản phẩm</span>
                    </li>
                    <li>
                        <GroupsIcon className='icon' />
                        <span>Khách hàng</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Nhà cung cấp</span>
                    </li>
                    <li>
                        <ContactEmergencyIcon className='icon' />
                        <span>Nhân viên</span>
                    </li>
                    <li>
                        <ReceiptLongIcon className='icon' />
                        <span>Hóa đơn</span>
                    </li>
                    <li>
                        <FactCheckIcon className='icon' />
                        <span>Phiếu nhập hàng</span>
                    </li>
                    <li>
                        <RecordVoiceOverIcon className='icon' />
                        <span>Tài khoản</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' />
                        <span>Quyền tài khoản</span>
                    </li>
                    <li>
                        <ThumbsUpDownIcon className='icon' />
                        <span>Đánh giá</span>
                    </li>
                    <p className="title">LOG OUT</p>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>

                </ul>

            </div>
            {/* <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    )
}

export default Sidebar
