<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    public function rooms()
    {
        return $this->hasMany(Room::class, 'hotel_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function roomRoomType()
    {
        return $this->hasOneThrough(RoomType::class, Room::class);
    }

    public function scopeFilterByCity($query, $cityId)
    {
        if ($cityId) {
            return $query->where('city_id', $cityId);
        }
    }

    public function scopeFilterByCapacity($query, $capacity)
    {
        if ($capacity) {
            return $query->whereHas('rooms.roomType', function (Builder $builder) use ($capacity) {
                $builder->where('capacity', '>=', $capacity);
            });
        }
    }
}
