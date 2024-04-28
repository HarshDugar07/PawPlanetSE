import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErros.js";


// Function to create a new message
export const createMessage = catchAsyncErrors(async (req, res) => {
  console.log("Entered Create Message")
  // Deconstruct required fields from the request body
  const {service,email, message, appointmentDate, petName, petType, petBreed, petSex, petAge, 
  petMedicalHistory } = req.body;
  console.log("Data : ", service, email, message, appointmentDate, petName, petType, petBreed, petSex, petAge, 
  petMedicalHistory);

  try{
    // Check if all required fields are provided
    if (!service || !email || !message ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    console.log("Checked Required Fields");

    // Create a new message in the database
    const newMessage = await Message.create({
      service,
      email,
      message,
      appointmentDate, 
      petName, 
      petType,
      petBreed, 
      petSex, 
      petAge, 
      petMedicalHistory,
      role:"customer"
    });

    // Successfully created the message
    res.status(200).send({
      success: true,
      message: 'Message created successfully',
      data: newMessage
    });
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
});
