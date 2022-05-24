<?php


namespace App\Http\Services;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelService
{
    public function filterHotels(Request $request)
    {
        return Hotel::filterByCity($request->city_id)->get();
    }
}
