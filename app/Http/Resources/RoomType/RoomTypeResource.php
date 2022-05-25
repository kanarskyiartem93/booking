<?php

namespace App\Http\Resources\RoomType;

use App\Http\Resources\Room\RoomResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomTypeResource extends JsonResource
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
            'price' => $this->price,
            'capacity' => $this->capacity,
            'wifi' => $this->wifi,
            'ac' => $this->ac,
            'heater' => $this->heater,
            'tv' => $this->tv,
        ];
    }
}
