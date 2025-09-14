const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Mongo connected");
  })
  .catch(err => {
    console.log("Connection error");
    console.log(err);
  });

const seedProducts = [
  { name: 'Alphonso Mango (1 kg)', price: 150, category: 'Fruit', image: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-mango-tree-alphonso-grafted-plant-16969020702860.jpg?v=1634223731' },
  { name: 'Banana (Dozen)', price: 40, category: 'Fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiE9BZy3SyV4Xb83a3V-e8Ywq6z1bVZlGsA&s'},
  { name: 'Bell Pepper Mix (700 g)', price: 120, category: 'Vegetable', image: 'https://m.media-amazon.com/images/I/41dAQYYglyL._UF1000,1000_QL80_.jpg' },
  { name: 'Blueberries Pack (200 g)', price: 200, category: 'Fruit', image: 'https://www.shutterstock.com/image-photo/packed-blueberries-isolated-on-white-600nw-1917299351.jpg'},
  { name: 'Broccoli (500 g)', price: 90, category: 'Vegetable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsE5LQ6aYn3xAHdYZSJ70Yjid_UYiDRmeQg&s' },
  { name: 'Butter (200 g)', price: 180, category: 'Dairy', image: 'https://www.bhg.com/thmb/-luCrhu9Eh1C2u-oZXseX5tKAbk=/3000x0/filters:no_upscale():strip_icc()/bhg-how-many-grams-are-in-one-stick-of-butter-03-2c71be43bb20474384f7483c3827f8e7.jpg' },
  { name: 'Carrot (500 g)', price: 50, category: 'Vegetable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp3Vx2S_zSSRoLboLpODBfF2QR-HOXcKFKg&s' },
  { name: 'Cauliflower (1 kg)', price: 70, category: 'Vegetable', image: 'https://m.media-amazon.com/images/I/91EdPVzD99L.jpg' },
  { name: 'Cheddar Cheese (200 g)', price: 240, category: 'Dairy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0sSnuI51i-ZOBCHhJAwqo0hbyCrCI6Mjgw&s' },
  { name: 'Chocolate Milk (1 L)', price: 90, category: 'Dairy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgcnC8ipgPBv2ssA62ehxh582IsNjsVxrmw&s' },
  { name: 'Cucumber (each)', price: 25, category: 'Vegetable', image: 'https://m.media-amazon.com/images/I/71xkI-PIE5L._UF1000,1000_QL80_.jpg' },
  { name: 'Curd Homemade (500 g)', price: 80, category: 'Dairy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIeNXICvgi_EtPQibMOTBoysiI6BUqrQvVg&s' },
  { name: 'Gala Apple (500 g)', price: 60, category: 'Fruit', image: 'https://www.jiomart.com/images/product/original/590000005/apple-royal-gala-1-kg-product-images-o590000005-p590000005-0-202409171905.jpg?im=Resize=(1000,1000)' },
  { name: 'Honeycrisp Apple (500 g)', price: 120, category: 'Fruit' , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAAekq9pfwL8YpIFVuNRZXwxkfVLpnyc1Vg&s'},
  { name: 'Navel Orange (1 kg)', price: 80, category: 'Fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeZXkNS7Hd4WWCwTC9PggQratXxVMYhFqtA&s' },
  { name: 'Onion (1 kg)', price: 45, category: 'Vegetable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTLSXlSbko9jRKshtH_fTjXukOR83fQkL5A&s' },
  { name: 'Paneer (200 g)', price: 140, category: 'Dairy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CGWz2DAp5NZV2KodnNHepE83azj-1Iw7QQ&s' },
  { name: 'Pineapple (1 kg)', price: 100, category: 'Fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPetdXOc_EVoreBfy2xGrEf9_l-iEbS-lzQ&s'},
  { name: 'Pomegranate (1 kg)', price: 140, category: 'Fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfZ4N5YPCPYKYrivdbIOgJ1jG78VEy5GhHg&s'},
  { name: 'Potato (1 kg)', price: 35, category: 'Vegetable', image: 'https://m.media-amazon.com/images/I/41QKCkQ2A5L._UF894,1000_QL80_.jpg' },
  { name: 'Spinach Bunch', price: 30, category: 'Vegetable', image: 'https://m.media-amazon.com/images/I/71tdN2taTCL._UF1000,1000_QL80_.jpg' },
  { name: 'Strawberries Pack (800 g)', price: 180, category: 'Fruit', image: 'https://m.media-amazon.com/images/I/413ByyZnyjL._UF1000,1000_QL80_.jpg' },
  { name: 'Tomato (1 kg)', price: 60, category: 'Vegetable', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
  { name: 'Whole Milk (1 L)', price: 60, category: 'Dairy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TrCnG35LucrHksVF3SSs3iXxtUQzljuwvw&s' },
  { name: 'Yogurt (500 g)', price: 70, category: 'Dairy', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/250px-Turkish_strained_yogurt.jpg' }
];

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    const p = await Product.insertMany(seedProducts);
    console.log('Seeded products:', p.length);
  } catch (e) {
    console.error(e);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
