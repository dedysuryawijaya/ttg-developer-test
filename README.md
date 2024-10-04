# ttg-developer-test
Source Code untuk tes Tim Teknologi Global
Nama : Dedy Surya Wijaya

# Requitment
1. Node.Js 20
2. Python 3.6 or above
3. mysql

# Cara menjalankan

Clone project ini

# Soal 1
1. Double Klik file index.js di folder Soal 1

# Soal 2
1. Buat database baru di mysql dengan nama `ttg_test`
2. Buka terminal di folder Soal 2
3. Jalankan perintah `npm install`
4. Buat file .env di dalam folder Soal2 dan copy semua isi .env.example ke .env
5. Jalankan perintha `npx prisma migrate dev`
6. Jalankan perintah `node app.js`

## User API Spec

## Register User API

Endpoint : POST api/user/new

Request Body :

```json
{
    "username" : "dedysw",
    "password" : "12345678",
    "email" : "dedy@test.com",
    "phone" : "088888888888"
}
```

Request Body Success:

```json
{
    "success" : true,
    "data" : {
        "id" : "1",
        "username" : "dedysw",
        "email" : "dedy@test.com",
        "phone" : "088888888888",
    }
}
```

Request Body Error:

```json
{
    "success" : false,
    "message" : "Email already exists"
}
```

## Get All User API

Endpoint : GET api/user/all

Request Body :

```json
{
    "page": 1,
    "perPage": 5
}
```

Request Body Success:

```json
{
  "success": true,
  "data": [
    {
      "id": 15,
      "username": "ui",
      "email": "06e897j08n@gmail.com",
      "phone": "085646065203"
    },
    {
      "id": 14,
      "username": "qw",
      "email": "06e9008aj08n@gmail.com",
      "phone": "085646065203"
    },
    {
      "id": 13,
      "username": "er",
      "email": "de9008aj08n@gmail.com",
      "phone": "085646065203"
    },
    {
      "id": 12,
      "username": "rt",
      "email": "de90suaj08n@gmail.com",
      "phone": "085646065203"
    },
    {
      "id": 11,
      "username": "ty",
      "email": "dedysuaj08n@gmail.com",
      "phone": "085646065203"
    }
  ],
  "page": 1,
  "perPage": 5
}
```

Request Body Error:

```json
{
  "success": false,
  "data": "\"page\" is required"
}
```

## GET User by ID API

Endpoint : GET api/user/:id

Request Body :

```json
{

}
```

Request Body Success:

```json
{
  "success": true,
  "data": {
    "id": 9,
    "username": "wydesu",
    "email": "dedysuryajbn@gmail.com",
    "phone": "085646065203"
  }
}
```

Request Body Error:

```json
{
  "success": false,
  "data": "User not found"
}
```

## DELETE User by ID API

Endpoint : DELETE api/user/:id

Request Body :

```json
{

}
```

Request Body Success:

```json
{
  "success": true,
  "data": {
    "id": 9,
    "username": "wydesu",
    "email": "dedysuryajbn@gmail.com",
    "phone": "085646065203"
  }
}
```

Request Body Error:

```json
{
  "success": false,
  "data": "User not found"
}
```

# Soal 3

1. Buka terminal di folder soal3
2. Jalankan perintah `node index.js`

# Soal 4

1. Buka terminal di folder soal4
3. Jalankan perintah `python hitung.py`
