interface Screenshot {
  src: string;
  caption: string;
}

interface Project {
  src: string;
  title: string;
  description: string;
  slug: string;
  githublink: string;
  status: string;
  type: string;
  website?: string;
  overview: string;
  tasks: string[];
  reasons: string[];
  techstack: string[];
  screenshots?: Screenshot[];
}

export const projects: Project[] = [
  {
    src: "/diffsense-landing.png",
    title: "DiffSense",
    description:
      "A self-hostable GitHub App that autonomously reviews pull requests using an agentic Claude AI loop with RAG-based learning and adaptive feedback.",
    slug: "diffsense",
    githublink: "https://github.com/ShahuKor/DiffSense",
    status: "Completed",
    website: "https://diffsense-landing.vercel.app/",
    type: "Developer Tool",
    overview: `
  DiffSense is a self-hostable GitHub App / AI Agent that automatically reviews pull requests using an agentic Claude AI loop. When a PR is opened, the bot 
  queues a review job, then runs a multi-step reasoning cycle — listing changed files, reading diffs, searching for historically similar review patterns, 
  and posting inline comments directly on the PR diff. It uses OpenAI embeddings and pgvector to perform semantic similarity search over past review 
  comments, and learns from developer responses: when a review thread is resolved or dismissed on GitHub, the bot updates the feedback weight of that 
  comment in the database, making similar suggestions more or less prominent on future PRs.
`,
    tasks: [
      "Automatically trigger a PR review when a pull request is opened or updated on GitHub",
      "Run a multi-iteration Claude agentic loop dispatching 5 tools per review cycle",
      "Post inline review comments directly on specific lines of the PR diff",
      "Search past review comments using semantic vector similarity to surface relevant patterns",
      "Adapt future reviews by adjusting comment weights when GitHub threads are resolved or dismissed",
      "Queue and process multiple PR review jobs asynchronously without blocking webhook responses",
      "Authenticate as a GitHub App with scoped installation tokens per repository",
    ],
    reasons: [
      "To explore agentic AI patterns with multi-step tool dispatch and iterative LLM reasoning",
      "To implement RAG with pgvector similarity search for context-aware, repo-specific AI responses",
      "To build a self-improving feedback loop that adapts to each team's review preferences over time",
      "To practice GitHub App development, HMAC webhook security, and event-driven backend architecture",
      "To learn BullMQ job queues and async processing patterns for reliable background task execution",
    ],
    techstack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Claude AI",
      "Anthropic SDK",
      "OpenAI Embeddings",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "GitHub App",
      "Octokit",
      "Docker",
    ],
  },
  {
    src: "/foodflux-image-new.jpg",
    title: "FoodFlux",
    description:
      "A completely distributed microservices system demonstrating food delivery services and inter-service communication.",
    slug: "foodflux",
    githublink:
      "https://github.com/ShahuKor/FoodFlux-Distributed-Food-Ordering",
    status: "Completed",
    type: "Full Stack",
    overview:
      "FoodFlux is a distributed food ordering platform built with microservices. It lets users browse restaurants, place orders, and track delivery status in real time. The system demonstrates event-driven architecture with Kafka, fault tolerance patterns, and WebSocket notifications across independent backend services.",
    tasks: [
      "Browse restaurants and view menus as a customer",
      "Add items to cart and place food orders",
      "Receive real-time order tracking updates",
      "Manage restaurant orders and status views for kitchen staff",
      "Driver dashboard for accepting and updating delivery status",
      "Handle authentication and role-based access control",
      "Simulate fault tolerance using circuit breaker patterns",
    ],
    reasons: [
      "To learn and demonstrate distributed systems and microservices architecture",
      "To practice event-driven communication using Kafka and asynchronous patterns",
      "To explore real-time notifications and WebSockets in full-stack apps",
      "To implement fault tolerance and service resilience in a real-world use case",
    ],
    techstack: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React",
      "Kafka",
      "KafkaJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Socket.io",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
      "TypeScript",
    ],
    screenshots: [
      { src: "/foodflux-login.png", caption: "Login & Auth screen" },
      {
        src: "/foodflux-userdashboard.png",
        caption: "Customer dashboard browse restaurants",
      },
      {
        src: "/foodflux-userplacesorder.png",
        caption: "Customer placing an order",
      },
      {
        src: "/foodflux-kitchen%20dashboard.png",
        caption: "Kitchen staff order management view",
      },
      {
        src: "/foodflux-driverdashboard.png",
        caption: "Driver dashboard for delivery tracking",
      },
    ],
  },
  {
    src: "/quib-neww.png",
    title: "Quib",
    description:
      "A production-ready SaaS platform that converts PDFs into interactive, reels-style summaries for a modern and engaging learning experience.",
    slug: "quib",
    githublink: "https://github.com/ShahuKor/Quib",
    status: "Completed",
    type: "Full Stack",
    overview:
      "Quib is a full-stack SaaS application that allows users to upload PDFs and instantly receive beautifully structured, easy-to-understand summaries. Instead of traditional text outputs, the summaries are displayed in an interactive reels-style format, making learning more engaging and user-friendly. The platform includes authentication, subscription billing, secure file handling, and scalable backend architecture designed for real-world production use.",
    tasks: [
      "Secure PDF upload and storage",
      "Extract and process content from uploaded PDFs",
      "Generate AI-powered summaries using ChatGPT and Gemini",
      "Structure summaries into clean, readable sections",
      "Display summaries in an interactive reels-style component",
      "User authentication and account management with Clerk",
      "Subscription plans and payment handling via Stripe",
      "Database management using PostgreSQL (Neon DB)",
      "Responsive and modern UI built with Tailwind and shadcn/ui",
    ],
    reasons: [
      "To make learning from long PDFs faster and more engaging",
      "To improve knowledge retention using structured and visual summaries",
      "To build a real-world, production-grade SaaS product",
      "To combine AI capabilities with modern full-stack development",
      "To gain hands-on experience with authentication, payments, and scalable architecture",
    ],
    techstack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "UploadThing",
      "Neon DB",
      "PostgreSQL",
      "Clerk",
      "Stripe",
      "OpenAI (ChatGPT)",
      "Google Gemini",
    ],
    screenshots: [
      { src: "/quib-landingpage.png", caption: "Landing page" },
      { src: "/quib-dashboard.png", caption: "User dashboard" },
      { src: "/quib-uploadpdfpage.png", caption: "Upload PDF Page" },
      {
        src: "/quib-pdfsummaryreel.png",
        caption: "Interactive reels-style summary view",
      },
      {
        src: "/quib-stripe.png",
        caption: "Implemented complete Stripe checkout experience",
      },
    ],
  },
  {
    src: "/cutthatpart-new.png",
    title: "CutThatPart",
    description:
      "Share parts of a YouTube videos instantly without downloading it or screen recording, with a personal share link.",
    slug: "cutthatpart",
    githublink: "https://github.com/ShahuKor/CutThatPart",
    status: "Completed",
    type: "Full Stack",
    overview:
      "CutThatPart is a web app that lets users share only a specific portion of a YouTube video instead of sending the entire video or screen recording it. Users paste a YouTube URL, select the start and end timestamps, and the app processes and generates a shareable video link with a clean viewing interface. It simplifies video clipping and sharing while handling video processing efficiently on the backend. This project is fully tested in local environment but cannot be deployed, since Youtube detects the worker trying to grab the video and download it. This will work perfectly fine if deployed on a VPS, which is too costly for me to buy right now.",
    tasks: [
      "Accept YouTube video URL input from users",
      "Allow users to specify start and end timestamps",
      "Process video clips using yt-dlp and FFmpeg",
      "Generate trimmed video files dynamically",
      "Upload processed clips to AWS S3",
      "Create a unique shareable link for each clip",
      "Display a clean video player page with sharer details",
      "Handle background video processing using AWS SQS",
      "Deploy scalable backend services using AWS ECS and Docker",
      "Store metadata (clip info, sharer name, timestamps) in PostgreSQL (Neon DB)",
    ],
    reasons: [
      "To solve the hassle of screen recording or downloading full YouTube videos just to share a small part",
      "To build a strong real-world full stack project",
      "To work with video processing tools like yt-dlp and FFmpeg",
      "To gain hands-on experience with AWS cloud services",
      "To design a scalable backend architecture using queues and containers",
    ],
    techstack: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Neon DB",
      "AWS S3",
      "AWS SQS",
      "AWS ECS",
      "AWS ECR",
      "Docker",
      "yt-dlp",
      "FFmpeg",
    ],
    screenshots: [
      { src: "/cutthatpart-landingpage.png", caption: "Landing page" },
      { src: "/cutthatpart-features.png", caption: "Features overview" },
      { src: "/cutthatpart-dashboard.png", caption: "User dashboard" },
      {
        src: "/cutthatpart-createclip.png",
        caption: "Creating a clip just select timestamps and paste video link",
      },
      {
        src: "/cutthatpart-sharepage.png",
        caption:
          "Public share page (dark mode) , this is what others will see when user shares the video link",
      },
      {
        src: "/cutthatpart-sharepage-lightmode.png",
        caption: "Public share page (light mode)",
      },
    ],
  },
  {
    src: "/prysm-homepage.png",
    title: "Prysm",
    description:
      "Interact with PDFS get insights, get cited, source-backed answers with a built-in PDF viewer and persistent chat history.",
    slug: "prysm",
    githublink: "https://github.com/ShahuKor/PdfRaG",
    status: "Completed",
    type: "Full Stack",
    overview: `Prysm is a Retrieval-Augmented Generation (RAG) web app that lets users upload PDFs and have intelligent conversations with them. 
  Unlike generic AI chatbots, the AI surfaces exact citations from the PDF so
   users can verify sources directly in the built-in PDF viewer. PDFs are uploaded, parsed, and embedded into a vector database in under 4
   seconds. Each document gets its own chat session with persistent message history, so conversations are never lost. The app combines a 
  clean dashboard for managing documents with a side-by-side chat and viewer interface, making it a complete document-reading companion.`,
    tasks: [
      "Allow users to upload PDFs through a dedicated dashboard",
      "Parse and chunk PDF text using pdf-parse and LangChain text splitters",
      "Generate and store vector embeddings in Qdrant for semantic search",
      "Process uploads asynchronously using BullMQ job queues",
      "Store PDF metadata and chat history in PostgreSQL via Drizzle ORM",
      "Upload and serve PDF files using AWS S3 with presigned URLs",
      "Build a side-by-side chat and PDF viewer interface per document",
      "Stream AI responses grounded strictly in the uploaded PDF content",
      "Return cited source passages alongside every AI-generated answer",
      "Authenticate users securely using Clerk",
    ],
    reasons: [
      "To build a practical RAG application with real retrieval and citation pipelines",
      "To learn how vector databases and semantic search work in production",
      "To go beyond generic chatbots by enforcing source-grounded answers",
      "To gain hands-on experience with LangChain and OpenAI APIs",
      "To design a full async backend architecture with job queues and cloud storage",
    ],
    techstack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "LangChain",
      "OpenAI",
      "Qdrant",
      "PostgreSQL",
      "Neon DB",
      "Drizzle ORM",
      "AWS S3",
      "BullMQ",
      "Clerk",
      "Docker",
    ],
    screenshots: [
      { src: "/prysm-homepage.png", caption: "Homepage" },
      { src: "/prysm-feature1.png", caption: "Features section" },
      { src: "/prysm-feature2.png", caption: "Features section" },
      { src: "/prysm-feature3.png", caption: "Features section" },
      {
        src: "/prysm-dashboard.png",
        caption: "Document dashboard, manage uploaded PDFs",
      },
      {
        src: "/prysm-pdfchatscreen.png",
        caption: "Side-by-side PDF viewer and chat interface",
      },
    ],
  },
  {
    src: "/cliply-neww.png",
    title: "Cliply",
    description:
      "An AI-powered media optimization & sharing platform with contextual image cropping, smart video compression, and a public showcase wall.",
    slug: "cliply",
    githublink: "https://github.com/ShahuKor/About-Cliply",
    website: "https://cliply-kohl.vercel.app/",
    status: "Completed",
    type: "Full Stack",
    overview:
      "Cliply is a full-stack web application that allows users to upload images and videos, automatically optimize them using AI, and share them publicly. It simplifies media processing by offering smart image cropping and efficient video compression, all through a clean and responsive interface.",
    tasks: [
      "Upload images and videos for processing",
      "Automatically crop images using AI-based contextual detection",
      "Compress videos while maintaining visual quality",
      "Preview processed media before downloading",
      "Browse publicly shared media on a showcase wall",
      "Create an account and securely access media tools",
      "Store and manage uploaded media content",
    ],
    reasons: [
      "To explore AI-powered media optimization in real-world applications",
      "To build a complete full-stack platform with authentication and media handling",
      "To understand cloud-based media processing workflows",
      "To create a practical project demonstrating modern web architecture",
    ],
    techstack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Clerk ",
      "Cloudinary AI",
      "NeonDB",
      "PostgreSQL",
      "Prisma ORM",
      "Vercel",
    ],
  },
  {
    src: "/webchat-ai-image-new.jpg",
    title: "WebChat AI",
    description:
      "A RAG chatbot that makes ChatGPT get context of any URL or website, built with Streamlit and LangChain.",
    slug: "webchat-ai",
    githublink: "https://github.com/ShahuKor/WebChat-Ai",
    status: "Completed",
    type: "Full Stack",
    overview:
      "WebChat AI is a browser content-aware chatbot that lets users paste a URL and chat with the content of that webpage. It extracts text from any site, processes it with LangChain embeddings, and provides contextual AI responses through a simple Streamlit UI.",
    tasks: [
      "Take a website link as input and scrape its textual content.",
      "Split the scraped text into chunks for embedding.",
      "Store text embeddings in a vector database for RAG retrieval.",
      "Accept user queries and perform semantic search over the page content.",
      "Generate context-aware answers using an LLM based on the retrieved website content.",
      "Display chat history and responses within a Streamlit interface.",
    ],
    reasons: [
      "To build a tool that lets ChatGPT understand and answer questions using the actual content of any URL.",
      "To learn and apply LangChain and RAG techniques in a real project.",
      "To provide an easy UI for contextual website Q&A without manual data prep.",
      "To explore how vector embeddings can enhance chatbot relevance.",
    ],
    techstack: [
      "Python",
      "Streamlit",
      "LangChain",
      "BeautifulSoup ",
      "Embeddings and Vector Database",
      "OpenAI / GPT-4",
    ],
  },
  {
    src: "/learnstack-image.jpg",
    title: "LearnStack",
    description:
      "A modular backend system for an online learning platform with user management, course delivery, enrollment and payment integration.",
    slug: "learnstack",
    githublink: "https://github.com/ShahuKor/learnstack-backend",
    status: "Completed",
    type: "Backend",
    overview:
      "LearnStack is the core backend for a learning platform (LMS) that handles user authentication, course management, enrollments, role-based access control, and multi-provider payment flows using modern web technologies.",
    tasks: [
      "Authenticate users and manage identities",
      "Create, update and retrieve courses (course delivery)",
      "Handle student enrollments and track participation",
      "Implement role-based access control (RBAC)",
      "Process payments through Stripe and Razorpay",
    ],
    reasons: [
      "To build a real-world backend for a learning platform",
      "To practice building production grade REST APIs and code with Node.js",
      "To learn how to integrate databases and payment providers",
      "To improve backend architectural skills",
    ],
    techstack: ["Node.js", "Express.js", "MongoDB", "Stripe", "Razorpay"],
  },
];
