import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV}` });
import cors from 'cors';
import express from 'express';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4'
import { ApolloServer } from '@apollo/server';
import { connectDb } from './db/db.js';
import { readFile } from 'node:fs/promises';
import { resolvers } from './resolvers.js'
import { errorHandler } from './middleware/error-handler.js';
import { authRoute } from './routes/auth.js';
import { userRoute } from './routes/user.js';
import { auth } from './middleware/auth.js';
import { AuthError } from './errors/auth-error.js';
import { Jwt } from './utils/jwt.js';


// graphql schema
const fileUrl = new URL("./schema.graphql", import.meta.url);
const typeDefs = await readFile(fileUrl, "utf8");


// app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cors());

app.use("/api/auth", authRoute);
app.use('/api/user', userRoute);


const getContext = ({ req, res }) => {
    try {
        const header = req.get('Authorization');
        if (!header) throw new AuthError("Unauthorized access!");
        const token = header.split(' ')[1];
        if (!token) throw new AuthError("Unauthorized access!");
        const verify = Jwt.verifyToken(token);
        if (!verify) throw new AuthError("Invalid token!");

        return {
            token
        }
    } catch (error) {
        //next(error)
        throw error;
    }
}
// apollo server
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();


app.use('/api/graphql', apolloMiddleware(server, { context: getContext }));

app.use(errorHandler);
// listen
app.listen(PORT, async () => {
    await connectDb();
    console.log('server is running on port ' + PORT);
})





// import { config } from 'dotenv';
// config({ path: `.env.${process.env.NODE_ENV}` });
// import cors from 'cors';
// import express from 'express';
// import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4'
// import { ApolloServer } from '@apollo/server';
// import { connectDb } from './db/db.js';
// import { readFile } from 'node:fs/promises';
// import { resolvers } from './resolvers.js'
// import { errorHandler } from './middleware/error-handler.js';
// import { authRoute } from './routes/auth.js';

// console.log(process.env.MONGODB_URL)
// // graphql schema
// const fileUrl = new URL("./schema.graphql", import.meta.url);
// const typeDefs = await readFile(fileUrl, "utf8");

// // app
// const app = express();
// const PORT = 9000; //process.env.PORT;

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"))

// app.use(cors());

// app.use("/api", (req, res, next) => {
//     res.send({

//     })
// })
// app.use("/api/auth", authRoute);

// // apollo server
// // const server = new ApolloServer({ typeDefs, resolvers });
// // await server.start();

// // app.use('/graphql', apolloMiddleware(server));

// // auth


// // error handler
// // app.use(errorHandler);

// // listen
// app.listen(PORT, async () => {
//     await connectDb();
//     console.log(`Server is running on ${PORT}`);
// });

