// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: "design",
      type: "Beautiful Designs",
      details:
        "Besides quality also work on elegant designs suited for your websites following core design theory.",
      tools: ["Photoshop", "Illustrator", "Figma"],
    },
    {
      id: "code",
      type: "Code",
      details:
        "Use simple, re-useable and SEO friendly code to build fast and user friendly website.",
      tools: ["Visual Studio Code", "GitHub"],
    },
    {
      id: "consulting",
      type: "Consulting",
      details:
        "Work with clients to promote the success of their business by providing practical suggestions.",
      tools: ["Zoom", "Calendly", "QuickBooks", "MailChimp"],
    },
  ]);
}
