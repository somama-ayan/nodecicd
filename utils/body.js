

export const constructBody = (request) => {
    return new Promise((resolve , reject) => {
        let body = []
        
        request.on('data' , (chunk) => {
            body.push(chunk);
        })
        request.on('end', () => {
            const result = Buffer.concat(body).toString();
            resolve(JSON.parse(result));
        })
        request.on('error' , (err) => {
            reject(err)
        })

    });// end of promise
}