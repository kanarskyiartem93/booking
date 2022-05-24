<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Hotel\HotelResource;
use App\Http\Services\HotelService;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    private const RANDOM_HOTELS_MAIN_PAGE = 10;
    public $service;

    public function __construct(HotelService $service)
    {
        $this->service = $service;
    }


    public function random()
    {
        return HotelResource::collection(Hotel::all()->random(self::RANDOM_HOTELS_MAIN_PAGE));
    }

    public function index(Request $request)
    {
        $hotels = $this->service->filterHotels($request);

        return HotelResource::collection($hotels);
    }
}
