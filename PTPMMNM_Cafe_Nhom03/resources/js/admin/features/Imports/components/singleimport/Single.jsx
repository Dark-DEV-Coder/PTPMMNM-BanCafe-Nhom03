import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import "../datatable/Datatable.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const SingleImport = ({title}) => {
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [product, setProduct] = React.useState([]);
    const [inputmapnh, setInputMaPNH] = React.useState("");
    const [inputngay, setInputNgay] = React.useState("");
    const [inputmancc, setInputMaNCC] = React.useState("");
    const [inputtenncc, setInputTenNCC] = React.useState("");
    const [inputtongtien, setInputTongTien] = React.useState("");
    const [detailimports, setDetailImport] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietpnhang/" + params.id).then((response) => {
                    setInputMaPNH(response.data.data.MaPNH);
                    setInputMaNCC(response.data.data.MaNCC);
                    setInputNgay(response.data.data.NgayNhapHang);
                    setInputTenNCC(response.data.data.TenNCC);
                    setInputTongTien(response.data.data.TongTien);
                });
                await axios.get("http://127.0.0.1:8000/api/chitietphieunhap/"+ params.id).then((response) => {
                    setDetailImport(response.data.data);
                });
                await axios.get("http://127.0.0.1:8000/api/sptheoncc/"+params.id).then((response) => {
                    setProduct(response.data.data);
                });
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();

    }, []);
    const onChangeMaPNH = event => {
        setInputMaPNH(event.target.value);
    };
    const onChangeNgay = event => {
        setInputNgay(event.target.value);
    };
    const onChangeTenNCC = event => {
        setInputTenNCC(event.target.value);
    };
    const onChangeTongTien = event => {
        setInputTongTien(event.target.value);
    };

    const [inputctspnhaphang, setInputCTSPNH] = React.useState("");
    const [inputctslnhaphang, setInputCTSLNH] = React.useState("");
    const [inputctdgnhaphang, setInputCTDGNH] = React.useState("");
    const onChangeCTSPNH = event => {
        setInputCTSPNH(event.target.value);
    };
    const onChangeCTSLNH = event => {
        setInputCTSLNH(event.target.value);
    };
    const onChangeCTDGNH = event => {
        setInputCTDGNH(event.target.value);
    };

    async function CapNhapPhieuNhapHang(){       
        const pnh = {
            ngay: inputngay,
            manv: JSON.parse(localStorage.getItem('idnv')),
        };
        await axios.put("http://127.0.0.1:8000/api/pnhang/"+inputmapnh,pnh).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }

    async function ThemChiTietPhieuNhap(){
        if (inputctspnhaphang == -1){
            alert("Ch???n s???n ph???m c???n th??m chi ti???t");
            return false;
        }
        const ctpnh = {
            mapnh: inputmapnh,
            masp: inputctspnhaphang,
            soluong: inputctslnhaphang,
            dongia: inputctdgnhaphang,
        };
        await axios.post("http://127.0.0.1:8000/api/ctpnhang",ctpnh).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }

    async function XoaChiTietPhieuNhap(mapnh,masp){
        if (window.confirm('B???n c?? ch???c mu???n x??a chi ti???t phi???u nh???p h??ng n??y?')) {
            const ctpnh = {
                mapnh: mapnh,
                masp: masp,
            };
            await axios.post("http://127.0.0.1:8000/api/xoachitietphieunhap",ctpnh).then((response) => {
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            });
        }
    }

    const productColumns = [
        { field: 'MaSP', headerName: 'M?? s???n ph???m', width: 150 }, 
        { field: 'SoLuong', headerName: 'S??? l?????ng', width: 150 },
        {field: "DonGia", headerName: "????n gi??", width: 250,},
        {field: "ThanhTien", headerName: "Th??nh ti???n", width: 250,},        
    ];    
    const actionColumn = [
        {
            field: "action", headerName: "Ch???c n??ng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div onClick={() => XoaChiTietPhieuNhap(params.row.MaPNH,params.row.MaSP)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
                            X??a
                        </div>
                    </div>
                );
            },
        },
    ]
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "430px" }}>
                    <div className="singleright">

                        <form>
                            <div className='singleformInput'>
                                <label>M?? phi???u nh???p h??ng</label>
                                <input type={"text"} value={inputmapnh}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Nh?? cung c???p</label>
                                <input type={"text"} value={inputtenncc} onChange={onChangeTenNCC}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>T???ng ti???n</label>
                                <input type={"text"} value={inputtongtien} onChange={onChangeTongTien}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Ng??y nh???p h??ng</label>
                                <input type={"date"} value={inputngay} onChange={onChangeNgay} disabled={input} />
                            </div>
                            <div className="singleformInput"   >
                                <label>Ch???n s???n ph???m</label>                             
                                <select className="select-css" value={inputctspnhaphang} onChange={onChangeCTSPNH}>
                                    <option value='-1'>Ch???n s???n ph???m</option>
                                    {product.map((pro) => (
                                        <option key={pro.MaSP} value={pro.MaSP}>{pro.TenSP}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>S??? l?????ng</label>
                                <input type={"number"} value={inputctslnhaphang} onChange={onChangeCTSLNH} />                                                            
                            </div>                            
                            <div className='singleformInput'>
                                <label>Gi?? nh???p h??ng</label>
                                <input type={"number"} value={inputctdgnhaphang} onChange={onChangeCTDGNH} /> 
                            </div>
                            <div className="singleformInput">
                                <button type='button' onClick={ThemChiTietPhieuNhap}>Th??m chi ti???t</button>
                                {showButtonEdit ? <button style={{marginLeft: "50px"}} onClick={CapNhapPhieuNhapHang} type='button'>L??u</button> : null}                                
                            </div>
                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
                <div className='datatable'>
                    <div className="datatableTitle">
                        Danh s??ch chi ti???t phi???u nh???p
                    </div>
                    <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                        getRowId={(row) => row.MaSP}                                           
                        rows={detailimports}
                        columns={productColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>                
            </div>
        </div>
    );
};

export default SingleImport;