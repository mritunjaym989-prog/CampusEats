# HTTP Request Log CampusEats Assignment

## 1. Request 1- Get Post 1

### Command
mritunjaymaurya@Mritunjays-MacBook-Air ~ % 
curl -i https://jsonplaceholder.typicode.com/posts/1

### Full Responce
```text
HTTP/2 200 
date: Fri, 14 Aug 2026 06:06:47 GMT
content-type: application/json; charset=utf-8
content-length: 292
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"124-yiKdLzqO5gfBrJFrcdJ8Yq0LGnU"
expires: -1
- nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=vm67FVLNHsCgrFgubRa04ooDeMKdgwXS9H3i2IbjuoY%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1785194657"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=vm67FVLNHsCgrFgubRa04ooDeMKdgwXS9H3i2IbjuoY%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785194657"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 999
x-ratelimit-reset: 1785194663
age: 12702
accept-ranges: bytes
cf-cache-status: HIT
cf-ray: a2adc688c9226470-BOM
alt-svc: h3=":443"; ma=86400

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}% 
```  
### Annotation 

- **Status:** `200 OK` — The request was successful and the requested post was returned
- **Content-Type:** Content-Type: application/json; charset=utf-8 — The response body is JSON data encoded using UTF-8.

## 2. Request 2- Get user 1

 ### Command
 mritunjaymaurya@Mritunjays-MacBook-Air ~ % curl -i https://jsonplaceholder.typicode.com/users/1

 ### Full Responce
 ```text
 HTTP/2 200 
date: Sat, 15 Aug 2026 08:53:52 GMT
content-type: application/json; charset=utf-8
content-length: 509
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"
expires: -1
nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=c4W1UxriyoWTYFuUhbAlZOrDzICU7r%2BRoXsXRciuS0Y%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1786374767"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=c4W1UxriyoWTYFuUhbAlZOrDzICU7r%2BRoXsXRciuS0Y%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1786374767"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 999
x-ratelimit-reset: 1786374775
age: 3612
accept-ranges: bytes
cf-cache-status: HIT
cf-ray: a2b6f8aa5b8ad8ea-BOM
alt-svc: h3=":443"; ma=86400

{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}% 
```
### Annotation 
- **Status:** `200 OK` means the request succeeded and the requested resource was found.

- **Content-Type:** application/json indicates that the response body contains JSON data.

## 3. Request 3- Get Post 2

### Command
mritunjaymaurya@Mritunjays-MacBook-Air ~ % curl -i https://jsonplaceholder.typicode.com/posts/2

### Full Responce
```text
HTTP/2 200 
date: Sat, 15 Aug 2026 09:02:03 GMT
content-type: application/json; charset=utf-8
content-length: 278
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"116-jnDuMpjju89+9j7e0BqkdFsVRjs"
expires: -1
nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=disGhkkkNNxGJPDcfLwwgv1elBmmV5U8fbfbKG6OTfU%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1786775129"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=disGhkkkNNxGJPDcfLwwgv1elBmmV5U8fbfbKG6OTfU%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1786775129"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 808
x-ratelimit-reset: 1786775143
age: 9394
accept-ranges: bytes
cf-cache-status: HIT
cf-ray: a2b704a6fd5e3fa8-BOM
alt-svc: h3=":443"; ma=86400

{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}% 
```
 ### Annotation
 - **Status:** `200 OK` means the server successfully processed the request.

- **Content-Type:** application/json tells the client that the response is JSON.                        

### 4. Request 4- Get Comments

### Command
   mritunjaymaurya@Mritunjays-MacBook-Air ~ % curl -i "https://jsonplaceholder.typicode.com/comments?postId=1"

### Full Responce
```text
HTTP/2 200 
date: Sat, 15 Aug 2026 09:16:31 GMT
content-type: application/json; charset=utf-8
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"5e6-4bSPS5tq8F8ZDeFJULWh6upjp7U"
expires: -1
nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=T81t2Aq6Ig%2B%2BGuzarFr6RuX6zCOlqTMp3puUMUoUSCk%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1786736913"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=T81t2Aq6Ig%2B%2BGuzarFr6RuX6zCOlqTMp3puUMUoUSCk%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1786736913"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 999
x-ratelimit-reset: 1786736950
age: 17635
cf-cache-status: HIT
cf-ray: a2b719d67f634f72-AMS
alt-svc: h3=":443"; ma=86400

[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }
]
```

### Annotation
- **Status:** `200 OK` means the server successfully processed the request.

- **Content-Type:** application/json tells the client that the response is JSON.

## 5. Request 5 — Get an album

### Command
   mritunjaymaurya@Mritunjays-MacBook-Air ~ % curl -i https://jsonplaceholder.typicode.com/albums/1

### Full Responce
```text
HTTP/2 200 
date: Sat, 15 Aug 2026 09:22:48 GMT
content-type: application/json; charset=utf-8
content-length: 64
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"40-74G1+b66MteeTYAz6G+NybtDGFA"
expires: -1
nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=BsdP84UQVxGsaBUl7SoNdAZphES08AZf9xKZXa4eREo%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1776889103"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=BsdP84UQVxGsaBUl7SoNdAZphES08AZf9xKZXa4eREo%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1776889103"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 836
x-ratelimit-reset: 1776889138
age: 4
accept-ranges: bytes
cf-cache-status: HIT
cf-ray: a2b7230cca25678e-SIN
alt-svc: h3=":443"; ma=86400

{
"userId": 1,
"id": 1,
"title": "quidem molestiae enim"
}% 
```
### Annotation
 - **Status:** `200 OK` means the requested album was successfully returned.

- **Content-Type:** application/json indicates that the response contains JSON  

## 6. Request 6 — Deliberate failure

### Command
mritunjaymaurya@Mritunjays-MacBook-Air ~ % curl -i https://jsonplaceholder.typicode.com/users/999999

### Full Responce
```text

HTTP/2 404 
date: Sat, 15 Aug 2026 09:32:18 GMT
content-type: application/json; charset=utf-8
content-length: 2
access-control-allow-credentials: true
cache-control: max-age=43200
etag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
expires: -1
nel: {"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}
pragma: no-cache
report-to: {"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=%2BTHMy42j8v9xHw3eC9ug0vWk3fAu5bjKPRdevggVdwE%3D\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\u0026ts=1786777876"}],"max_age":3600}
reporting-endpoints: heroku-nel="https://nel.heroku.com/reports?s=%2BTHMy42j8v9xHw3eC9ug0vWk3fAu5bjKPRdevggVdwE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1786777876"
server: cloudflare
vary: Origin, Accept-Encoding
via: 2.0 heroku-router
x-content-type-options: nosniff
x-powered-by: Express
x-ratelimit-limit: 1000
x-ratelimit-remaining: 996
x-ratelimit-reset: 1786777903
age: 8461
cf-cache-status: HIT
cf-ray: a2b730f78dc55e5e-SIN
alt-svc: h3=":443"; ma=86400

{}% 
```

### Annotation
- **Status:** `404 Not` Found means the server could not find the requested resource.

- **Content-Type:** application/json means that the server returned the response using JSON.


                          