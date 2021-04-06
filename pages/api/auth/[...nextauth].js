import NextAuth from "next-auth"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    {
      id: 'vatsim-connect',
      name: 'Vatsim Connect',
      type: 'oauth',
      version: '2.0',
      accessTokenUrl: "https://auth.vatsim.net/oauth/token",
      authorizationUrl: "https://auth.vatsim.net/oauth/authorize?response_type=code",
      clientId: process.env.VATSIM_ID,
      clientSecret: process.env.VATSIM_SECRET,
      scope: "full_name,email,vatsim_details,country",
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.VATSIM_ID,
        // client_secret: process.env.VATSIM_SECRET,
      },
    },
    {
      id: 'vatsim-connect-dev',
      name: 'Vatsim Connect Dev',
      type: 'oauth',
      version: '2.0',
      accessTokenUrl: "https://auth-dev.vatsim.net/oauth/token",
      authorizationUrl: "https://auth-dev.vatsim.net/oauth/authorize?response_type=code",
      clientId: process.env.VATSIM_ID,
      clientSecret: process.env.VATSIM_SECRET,
      scope: "full_name,email,vatsim_details,country",
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.VATSIM_ID,
        // redirect_uri: 'http://localhost:3000/api/auth/callback/vatsim-connect',
        // client_secret: process.env.VATSIM_SECRET,
      },
    },
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,
  debug: true
})
