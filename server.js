const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const questions = [
  // ── Work & Daily Life ──────────────────────────────────────────────────────
  {
    id: 1, category: "Work & Daily Life",
    question: "First thing you do when you log in",
    answers: [
      { text: "Check emails", points: 40 },
      { text: "Open Teams/Slack", points: 25 },
      { text: "Coffee/tea", points: 20 },
      { text: "Check calendar", points: 10 },
      { text: "Browse news/social", points: 5 }
    ]
  },
  {
    id: 2, category: "Work & Daily Life",
    question: "Reason someone is late to a meeting",
    answers: [
      { text: "Previous meeting overran", points: 35 },
      { text: "Forgot the meeting", points: 25 },
      { text: "Internet issues", points: 20 },
      { text: "Calendar confusion", points: 10 },
      { text: "Personal break", points: 10 }
    ]
  },
  {
    id: 3, category: "Work & Daily Life",
    question: "Excuse for not turning camera on",
    answers: [
      { text: "Bad internet", points: 30 },
      { text: "Not presentable", points: 25 },
      { text: "Camera not working", points: 20 },
      { text: "Multitasking", points: 15 },
      { text: "Privacy concerns", points: 10 }
    ]
  },
  {
    id: 4, category: "Work & Daily Life",
    question: "Something cluttering your desk",
    answers: [
      { text: "Papers/notebooks", points: 30 },
      { text: "Coffee mugs", points: 25 },
      { text: "Cables/chargers", points: 20 },
      { text: "Snacks", points: 15 },
      { text: "Sticky notes", points: 10 }
    ]
  },
  {
    id: 5, category: "Work & Daily Life",
    question: "Common work complaint",
    answers: [
      { text: "Too many meetings", points: 35 },
      { text: "Workload", points: 25 },
      { text: "Deadlines", points: 20 },
      { text: "Emails overload", points: 10 },
      { text: "Lack of communication", points: 10 }
    ]
  },
  // ── Meetings & Communication ───────────────────────────────────────────────
  {
    id: 6, category: "Meetings & Communication",
    question: "Phrase overused in meetings",
    answers: [
      { text: "Let's circle back", points: 30 },
      { text: "Can you hear me?", points: 25 },
      { text: "You're on mute", points: 20 },
      { text: "Let's take it offline", points: 15 },
      { text: "Quick sync", points: 10 }
    ]
  },
  {
    id: 7, category: "Meetings & Communication",
    question: "What makes meetings boring",
    answers: [
      { text: "Too long", points: 40 },
      { text: "No clear agenda", points: 25 },
      { text: "One person talking", points: 15 },
      { text: "Repetition", points: 10 },
      { text: "No participation", points: 10 }
    ]
  },
  {
    id: 8, category: "Meetings & Communication",
    question: "What people do during long meetings",
    answers: [
      { text: "Check phone", points: 30 },
      { text: "Browse internet", points: 25 },
      { text: "Respond to emails", points: 20 },
      { text: "Eat snacks", points: 15 },
      { text: "Zone out", points: 10 }
    ]
  },
  {
    id: 9, category: "Meetings & Communication",
    question: "Why a meeting should've been an email",
    answers: [
      { text: "Too short/simple", points: 35 },
      { text: "No discussion needed", points: 25 },
      { text: "Only one speaker", points: 15 },
      { text: "Repetition of info", points: 15 },
      { text: "Wasting time", points: 10 }
    ]
  },
  {
    id: 10, category: "Meetings & Communication",
    question: "What people say when they didn't hear",
    answers: [
      { text: "Sorry, can you repeat?", points: 40 },
      { text: "You're breaking up", points: 25 },
      { text: "Audio issue", points: 15 },
      { text: "Missed that", points: 10 },
      { text: "Could you clarify?", points: 10 }
    ]
  },
  // ── Remote Work ────────────────────────────────────────────────────────────
  {
    id: 11, category: "Remote Work",
    question: "Distractions at home",
    answers: [
      { text: "Family/kids", points: 30 },
      { text: "Phone notifications", points: 25 },
      { text: "TV", points: 20 },
      { text: "Social media", points: 15 },
      { text: "Pets", points: 10 }
    ]
  },
  {
    id: 12, category: "Remote Work",
    question: "What you wear only for calls",
    answers: [
      { text: "Formal shirt/top", points: 45 },
      { text: "Pajama bottoms", points: 25 },
      { text: "Blazer", points: 15 },
      { text: "Stylish accessories", points: 10 },
      { text: "Slippers", points: 5 }
    ]
  },
  {
    id: 13, category: "Remote Work",
    question: "Place people work from at home",
    answers: [
      { text: "Couch", points: 35 },
      { text: "Bed", points: 25 },
      { text: "Dining table", points: 20 },
      { text: "Balcony", points: 10 },
      { text: "Coffee shop", points: 10 }
    ]
  },
  {
    id: 14, category: "Remote Work",
    question: "Interruptions at home during work",
    answers: [
      { text: "Doorbell", points: 30 },
      { text: "Power cut", points: 25 },
      { text: "Family talking", points: 20 },
      { text: "Pets", points: 15 },
      { text: "Delivery calls", points: 10 }
    ]
  },
  {
    id: 15, category: "Remote Work",
    question: "'Technical issues' excuse",
    answers: [
      { text: "Internet lag", points: 40 },
      { text: "Mic not working", points: 20 },
      { text: "App crashed", points: 20 },
      { text: "System restart", points: 10 },
      { text: "Power issue", points: 10 }
    ]
  },
  // ── Office Food & Fun ──────────────────────────────────────────────────────
  {
    id: 16, category: "Office Food & Fun",
    question: "Popular office snack",
    answers: [
      { text: "Biscuits/cookies", points: 30 },
      { text: "Chips", points: 25 },
      { text: "Fruits", points: 15 },
      { text: "Chocolate", points: 15 },
      { text: "Nuts", points: 15 }
    ]
  },
  {
    id: 17, category: "Office Food & Fun",
    question: "Item found in the office kitchen",
    answers: [
      { text: "Coffee machine", points: 35 },
      { text: "Refrigerator", points: 20 },
      { text: "Microwave", points: 20 },
      { text: "Water dispenser", points: 15 },
      { text: "Snacks shelf", points: 10 }
    ]
  },
  {
    id: 18, category: "Office Food & Fun",
    question: "Office party activity",
    answers: [
      { text: "Eating", points: 30 },
      { text: "Games", points: 25 },
      { text: "Music/dance", points: 20 },
      { text: "Team bonding", points: 15 },
      { text: "Photos", points: 10 }
    ]
  },
  {
    id: 19, category: "Office Food & Fun",
    question: "Celebration cake type",
    answers: [
      { text: "Chocolate", points: 40 },
      { text: "Black forest", points: 20 },
      { text: "Butterscotch", points: 15 },
      { text: "Red velvet", points: 15 },
      { text: "Pineapple", points: 10 }
    ]
  },
  {
    id: 20, category: "Office Food & Fun",
    question: "What people look forward to on Friday",
    answers: [
      { text: "Weekend", points: 45 },
      { text: "Early logout", points: 25 },
      { text: "Team lunch", points: 15 },
      { text: "Casual vibe", points: 10 },
      { text: "Fun activities", points: 5 }
    ]
  },
  // ── Colleagues & Behavior ──────────────────────────────────────────────────
  {
    id: 21, category: "Colleagues & Behavior",
    question: "Type of coworker",
    answers: [
      { text: "Overachiever", points: 30 },
      { text: "Late responder", points: 25 },
      { text: "Funny/joker", points: 20 },
      { text: "Quiet one", points: 15 },
      { text: "Always busy", points: 10 }
    ]
  },
  {
    id: 22, category: "Colleagues & Behavior",
    question: "What annoys coworkers",
    answers: [
      { text: "Late replies", points: 30 },
      { text: "Interruptions", points: 25 },
      { text: "Loud talking", points: 20 },
      { text: "Not muting", points: 15 },
      { text: "Missing deadlines", points: 10 }
    ]
  },
  {
    id: 23, category: "Colleagues & Behavior",
    question: "People forget to mute their...",
    answers: [
      { text: "Microphone", points: 55 },
      { text: "Background noise", points: 25 },
      { text: "Notifications", points: 10 },
      { text: "Music", points: 5 },
      { text: "TV", points: 5 }
    ]
  },
  {
    id: 24, category: "Colleagues & Behavior",
    question: "New employee struggles with",
    answers: [
      { text: "Understanding tools", points: 30 },
      { text: "Company processes", points: 25 },
      { text: "Meeting people", points: 20 },
      { text: "Work expectations", points: 15 },
      { text: "Communication", points: 10 }
    ]
  },
  {
    id: 25, category: "Colleagues & Behavior",
    question: "What coworkers bond over",
    answers: [
      { text: "Food", points: 30 },
      { text: "Work struggles", points: 25 },
      { text: "TV shows/movies", points: 20 },
      { text: "Memes", points: 15 },
      { text: "Weekend plans", points: 10 }
    ]
  },
  // ── Tech & Tools ───────────────────────────────────────────────────────────
  {
    id: 26, category: "Tech & Tools",
    question: "Daily work tool",
    answers: [
      { text: "Email", points: 30 },
      { text: "Teams/Slack", points: 30 },
      { text: "Excel", points: 20 },
      { text: "Browser", points: 10 },
      { text: "Project tools", points: 10 }
    ]
  },
  {
    id: 27, category: "Tech & Tools",
    question: "Something that stops working before deadlines",
    answers: [
      { text: "Internet", points: 35 },
      { text: "Laptop", points: 25 },
      { text: "Software/tools", points: 20 },
      { text: "Server", points: 10 },
      { text: "Power", points: 10 }
    ]
  },
  {
    id: 28, category: "Tech & Tools",
    question: "Why the internet fails",
    answers: [
      { text: "Network issues", points: 40 },
      { text: "Weather", points: 20 },
      { text: "Router problem", points: 20 },
      { text: "Power outage", points: 10 },
      { text: "Too many users", points: 10 }
    ]
  },
  {
    id: 29, category: "Tech & Tools",
    question: "Something you forgot the password for",
    answers: [
      { text: "Email", points: 30 },
      { text: "VPN", points: 25 },
      { text: "Internal tools", points: 20 },
      { text: "Laptop login", points: 15 },
      { text: "HR portal", points: 10 }
    ]
  },
  {
    id: 30, category: "Tech & Tools",
    question: "Most distracting notification",
    answers: [
      { text: "Chat messages", points: 35 },
      { text: "Emails", points: 30 },
      { text: "Phone alerts", points: 20 },
      { text: "Calendar reminders", points: 10 },
      { text: "Social media", points: 5 }
    ]
  },
  // ── Bonus Fun ──────────────────────────────────────────────────────────────
  {
    id: 31, category: "Bonus Fun",
    question: "What you said while on mute",
    answers: [
      { text: "Full explanation", points: 40 },
      { text: "Answer to question", points: 25 },
      { text: "Joke", points: 15 },
      { text: "Greeting", points: 10 },
      { text: "Opinion", points: 10 }
    ]
  },
  {
    id: 32, category: "Bonus Fun",
    question: "Funny virtual background",
    answers: [
      { text: "Beach", points: 30 },
      { text: "Space", points: 25 },
      { text: "Office meme", points: 20 },
      { text: "Cartoon", points: 15 },
      { text: "City skyline", points: 10 }
    ]
  },
  {
    id: 33, category: "Bonus Fun",
    question: "Thing spilled during work",
    answers: [
      { text: "Coffee", points: 40 },
      { text: "Water", points: 30 },
      { text: "Tea", points: 15 },
      { text: "Juice", points: 10 },
      { text: "Snacks", points: 5 }
    ]
  },
  {
    id: 34, category: "Bonus Fun",
    question: "Weird place to join a meeting from",
    answers: [
      { text: "Car", points: 35 },
      { text: "Bathroom (audio only)", points: 20 },
      { text: "Kitchen", points: 20 },
      { text: "Outdoors", points: 15 },
      { text: "Bed", points: 10 }
    ]
  },
  {
    id: 35, category: "Bonus Fun",
    question: "What you wish you could say to your boss",
    answers: [
      { text: "Too many meetings", points: 30 },
      { text: "Need more time", points: 25 },
      { text: "Great job!", points: 15 },
      { text: "Let's simplify work", points: 15 },
      { text: "I need a raise", points: 15 }
    ]
  }
];

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.get('/api/questions/:id', (req, res) => {
  const q = questions.find(q => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: 'Not found' });
  res.json(q);
});

app.listen(PORT, () => {
  console.log(`\n🎮  Virtual Feud is running!`);
  console.log(`👉  Open http://localhost:${PORT} in your browser\n`);
});
