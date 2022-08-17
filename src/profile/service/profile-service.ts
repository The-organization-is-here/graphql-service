import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { Profile } from '../models/profile-model';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Constants } from '../profile-constants';
import { ProfileCreation } from '../models/profile-creation';

@Injectable()
export class ProfileService {
  readonly profile: Profile;

  constructor(private httpService: HttpService) {
    this.profile = new Profile();
  }

  getProfile(id: string): Observable<AxiosResponse<Profile>> {
    return this.httpService
      .get(Constants.PROFILE_URL_DASH + id)
      .pipe(map((response) => response.data));
  }

  createProfile(profile: ProfileCreation): Observable<AxiosResponse<Profile>> {
    return this.httpService.post(Constants.PROFILE_URL, profile).pipe(
      map((response) => {
        console.log(response.data);
        return response.data;
      }),
    );
  }
}
