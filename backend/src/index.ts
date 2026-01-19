import express from "express";
import { Movie, User } from "./db.js";
import jwt, { type JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { authMiddleware } from "./authMiddleware.js";
import cors from 'cors'
dotenv.config();


const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.post("/api/v1/signup", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const response = await User.create({
      name: name,
      email: email,
      password: password,
    });
    if (response) {
      return res.status(200).json({ message: "You have signup Sucessfully" });
    }
    if (!response) {
      return res.status(411).json({
        message: "Some error ocuur",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: `Someting went error ${error}`,
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.email;

    const response = await User.findOne({ email: email, password:password });
    if (!response) {
      return res
        .status(411)
        .json({ message: "Email not exist ,Please register first" });
    }

    if (response) {
      const token = jwt.sign(
        { id: response._id,role:response.role},
        process.env.JWT_SECRET as string,
      );
      return res.status(200).json({
        token: token,
        message: "Your have succesfully login",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: `Something went wrong ${error}`,
    });
  }
});
//add the movie 
app.post("/movies",authMiddleware, async (req, res) => {
  try {
    // const name = req.body.name
    // const description= req.body.description
    // const rating = req.body.rat
    const { name, description, rating, releaseDate, duartion } = req.body;
    console.log(rating)
    console.log(duartion)
    const response = await Movie.create({
      name: name,
      description: description,
      rating: rating,
      releaseDate: releaseDate,
      duartion: duartion,
    });
    console.log(response)
    if (!response) {
      return res.status(411).json({ message: "Entry should done admin only" });
    }
    if (response) {
      return res
        .status(200)
        .json({ message: "You have succesfully entry the details " });
    }
  } catch (error) {
    return res.status(500).json({
      error: `Something went wrong${error}`,
    });
  }
});


//edit the movie details
app.patch('/movies/:id',authMiddleware,async(req,res)=>{
    try {
    const response = await Movie.findByIdAndUpdate(
        req.params.id,
        {$set:req.body}
    )
    console.log(response)
    if(!response){
        return res.status(411).json({
            message:`Update can done by admin only`
        })
    }
    if(response){
        return res.status(200).json({
            message:"Sucessfully updated"
        })
    }
     } catch (error) {
        return res.status(500).json({
            message:`Something went wrong ${error}`
        })
    }
})

// delete the movie
app.delete("/movies/:id",authMiddleware,async(req,res)=>{
    try {
    
    const response = await Movie.deleteOne({_id:req.params.id});
    console.log(response)
    if(response){
        return res.status(200).json({
            message:"You have sucessfully deleted the message"
        })

    }
    if(!response){
        return res.status(411).json({
            message:`Delete only can done by admin`
        })
    }
     } catch (error) {
        return res.status(500).json({
            error:`Something went wrong ${error}`
        })
    }
})

// Retrive the movie
app.get('/movies',async(req,res)=>{
    try {
    const response = await Movie.find()
    if(response){
        return res.status(200).json({
            message:"Sucessfully done",
            response:response
        })
    }
    if(!response){
        return res.status(411).json({
            message:`Error ocured`
        })
    }
    } catch (error) {
       return res.status(500).json({
        error:`Something went wrong ${error}`
       }) 
    }
    
})

//LISTENING
app.listen(process.env.PORT, () => {
  console.log(`Listening ..`);
});
