function fun(){
    let obj = {
        1: 5,
        2: 7,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
      };
      console.log(obj);
      
      Object.entries(obj).forEach(entry => {

        [key, value] = entry;
        console.log(key, value);
      });
      
}

fun();

{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Apolline",
                "last": "Vidal"
            },
            "location": {
                "street": {
                    "number": 2400,
                    "name": "Rue Pasteur"
                },
                "city": "Orléans",
                "state": "Creuse",
                "country": "France",
                "postcode": 49222,
                "coordinates": {
                    "latitude": "1.1388",
                    "longitude": "123.0825"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "apolline.vidal@example.com",
            "login": {
                "uuid": "1fe63fa3-632c-4598-86cc-308215e35652",
                "username": "silverduck138",
                "password": "shalom",
                "salt": "niWvLGrz",
                "md5": "d72ac77da09f7bb469bd5b285086c963",
                "sha1": "2a2b9ee6623eb9996109760c35757b0f3cd1131c",
                "sha256": "7fbe5a3986c66e5c745606ed0da8d2ca0790bdf90f5afee12cf00eec3886f81e"
            },
            "dob": {
                "date": "1974-07-14T07:25:23.746Z",
                "age": 48
            },
            "registered": {
                "date": "2005-05-18T00:57:36.356Z",
                "age": 17
            },
            "phone": "02-91-34-31-81",
            "cell": "06-89-94-54-30",
            "id": {
                "name": "INSEE",
                "value": "2NNaN94369644 04"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/10.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Adam",
                "last": "Tremblay"
            },
            "location": {
                "street": {
                    "number": 8640,
                    "name": "Wellington St"
                },
                "city": "Odessa",
                "state": "Saskatchewan",
                "country": "Canada",
                "postcode": "Z4D 8H7",
                "coordinates": {
                    "latitude": "66.0494",
                    "longitude": "-114.4123"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "adam.tremblay@example.com",
            "login": {
                "uuid": "dff78650-e659-4fb6-a091-00e0dfae6623",
                "username": "silverpeacock659",
                "password": "room",
                "salt": "zlojadBs",
                "md5": "eda92258ac156d6112c3c58c8abb8f75",
                "sha1": "9a3c33943edf0da5f02546c8718c53e5ddf351e5",
                "sha256": "368c91850e903f84c3b9e9e461448fc547fd8a5e9411a5b3b96562e0ac0a1594"
            },
            "dob": {
                "date": "1993-08-27T00:18:50.452Z",
                "age": 29
            },
            "registered": {
                "date": "2002-04-13T04:36:24.072Z",
                "age": 20
            },
            "phone": "972-684-6902",
            "cell": "839-689-7322",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/18.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
            },
            "nat": "CA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jake",
                "last": "Johnson"
            },
            "location": {
                "street": {
                    "number": 7953,
                    "name": "Omahu Road"
                },
                "city": "Rotorua",
                "state": "Marlborough",
                "country": "New Zealand",
                "postcode": 28168,
                "coordinates": {
                    "latitude": "-62.8716",
                    "longitude": "-178.0908"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "jake.johnson@example.com",
            "login": {
                "uuid": "074ccc9e-02fb-43ac-aae0-4d5eaefb533f",
                "username": "blackbird605",
                "password": "macbeth",
                "salt": "thx2k4vi",
                "md5": "b6099173aea96facb007b9beb14ae7db",
                "sha1": "be27ee3523ce298f1a058d1cec383c4085607fc3",
                "sha256": "b496ca1295bfe9927f246a6645a2c1c3875c2c5cd3af8eb9df93cfaa05dcfd14"
            },
            "dob": {
                "date": "1956-03-22T00:36:33.721Z",
                "age": 66
            },
            "registered": {
                "date": "2006-07-17T00:12:19.717Z",
                "age": 16
            },
            "phone": "(048)-412-2110",
            "cell": "(146)-622-4048",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/44.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
            },
            "nat": "NZ"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Lídio",
                "last": "Aragão"
            },
            "location": {
                "street": {
                    "number": 9496,
                    "name": "Rua Quatro"
                },
                "city": "São Carlos",
                "state": "Acre",
                "country": "Brazil",
                "postcode": 97078,
                "coordinates": {
                    "latitude": "-6.1820",
                    "longitude": "-132.2735"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "lidio.aragao@example.com",
            "login": {
                "uuid": "d4cd485a-c9b6-4351-ad2e-52820833707d",
                "username": "greenbear822",
                "password": "bishop",
                "salt": "x2Fr2K8H",
                "md5": "b62837b073d1b1512f6e2d77a810fb91",
                "sha1": "7f078c2614c839342a61900d2d65628a6d1003d3",
                "sha256": "c47caa7bf0b1d99994f6bb8b2fbc5a9ae3a2a1c2cd5a75c5524481fca81d8074"
            },
            "dob": {
                "date": "1988-01-21T23:39:48.950Z",
                "age": 34
            },
            "registered": {
                "date": "2002-05-15T12:00:54.756Z",
                "age": 20
            },
            "phone": "(39) 3123-5519",
            "cell": "(66) 0794-7897",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/83.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Zachary",
                "last": "Jean-Baptiste"
            },
            "location": {
                "street": {
                    "number": 5683,
                    "name": "Concession Road 6"
                },
                "city": "Woodstock",
                "state": "Prince Edward Island",
                "country": "Canada",
                "postcode": "R9A 0X5",
                "coordinates": {
                    "latitude": "-12.2437",
                    "longitude": "-121.6403"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "zachary.jean-baptiste@example.com",
            "login": {
                "uuid": "4322016a-9347-406d-94a0-6f8d0f5d84d9",
                "username": "blueleopard390",
                "password": "bonnie",
                "salt": "KbFbKnIA",
                "md5": "b28502744f9b9b32b844756fd69885d3",
                "sha1": "7a595210dc44b8d4292b4387d7045da717711e72",
                "sha256": "a9af79685769fff11b0512051bd5bc53354e4e0e6b260121d837a7e7ea695a67"
            },
            "dob": {
                "date": "1977-03-24T06:10:45.341Z",
                "age": 45
            },
            "registered": {
                "date": "2002-08-14T10:59:47.975Z",
                "age": 20
            },
            "phone": "673-960-8937",
            "cell": "044-702-3061",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/67.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
            },
            "nat": "CA"
        }
    ],
    "info": {
        "seed": "bc30399850e308c4",
        "results": 5,
        "page": 1,
        "version": "1.3"
    }
};