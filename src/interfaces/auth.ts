export interface CurrentUser {
  message: {
    typed: number;
    text: string;
    code: string;
    title: string;
  };
  roles: string[];
  list: [
    {
      userName: string;
      fullName: string;
      nu0Nam1: number;
      mobile: string;
      diaChi: string;
      email: string;
      userStatusNext: [
        {
          statusCode: string;
          statusName: string;
        }
      ];
    }
  ];
  token: string;
  total: number;
}
