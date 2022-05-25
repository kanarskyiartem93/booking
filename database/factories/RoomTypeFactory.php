<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoomType>
 */
class RoomTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'price' => $this->faker->randomFloat(0, 200, 4000),
            'capacity' => $this->faker->randomDigitNot(0),
            'wifi' => $this->faker->boolean,
            'ac' => $this->faker->boolean,
            'heater' => $this->faker->boolean,
            'tv' => $this->faker->boolean,
        ];
    }
}
