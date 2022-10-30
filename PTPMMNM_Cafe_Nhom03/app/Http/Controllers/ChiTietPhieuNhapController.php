<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ChiTietPhieuNhap as ChiTietPhieuNhapResource;
use App\Models\ChiTietPhieuNhapModel;
use Illuminate\Support\Facades\Validator;

class ChiTietPhieuNhapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index() // Hàm lấy danh sách tất cả chi tiết phiếu nhập
    // {        
    //     $chitietphieunhaps = ChiTietPhieuNhapModel::all();
    //     $arr=[
    //         'status' => true,
    //         'message' => 'Danh sách chi tiết phiếu nhập',
    //         'data' => ChiTietPhieuNhapResource::collection($chitietphieunhaps),
    //     ];
    //     return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Thêm mới chi tiết phiếu nhập
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaPNH' => 'required', 'MaSP' => 'required','SoLuong' => 'required',
             'DonGia' => 'required', 'ThanhTien' => 'required',
        ]);
        // Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $mapnh = $input['MaPNH'];
        $masp = $input['MaSP'];
        $soluong = $input['SoLuong'];
        $dongia = $input['DonGia'];
        $thanhtien = $soluong * $dongia;
        ChiTietPhieuNhapModel::insert([
            'MaPNH' => $mapnh,
            'MaSP' => $masp,
            'SoLuong' => $soluong,
            'DonGia' => $dongia,
            'ThanhTien' => $thanhtien,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Chi tiết phiếu nhập đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function show($id) 
    // {        
    //     $chitietphieunhap = ChiTietPhieuNhapModel::find($id);
    //     if (is_null($chitietphieunhap)){
    //         $arr = [
    //             'status' => false,
    //             'message' => 'Không có chi tiết phiếu nhập này',
    //             'data' => [],
    //         ];
    //         return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
    //     }
    //     $arr = [
    //         'status' => true,
    //         'message' => 'Chi tiết phiếu nhập',
    //         'data' => new ChiTietPhieuNhapResource($chitietphieunhap),
    //     ];
    //     return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, ChiTietPhieuNhapModel $chitietphieunhap)
    // {        
    //     $input = $request->all();
    //     $validator = Validator::make($input,[
    //         'MaSP' => 'required','SoLuong' => 'required',
    //          'DonGia' => 'required', 'ThanhTien' => 'required',
    //     ]);

    //     if ($validator->fails()){
    //         $arr = [
    //             'status' => false,
    //             'message' => 'Lỗi kiểm tra dữ liệu',
    //             'data' => $validator->errors()
    //         ];
    //         return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
    //     }

    //     $chitietphieunhap->MaSP = $input['MaSP'];
    //     $chitietphieunhap->SoLuong = $input['SoLuong'];
    //     $chitietphieunhap->DonGia = $input['DonGia'];
    //     $chitietphieunhap->ThanhTien = $input['ThanhTien'];

    //     $arr = [
    //         'status' => true,
    //         'message' => 'Chi tiết phiếu nhập đã cập nhật thành công',
    //         'data' => new ChiTietPhieuNhapResource($chitietphieunhap),
    //     ];
    //     return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($mapnh,$masp) // Xóa chi tiết phiếu nhập
    {
        ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->delete();
        $arr=[
            'status' => true,
            'message' => 'Chi tiết phiếu nhập đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}