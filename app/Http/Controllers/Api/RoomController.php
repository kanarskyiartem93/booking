<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Room\RoomResource;
use App\Models\Room;

class RoomController extends Controller
{
    public function show(Room $room)
    {
        return new RoomResource($room);
    }
}
