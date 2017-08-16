var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodDB');

var food = mongoose.model('food', { name: String ,  formula: String ,  video: String ,  photo: String , direction: String });
var myobj = new food({
  name: 'ข้าวผัดน้ำพริกปลาทู',
  formula: '1.น้ำพริกกะปิ  2.น้ำมันสำหรับผัด 3.ข้าวสุก 4.ไข่เค็ม  5.ปลาทูทอด  6.ไข่ทอดชะอม 7.แตงกวา ',
  video: 'https://www.youtube.com/watch?v=7ViXJ4cKLrc',
  photo: '555.png',
  direction: '1.ตั้งกระทะ ใส่น้ำมันรอให้น้ำมันร้อน จากนั้นใส่น้ำพริกกะปิลงไปผัด  2.ใส่ข้าวสุกที่เตรียมไว้ลงไปผัดกับน้ำพริก ผัดให้เข้ากัน  3.ตักใส่จาน ใส่ไข่เค็ม ปลาทูทอด ไข่ทอดชะอม ใส่แตงกวา แค่นี้ก็เป็นอันเสร็จ '
});

var user = mongoose.model('user', { name: String ,  password: String ,  email: String });
var myobj = new user({
  name: 'สายบัว',
  password: '123456',
  email: 'Sai.123@gmail.com'
});

myobj.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('welcome');
  }
})





/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/foodDB";
MongoClient.connect(url, function (err, db) {
  db.createCollection("foodTB", function (err, res) {
    if (err) throw err;
    console.log("Create Collection Complete");
    db.close();
   });
});
*/



