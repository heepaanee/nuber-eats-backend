import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/CreateRestaurantDto.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // @Query(() => [Restaurant])
  // restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
  //   console.log(`#### veganOnly : ${veganOnly}`);
  //   return [];
  // }

  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto) {
    console.log(`#### createRestaurantDto :`, createRestaurantDto);

    const { name, isVegan, address, ownerName } = createRestaurantDto;

    console.log(`#### name : ${name}`);
    console.log(`#### isVegan : ${isVegan}`);
    console.log(`#### address : ${address}`);
    console.log(`#### ownerName : ${ownerName}`);

    return true;
  }
}
