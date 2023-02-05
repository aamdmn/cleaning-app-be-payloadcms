import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Customers from './collections/Customers';
import Orders from './collections/Orders';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  cors: ('*'),
  admin: {
    user: Users.slug,
  },
  collections: [
    Orders,
    Customers,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
