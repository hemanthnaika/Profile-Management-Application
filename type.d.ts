export interface Profile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: string;
  pronouns: string;
  gender: string;
  age: number;
}

export interface ProfilesResponse {
  data: Profile[];
  success: boolean;
}

export interface SingleProfileResponse {
  success: boolean;
  data: Data;
}

export interface SingleProfile {
  id: string;
  name: string;
  avatar: string;
  gender: string;
  age: number;
  pronouns: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: string;
}
