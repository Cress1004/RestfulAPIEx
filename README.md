- Link tham khao tao Restful API:
https://www.youtube.com/watch?v=vjf774RKrLc&list=WL&index=18&t=0s&fbclid=IwAR1u9tybQxXGwKU58NKOzIUBrt4H_G0KK-SZscZaYLmRAOLqRmyN_JThuIA


1.  De tao ra package.json mau: 
    $ npm init  -yes
2.  De tao ra nodemon:
    $ npm install express nodemon
    (Sau moi lan thay doi code, khong can khoi dong lai server thong qua lenh "node app.js")
3.  Thay doi  noi dung cua phan "scripts" trong file package.json:
    "start": "nodemon app.js"
4.  Install MongoDB:
    $ npm install mongoose
5.  Install dotenv
    $ npm install dotenv
6.  Install body-parser
    $ npm install body-parser
7.  Install cors(khi việc client gọi 1 api từ 1 nguồn khác có domain khác với trang hiện tại là cors)
    $ npm install cors