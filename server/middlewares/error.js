// // import { ErrorHandler } from './errorHandler'; // Import the ErrorHandler class if it's defined in a separate file

// export const errorMiddleware = (err, req, res, next) => {
//   err.message = err.message || "Internal Server Error";
//   err.statusCode = err.statusCode || 500;

//   let message;

//   if (err.code === 11000) {
//     message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
//   } else if (err.name === "JsonWebTokenError") {
//     message = "Json Web Token is invalid, Try again!";
//   } else if (err.name === "TokenExpiredError") {
//     message = "Json Web Token is expired, Try again!";
//   } else if (err.name === "CastError") {
//     message = `Invalid ${err.path}`;
//   } else {
//     message = err.message; // Default error message
//   }

//   const errorMessage = err.errors
//     ? Object.values(err.errors)
//         .map((error) => error.message)
//         .join(" ")
//     : message;

//   return res.status(err.statusCode).json({
//     success: false,
//     message: errorMessage,
//   });
// };


