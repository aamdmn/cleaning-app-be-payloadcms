## How to Use

vytvor `.env` subor
```
cp .env.example .env
```

`.env`:
```
MONGODB_URI=mongodb://127.0.0.1/cleaning-app-be
PAYLOAD_SECRET= #random string
PAYLOAD_PUBLIC_BASE_DNS=http://localhost:3000
```

`pnpm i` nainstaluje vsetky dependencies. <br>
`pnpm dev` zapne appku a po kazdom ulozeny restartuje server. <br>



