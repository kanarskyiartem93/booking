<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'description' => $this->faker->realText($this->faker->numberBetween(30,40)),
            'address' => $this->faker->streetAddress,
            'city_id' => City::all()->random()->id,
            'user_id' => User::all()->random()->id,
        ];
    }
}
