import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SERVICE_REQUEST_API,
} = endpoints;

export function serviceRequest(formData, navigate) {
  return async (dispatch) => {
    console.log("Entered Service request")
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SERVICE_REQUEST_API, {
        formData,
      })

      console.log("SERVICE REQUEST API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      console.log("Success")

      toast.success("Service Request Sent Successfully")
      navigate("/dashboard/my-profile")
    } 
    
    catch (error) {
      toast.error("Could Not Send Service Request")
      console.log("SERVICE REQUEST API ERROR............", error)
    }
    // dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}
