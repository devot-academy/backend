import { buildServer, middlewareEnableJSONInRequest } from './lib/framework-server'
import 'dotenv/config'

import * as router from './router'

/*
    Estudar 
    
    console.log({ name: 'Raissa', idade: 25 })
    console.log([ 'Raissa', 25 ])
    console.log(Object.values({ name: 'Raissa', idade: 25 }))
    console.log(Object.keys({ name: 'Raissa', idade: 25 }))
    console.log(Object.entries({ name: 'Raissa', idade: 25 }))
    router === { genderRouter, personRouter } => [genderRouter, pesonRouter]
*/

var app = buildServer();

app.use(middlewareEnableJSONInRequest());

app.use(Object.values(router))

export default app;