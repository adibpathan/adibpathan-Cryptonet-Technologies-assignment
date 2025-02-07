// src/UserProfile.js

import React from 'react';

const user = {
  "gender": "female",
  "name": {
    "title": "Miss",
    "first": "Laura",
    "last": "Woods"
  },
  "location": {
    "street": {
      "number": 2479,
      "name": "Henry Street"
    },
    "city": "Blessington",
    "state": "Wexford",
    "country": "Ireland",
    "postcode": 78276,
    "coordinates": {
      "latitude": "2.0565",
      "longitude": "95.2422"
    },
    "timezone": {
      "offset": "+1:00",
      "description": "Brussels, Copenhagen, Madrid, Paris"
    }
  },
  "email": "laura.woods@example.com",
  "login": {
    "uuid": "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
    "username": "angryostrich988",
    "password": "racers",
    "salt": "B5ywSDUM",
    "md5": "2eefb6307df2a5fb1f91c6b968dc905b",
    "sha1": "33cbf1e97a31e14c87fb18c481d1f6d958c76cbd",
    "sha256": "83e0c89668c8b6131df0c70fc4bb9abb8831e0ff97a0a29cdfa3949dd5afd491"
  },
  "dob": {
    "date": "1967-07-23T09:18:33.666Z",
    "age": 56
  },
  "registered": {
    "date": "2018-10-18T04:05:51.990Z",
    "age": 5
  },
  "phone": "031-623-5189",
  "cell": "081-807-8083",
  "id": {
    "name": "PPS",
    "value": "1101776T"
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/88.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
  },
  "nat": "IE"
};

const UserProfile = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <img className="w-full h-auto" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
            <p className="text-gray-600">{user.dob.age} years old</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Phone:</p>
              <p className="font-semibold">{user.phone}</p>
            </div>
            <div>
              <p className="text-gray-600">Cell:</p>
              <p className="font-semibold">{user.cell}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
