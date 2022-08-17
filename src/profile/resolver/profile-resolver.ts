import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile } from '../models/profile-model';
import { ProfileService } from '../service/profile-service';
import { ProfileCreation } from '../models/profile-creation';

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Query((returns) => Profile)
  async profile(@Args('id', { type: () => String }) id: string) {
    return this.profileService.getProfile(id);
  }

  @Mutation((returns) => Profile)
  async upvotePost(@Args('data') profile: ProfileCreation) {
    return this.profileService.createProfile(profile);
  }
}
