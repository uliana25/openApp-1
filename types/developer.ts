export interface IDeveloper {
  fullName: string;
  profile: string;
  education: string;
  phone: string;
  mail: string;
  address: string;
  skills: string[];
  interests: string[];
}

export interface IExperience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface IEducation {
  name: string;
  period: string;
  description: string;
}
