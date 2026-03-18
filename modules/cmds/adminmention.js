module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "MOHAMMAD AKASH",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["61557500431580", "61562826721109", "61564643127325"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      " আমার বস কে ডাকবেন না 👿 
সে এখন প্রেম এর 𝗖𝗮𝗹𝗹𝘀𝘀 এ বেস্ত আছে...!!!🐸🫶🏻🤧",
      "তুই বসকে মেনসন দিছিস 👿👀 তোর এত বড় সাহস  এখন তুই আর বাঁচবি না...!! 👿🔪",
      " এতো বসকে“ 🫡 মেনসন করে লাভ নাই  একটু বোজ 🤧 বস তোর ভাগ্যে নাইরে...!! 🐸💔",
      "বস দেখেন একটা ছাগুল আপনকে ডাকতেছে...!! 🐸🫶🏻",
      "তোর কাজ কাম নাই 🤔 শুধু আমার বসকে  সারাদিন মেনসন লাগাস 🐸"
      "বস কে খুঁজে না পেলে তার ইনবক্সে এ চলে যাও 🤧💔",
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
