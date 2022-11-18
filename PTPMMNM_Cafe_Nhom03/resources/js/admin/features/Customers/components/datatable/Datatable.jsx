import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Datatable = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [customers, setCustomer] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/khhang").then((response) => {
            setCustomer(response.data.data);
        });
    }, []);

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/customer/single">
                            <div className="viewButton"
                            // onClick={() => {
                            //     console.log(params.row);
                            // }}
                            >
                                Xem chi tiết
                            </div>
                        </Link>

                        <div className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Danh sách khách hàng
                <Link to="/customer/new" className="newcustomer">Thêm Mới</Link>
            </div>
            <div className="search">
                <input type="text" placeholder="Search ..." />
                <button className='timKiem'>Tìm kiếm</button>
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaKH}
                rows={customers}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
