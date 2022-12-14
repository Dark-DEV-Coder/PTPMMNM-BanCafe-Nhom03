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

const SingleBill = ({title}) => {
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [inputmahd, setInputMaHD] = React.useState("");
    const [inputmanv, setInputMaNV] = React.useState("");
    const [inputmakh, setInputMaKH] = React.useState("");
    const [inputhokh, setInputHoKH] = React.useState("");
    const [inputtenkh, setInputTenKH] = React.useState("");
    const [inputngaysinh, setInputNgaySinh] = React.useState("");
    const [inputgioitinh, setInputGioiTinh] = React.useState("");
    const [inputdiachi, setInputDiaChi] = React.useState("");
    const [inputsdt, setInputSDT] = React.useState("");
    const [inputemail, setInputEmail] = React.useState("");
    const [inputngaylaphoadon, setInputNgayLapHoaDon] = React.useState("");
    const [inputtongtien, setInputTongTien] = React.useState("");
    const [inputtrangthai, setInputTrangThai] = React.useState("");
    const [detailbills, setDetailBill] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitiethdon/" + params.id).then((response) => {
                    setInputMaHD(response.data.data.MaHD);
                    setInputMaNV(response.data.data.MaNV);
                    setInputMaKH(response.data.data.MaKH);
                    setInputHoKH(response.data.data.HoKH);
                    setInputTenKH(response.data.data.TenKH);
                    setInputNgaySinh(response.data.data.NgaySinh);
                    if (response.data.data.GioiTinh == 0)
                        setInputGioiTinh("Nam");
                    else
                        setInputGioiTinh("N???");
                    setInputDiaChi(response.data.data.DiaChi);
                    setInputSDT(response.data.data.SoDienThoai);
                    setInputEmail(response.data.data.Email);
                    setInputNgayLapHoaDon(response.data.data.NgayLapHD);
                    setInputTongTien(response.data.data.TongTien);
                    setInputTrangThai(response.data.data.TrangThai);
                });
                await axios.get("http://127.0.0.1:8000/api/chitiethoadon/"+ params.id).then((response) => {
                    setDetailBill(response.data.data);
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
    
    const onChangeTrangThai = event => {
        setInputTrangThai(event.target.value);
    };

    async function CapNhapHoaDon(){       
        const hd = {
            trangthai: inputtrangthai,
            manv: JSON.parse(localStorage.getItem('idnv')),
        };
        await axios.put("http://127.0.0.1:8000/api/hdon/"+inputmahd,hd).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }    

    const productColumns = [
        { field: 'MaSP', headerName: 'M?? s???n ph???m', width: 150 }, 
        { field: 'SoLuong', headerName: 'S??? l?????ng', width: 150 },
        {field: "DonGia", headerName: "????n gi??", width: 250,},
        {field: "ThanhTien", headerName: "Th??nh ti???n", width: 250,},        
    ];       
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "690px" }}>
                    <div className="singleright">

                        <form>
                            <div className='singleformInput'>
                                <label>M?? h??a ????n</label>
                                <input type={"text"} value={inputmahd}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>M?? kh??ch h??ng</label>
                                <input type={"text"} value={inputmakh}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>M?? nh??n vi??n</label>
                                <input type={"text"} value={inputmanv}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>H??? t??n kh??ch h??ng</label>
                                <input type={"text"} value={inputhokh + " " + inputtenkh} disabled />
                            </div>                            
                            <div className='singleformInput'>
                                <label>Ng??y sinh</label>
                                <input type={"date"} value={inputngaysinh} disabled />                                                            
                            </div>                            
                            <div className='singleformInput'>
                                <label>Gi???i t??nh</label>
                                <input type={"text"} value={inputgioitinh} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>?????a ch???</label>
                                <input type={"text"} value={inputdiachi} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>S??? ??i???n tho???i</label>
                                <input type={"text"} value={inputsdt} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Email</label>
                                <input type={"text"} value={inputemail} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Ng??y l???p h??a ????n</label>
                                <input type={"text"} value={inputngaylaphoadon} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>T???ng ti???n</label>
                                <input type={"text"} value={inputtongtien} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Tr???ng th??i</label>
                                <select className="select-css" value={inputtrangthai} onChange={onChangeTrangThai} disabled={input}>
                                    <option value='1'>??ang ch??? x??c nh???n</option>
                                    <option value='2'>???? x??c nh???n</option>   
                                    <option value='3'>??ang giao h??ng</option>  
                                    <option value='4'>Ho??n th??nh</option>                               
                                </select>
                            </div>
                            <div className="singleformInput">                                
                                                               
                            </div>
                            <div className="singleformInput">                                
                                {showButtonEdit ? <button type='button' onClick={CapNhapHoaDon}>L??u</button> : null}                                
                            </div>
                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
                <div className='datatable'>
                    <div className="datatableTitle">
                        Danh s??ch chi ti???t h??a ????n
                    </div>
                    <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                        getRowId={(row) => row.MaSP}                                           
                        rows={detailbills}
                        columns={productColumns}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>                
            </div>
        </div>
    );
};

export default SingleBill;