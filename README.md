# AssetopiaInc Website

Public website for Assetopia Inc.

## Local Development

```bash
npm install
npm run dev -- -p 3001
```

The website preview runs at `http://localhost:3001`, leaving port 3000 for the Assetopia app.

## Website Design

- All page edges use `.container`: a 1180px content area with responsive outer gutters. Do not add horizontal padding inside a container.
- `SiteHeader` owns navigation, active-page styling, and the mobile menu. `SiteFooter`, `PageIntro`, and `ContactBand` provide shared page elements.
- Home uses full-height sections and a fixed market ticker. Small screens and reduced-motion preferences use gentler scrolling.
- Privacy and Terms use `LegalPage`, with contents links and a continuous reading column.

## Market Quotes

The homepage embeds the official TradingView ticker tape, replacing the previous sample prices. It needs internet access but no API key. Quotes can be delayed; the provider shows market status and delay indicators. Pause removes the widget, and reduced-motion preferences prevent automatic loading. The footer attribution must remain visible.

Provider documentation: https://www.tradingview.com/widget-docs/widgets/tickers/legacy-ticker-tape/

## Content Still Requiring Owner Input

- Approved app screenshots with no private client or portfolio data.
- Verified team biographies, credentials, and any publishable project examples.
- Confirmed platform availability and released capabilities. Current copy labels the platform as in development.
- Review of the legal documents against actual company practices. The public draft-review notice has been removed; the privacy policy describes the TradingView integration.

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
