This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Emulate iPad experience

To experience the app as it looks on my iPad alongside SkyDemon, the following settings seem appropriate
in Firefox Web Developer Tools:

Responsive, 370x810, DPR 2, No Throttling, UA: Mozilla/5(iPad)

## Build & Deploy

Create an optimized build for deployment

```bash
yarn build
```

After build, in the /out folder:

```
aws s3 sync . s3://checklist.witspirit.be --delete --profile witspirit
```

Probably my setup is not yet great, because after sync with S3, the Cloudfront distribution has to be
invalidated to prevent it from serving the old content. Just did a full /* invalidation via the AWS console.
I guess a more limited approach would be feasible. Perhaps even just the manifest... Will require more
research.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Attribution

- Icon / Favicon : <a href="https://www.freepik.com/search?format=search&last_filter=type&last_value=icon&query=checklist&type=icon">Icon by apien</a>
 