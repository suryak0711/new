const express =require('express');
const mysql =require('mysql');
const cors =require('cors');
const multer = require('multer');

const app =express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/upload', express.static('upload'));


const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Ecom'
})
con.connect((err)=>{
    if(err){
        console.error('error');
    }
    else{
        console.log('success');
    }
})
app.listen(3001,()=>{
    console.log('server running');
});



app.post('/login', (req, res) => {
    const uname = req.body.uname;
    const pass = req.body.pass;

    const sql5 = "SELECT * FROM admin WHERE Username = ? AND Pass = ?";
    con.query(sql5, [uname, pass], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            res.send({ login: true });
        } else {
            res.send({ login: false });
        }
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });


app.post('/add', upload.single("file"), async (req, res) => {
    try {
        const Pname = req.body.Pname;
        const Brand = req.body.Brand;
        const Ptype = req.body.Ptype;
        const PPrice = req.body.PPrice;
        const Detail = req.body.Detail;
        const Img = req.file.path; 

        const sql = "INSERT INTO addproduct (P_Name, Brand, P_Type, P_Price, Detail, Img) VALUES (?, ?, ?, ?, ?, ?)";
        con.query(sql, [Pname, Brand, Ptype, PPrice, Detail, Img], (err, result) => {
            if (err) {
                console.error('Error inserting record:', err);
                res.status(500).send({
                    status: false,
                    message: "Error inserting product"
                });
            } else {
                console.log('Product inserted successfully');
                res.send({
                    status: true,
                    message: "Product inserted successfully"
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/viewdata', (req, res) => {
    const sql2 = "SELECT * FROM addproduct";
    con.query(sql2, (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
        } else {
            res.json(result);
        }
    });
});


app.delete('/delete/:id', function(req, res) {
    const id = req.params.id; 
    con.query("DELETE FROM addproduct WHERE id = ?", [id], (err) => {
        if (err) {
            console.error('Error deleting data:', err);
            res.status(500).json({ message: 'Failed to delete the data', error: err }); 
        } else {
            res.status(200).json({ message: 'Deleted successfully' }); 
        }
    });
});

app.get('/read/:id',function(req,res){
    const id1=req.params.id;
    const que="SELECT * FROM addproduct WHERE id=?";
   
    con.query(que,[id1],(err,result)=>{
        if(err){
            console.error('error fetching data:',err);
            return res.status(500).json({message:'error fetching data'});
        }if(result.length === 0){
            return res.status(404).json({message:'employee not found'});
        }
            res.json(result[0]);
    });
});

const uploads = multer({ dest: 'uploads/' });
app.put('/upd/:id', uploads.single('Img'), (req, res) => {
    const id = req.params.id;
    const { Pname, Brand, Ptype, PPrice, Detail } = req.body;
    const Img = req.file ? req.file.filename : null;

    const sql9 = "UPDATE addproduct SET P_Name=?, Brand=?, P_Type=?, P_Price=?, Detail=?, Img=? WHERE id=?";
    
    con.query(sql9, [Pname, Brand, Ptype, PPrice, Detail, Img, id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Error executing query' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product updated successfully' });
    });
});

app.post('/cus', (req, res) => {
    const { name, email, phno, subject, message } = req.body;
  
    const query = "INSERT INTO contact (name, email, phno, subject, message) VALUES (?, ?, ?, ?, ?)";
    con.query(query, [name, email, phno, subject, message], (err, result) => {
      if (err) {
        console.error('Error inserting record:', err);
        res.status(500).send('Server error');
      } else {
        console.log('Record inserted successfully');
        res.status(200).send('Record inserted');
      }
    });
  });
  

  app.get('/read1/:id', (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM addproduct WHERE id = ?";
    
    con.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).json({ message: 'Error fetching data' });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json(result[0]);
    });
  });

  app.get('/count', (req, res) => {
    const query1 = 'SELECT COUNT(P_Name) AS count FROM addproduct';
    con.query(query1, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ count: result[0].count }); 
    });
});

app.get('/allorder', (req, res) => {
    const ord = 'SELECT COUNT(*) AS count FROM orders';
    con.query(ord, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ count: result[0].count }); 
    });
});

app.get('/ucount', (req, res) => {
    const ord = 'SELECT COUNT(*) AS count FROM users';
    con.query(ord, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ count: result[0].count }); 
    });
});



  app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM addproduct WHERE id = ?';
    con.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error fetching product data:', err);
        return res.status(500).json({ error: err });
      }
      res.json(result[0]);
    });
  });
  

  app.post('/order', (req, res) => {
    const { product_id, quantity, total_price, user_name, address, phone } = req.body;
    const query = 'INSERT INTO orders (product_id, quantity, total_price, user_name, address, phone) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [product_id, quantity, total_price, user_name, address, phone], (err, result) => {
      if (err) {
        console.error('Error placing order:', err);
        return res.status(500).json({ error: err });
      }
      res.json({ success: true, message: 'Order placed successfully', orderId: result.insertId });
    });
  });

  app.get('/orderdetail', (req, res) => {
    con.query("SELECT * FROM orders", (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
        } else {
            res.json(result);
        }
    });
});

app.post('/ulogin', (req, res) => {
    const { username, password } = req.body;
    con.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid credentials!' });
      }
    });
  });
  
  app.get('/udata', (req, res) => {
    con.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
        } else {
            res.json(result);
        }
    });
});


app.get('/ucon', (req, res) => {
    con.query("SELECT * FROM contact", (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
        } else {
            res.json(result);
        }
    });
});

app.post('/register', (req, res) => {
  const { username,email, password ,address} = req.body;
  const query = 'INSERT INTO users (username,email, password,address) VALUES (?, ?,?,?)';
  db.query(query, [username,email, password,address], (err, results) => {
    if (err) throw err;
    res.status(201).send('User registered!');
  });
});  