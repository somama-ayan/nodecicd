import { json } from "stream/consumers";
import { constructBody } from "../utils/body.js";
import { createUser } from "../services/userService.js";
export const userRoute =async (request, response) => {
  // --------- get route -------------
  if (request.url === '/api/data' && request.method === 'GET') {
    response.writeHead(
      200,
      {
        'Content-type': 'application/json',
        'host': 'localhost:5000'
      }
    );
    return response.end(JSON.stringify({
      'message': 'Response from get route and url data '
    }))
  }// end of get route

  // --------- post route
  else if (request.url === '/api/signup' && request.method === 'POST') {
    const body = await constructBody(request)
    console.log("TYPE OF BODY:", typeof body);
    if(!body.email || !body.password)
      {
 
      response.writeHead(400, {'Content-type': 'application/json'})
      return response.end(JSON.stringify({
        'message': 'Fields are missing'
      }))
    }
    response.writeHead(
      200, 
      {
        'Content-type': 'application/json',
        'host': 'localhost:5000'
      }
    );
    const user = await createUser(body)

    return response.end(JSON.stringify({
      message: 'User added to DB',
      data: body
    }));
  }// end of post route
 
  response.writeHead(
    404,
    {
      'Content-type': 'application/json'
    }
  );
  response.end(JSON.stringify({
    message: 'Route not Found'
  }))
} // end of userRoute