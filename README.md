# AssetopiaInc Website

Public website for Assetopia Inc.

## Local Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` by default.

## Deploy With Vercel

1. Go to Vercel and import `MJA-ASSETOPIA/assetopia-website`.
2. Use the default Next.js build settings.
3. Deploy the project.
4. In Vercel, open Project Settings > Domains.
5. Add `assetopiainc.com` and `www.assetopiainc.com`.
6. Set the preferred primary domain.

## Connect GoDaddy DNS

In GoDaddy DNS management for `assetopiainc.com`, point the domain to Vercel using the exact records Vercel displays.

Common Vercel records are:

```text
Type: A
Name: @
Value: 76.76.21.21
```

```text
Type: CNAME
Name: www
Value: cname.vercel-dns-0.com
```

Do not remove email records such as MX, SPF, DKIM, or DMARC if the domain uses email.
