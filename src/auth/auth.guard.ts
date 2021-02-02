import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    console.log('#### gqlContext :', gqlContext);

    /*
    GraphQLModule.forRoot({
      ...
      context: ({ req }) => {
        user: req['user'];
      },
    }),
    */
    const user = gqlContext['user'];
    console.log('#### user :', user);

    if (!user) {
      return false;
    } else {
      return true;
    }
  }
}
