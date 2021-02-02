import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    console.log('#### gqlContext :', gqlContext);

    const user = gqlContext['user'];
    console.log('#### user :', user);

    const user2 = gqlContext.req['user'];
    console.log('#### user2 :', user2);

    if (!user2) {
      return false;
    } else {
      return true;
    }
  }
}
