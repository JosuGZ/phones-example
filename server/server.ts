import * as Express from 'express';
import * as Subdomain from 'express-subdomain';
import * as Path from 'path';
//import * as Compression from 'compression';

var app: Express.Application = Express();

app.disable('etag');

// For development
app.set('subdomain offset', 1);

// TODO: In production, change to the right url
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Logging requests
app.use((req, res, next) => {
  console.log(req.subdomains);
  var log: any = {};
  var date = new Date();
  log.timestamp = date.getTime();
  log.method = req.method;
  log.hostname = req.hostname;
  log.originalUrl = req.originalUrl;
  log.path = req.path;
  log.ip = req.ip;
  log.ips = req.ips;
  log.protocol =   req.protocol;
  log.body = req.body;
  console.log(JSON.stringify(log));
  next();
});

var router = Express.Router();

//api specific routes
router.get('/', function(req, res) {
  res.send('Welcome to our API!');
});

router.get('/phones', function(rec, res) {
  setTimeout(() => { // Simulating a very slow server so the loading can be seen
    res.send([
      {
        name: 'OnePlus 3T',
        image: '/images/oneplus-3t-midnight-black.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/apple-iphone-x-new-1.jpg',
          '/images/apple-iphone-x-new-2.jpg',
          '/images/apple-iphone-x-4.jpg'
        ],
        processor: 'Apple A11 Bionic',
        ram: '3GB',
        storage: '256GB',
        screen: {
          size: 5.8,
          width: 1125,
          height: 2436
        },
        description: 'Lo último de Apple'
      },
      {
        name: 'Samsung Galaxy S7',
        image: '/images/samsung-galaxy-s7-2.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'iPhone 7',
        image: '/images/apple-iphone-7-2.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Apple iPhone 7 Plus',
        image: '/images/apple-iphone-7-plus-01.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      },
      {
        name: 'Iphone X',
        image: '/images/apple-iphone-x-new-1.jpg',
        images: [
          '/images/oneplus-3t-midnight-black.jpg',
          '/images/oneplus-3t-3.jpg',
          '/images/oneplus-3-soft-gold.jpg'
        ],
        processor: 'Snapdragon 821',
        ram: '6GB',
        storage: '128GB',
        screen: {
          size: 5.5,
          width: 1980,
          height: 1920
        },
        description: 'Disfruta de la gama alta sin dejarte un riñón'
      }
    ]);
  }, 2000);
});

app.use(Subdomain('api', router));

app.get('/', (req, res) => {
  res.sendfile(Path.resolve(__dirname, '../dist/index.html'));
});
app.use(Express.static(Path.resolve(__dirname, '../dist')));

app.listen(3000, function() {
  console.log('Server listening on ' + 3000);
});
