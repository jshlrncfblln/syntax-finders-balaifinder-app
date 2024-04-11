import { db } from "../connect.js";
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name as the uploaded file name
  }
});

// Initialize multer with the configured storage options
const upload = multer({ storage: storage });


export const getproperties = (req, res) => {
  const q = "SELECT * FROM propertiestable";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

export const addproperties = (req, res) => {
  console.log("Received property data:", req.body); // Log received property data

  const sqlAddproperty =
    "INSERT INTO propertiestable (`name`, `numberofbathroom`, `imgsrc`) VALUES (?, ?, ?)";

  const values = [
    req.body.name,
    req.body.numBathrooms,
    req.file.filename, // Use req.file.filename to get the filename of the uploaded image
  ];

  db.query(sqlAddproperty, values, (err, data) => {
    if (err) {
      console.error("Error adding property:", err);
      return res.send(err);
    }
    console.log("Property added successfully:", data);
    return res.json(data);
  });
};


export const updproperties = (req, res) => {
  const propertyId = req.params.id;
  const q =
    "UPDATE propertiestable SET `name`= ?, `type`= ?, `location`= ?, `price`= ?, `isnearschool`= ?, `isnearchurch`= ?, `isnearmall`= ?, `numberofbedroom`= ?, `numberofbathroom`= ?, `typeoflot`= ?, `familysize`= ?, `nearelementary`= ?, `nearhighschool`= ?, `nearcollege`= ?, `plantodobusiness`= ?, `monthly`= ?, `description`= ?, `imgsrc`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.type,
    req.body.location,
    req.body.price,
    req.body.isnearschool,
    req.body.isnearchurch,
    req.body.isnearmall,
    req.body.numberofbedroom,
    req.body.numberofbathroom,
    req.body.typeoflot,
    req.body.familysize,
    req.body.nearelementary,
    req.body.nearhighschool,
    req.body.nearcollege,
    req.body.plantodobusiness,
    req.body.monthly,
    req.body.description,
    req.body.imgsrc,
  ];

  db.query(q, [...values, propertyId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

export const delproperties = (req, res) => {
  const propertyId = req.params.id;
  const q = " DELETE FROM propertiestable WHERE id = ? ";

  db.query(q, [propertyId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
