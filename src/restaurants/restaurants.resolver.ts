import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/CreateRestaurantDto.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => Boolean)
  isPizzaGood(): boolean {
    return true;
  }

  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(`#### veganOnly : ${veganOnly}`);
    return [];
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
