import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import Select from "react-select";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import { ModalFooter } from 'react-bootstrap';
const SingleCategory = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    console.log(file);
    const options = [
        { value: 'ad', label: 'Admin' },
        { value: 'nv', label: 'Nhân viên' },
        { value: 'ql', label: 'Quản lý' }
    ]
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "200px" }}>
                    <div className="singleright">

                        <form>
                            <div className='singleformInput'>
                                <label>Mã Loại Sản Phẩm</label>
                                <input type={"text"} placeholder={"ABC"} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên Loại Sản Phẩm</label>
                                <input type={"text"} placeholder={"ABC"} disabled={input} />
                            </div>

                            <div className='singleformInput'>

                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button>Lưu</button> : null}

                            </div>



                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;