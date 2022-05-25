<?php

namespace App\Http\Resources\Room;

use App\Http\Resources\Hotel\HotelResource;
use App\Http\Resources\RoomType\RoomTypeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'hotel' => new HotelResource($this->hotel),
            'roomType' => new RoomTypeResource($this->roomType),
        ];
    }
}
