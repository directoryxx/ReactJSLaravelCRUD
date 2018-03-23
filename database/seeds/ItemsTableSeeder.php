<?php

use Illuminate\Database\Seeder;
use App\Item;
use Carbon\Carbon;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Item::truncate();

      $faker = \Faker\Factory::create();

      // And now, let's create a few articles in our database:
      for ($i = 0; $i < 50; $i++) {
          Item::create([
              'namabarang' => $faker->name,
              'hargabarang' => $faker->unique()->randomNumber($nbDigits = 8),
              'created_at' => Carbon::now(),
              'updated_at' => Carbon::now(),
          ]);
      }
    }
}
