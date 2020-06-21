# Blue1984: Mobile
### Twitter without censorship

![1984v2 008](https://user-images.githubusercontent.com/26343374/85220247-9d21a580-b3b2-11ea-8870-ccc5a0f1d1eb.jpeg)

This anti-censorship app for twitter was designed from scratch especially for Bluzelle hackathon.

Find more information, backend & mobile apps: https://github.com/MikaelLazarev/blue1984-server

## Mobile app

<img src='https://user-images.githubusercontent.com/26343374/83404016-7ce57300-a412-11ea-947b-9be3bbbf07d5.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404020-7f47cd00-a412-11ea-9422-ec1211715b1d.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404018-7eaf3680-a412-11ea-94cb-321941c54c12.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404017-7eaf3680-a412-11ea-90cb-fd732463cc0d.png' width='21%'/>

## Project repostories

Server: https://github.com/MikaelLazarev/blu1984 (core repository)

Mobile apps: https://github.com/MikaelLazarev/blue1984-mobile

Front-end: https://github.com/MikaelLazarev/blue1984-web

Twitter scrapper microservice: https://github.com/MikaelLazarev/blue1984-scrapper

## How to install

1. Clone this repository: ```git clone```
2. Install node dependencies with ```yarn``` or ```npm i```
3. Open ./config.ts and provide server address. 
If you start this app locally, please provide real network address (like 192.168.0.35) instead localhost:
```
export const BACKEND_ADDR = 'http://192.168.0.47:4000';
```
4. Go to ./ios folder: ```cd ios```
5. Install ios dependencies with ```pod install```
6. Run iOS app with ```yarn ios``` or ```npm start ios```
7. Run Android app with ```yarn android``` or ```npm run android```

## Disclaimer

This application is provided "as is" and "with all faults." Me as developer makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of this software. There are inherent dangers in the use of any software, and you are solely responsible for determining whether this software product is compatible with your equipment and other software installed on your equipment. You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing this software product.
