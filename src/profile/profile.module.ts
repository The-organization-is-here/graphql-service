import { Module } from '@nestjs/common';
import { ProfileResolver } from './resolver/profile-resolver';
import { ProfileService } from './service/profile-service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
