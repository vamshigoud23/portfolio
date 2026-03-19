export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link: string;
  githubLink?: string;
  liveLink?: string;
  images?: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    slug: "hybrid-autoencoder-5g-performance-monitoring",
    title: "Hybrid AutoEncoder Driven ML model for Performance monitoring in 5g cellular Networks",
    description: "Developed a Hybrid Autoencoder-Driven ML Model for proactive performance monitoring in 5G cellular networks. The system utilizes a Deep AutoEncoder for feature extraction and a Random Forest classifier for predicting dropped connections with high accuracy.Designed an interactive Tkinter-based GUI for network administrators to train models, load datasets, and make real-time predictions.",
    fullDescription: "This project implements a sophisticated machine learning solution for monitoring and predicting performance issues in 5G cellular networks. The system combines deep learning and traditional ML techniques to provide real-time insights into network performance, helping administrators prevent service disruptions before they occur.",
    tags: ["Python", "Tkinter", "Machine Learning", "AutoEncoder", "Random Forest", "SQLite"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Deep AutoEncoder for intelligent feature extraction from network data",
      "Random Forest classifier for high-accuracy prediction of dropped connections",
      "Interactive Tkinter-based GUI for easy model training and real-time predictions",
      "SQLite database integration for efficient data management",
      "Real-time performance monitoring and alerting system",
      "Comprehensive visualization of network metrics and predictions"
    ],
    challenges: [
      "Handling high-dimensional network data with varying quality",
      "Optimizing model performance for real-time predictions",
      "Designing an intuitive interface for non-technical network administrators",
      "Balancing prediction accuracy with computational efficiency"
    ],
    learnings: [
      "Deep understanding of 5G network architecture and performance metrics",
      "Advanced feature engineering techniques for time-series data",
      "Hybrid model architecture design combining deep learning and traditional ML",
      "User-centered design principles for technical applications"
    ]
  },
  {
    slug: "courier-management-system",
    title: "Courier Management System",
    description: "Engineered a courier management system that enhanced delivery accuracy by 25% , Integrated GPS Tracking for real-time updates and streamlined logistics operations reducing delivery time by 15%. Built an admin dashboard to manage orders, Customers, and delivery agents efficiently.",
    fullDescription: "A comprehensive courier management platform built with Django that revolutionizes logistics operations. The system provides end-to-end tracking, real-time GPS monitoring, and intelligent routing to optimize delivery efficiency and customer satisfaction.",
    tags: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Real-time GPS tracking for all delivery vehicles",
      "Automated route optimization to reduce delivery times by 15%",
      "Comprehensive admin dashboard for order and agent management",
      "Customer portal for tracking shipments and viewing delivery status",
      "Automated notification system for delivery updates",
      "Advanced analytics and reporting for business insights",
      "Multi-role access control (Admin, Agent, Customer)"
    ],
    challenges: [
      "Implementing real-time GPS tracking with minimal latency",
      "Designing efficient database schemas for high-volume transactions",
      "Optimizing route calculations for multiple delivery points",
      "Ensuring data consistency across multiple concurrent operations"
    ],
    learnings: [
      "Django ORM mastery and database optimization techniques",
      "Real-time data synchronization with WebSockets",
      "Google Maps API integration for location-based services",
      "Scalable architecture design for logistics applications"
    ]
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts and reporting features",
    fullDescription: "A powerful analytics dashboard that transforms complex data into actionable insights through interactive visualizations. Built with React and D3.js, this platform provides real-time data analysis capabilities with customizable charts, graphs, and reporting tools.",
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Interactive data visualizations with D3.js",
      "Real-time data updates and live charts",
      "Customizable dashboard layouts with drag-and-drop",
      "Multiple chart types: line, bar, pie, scatter, and more",
      "Export functionality for reports (PDF, Excel, CSV)",
      "User-defined filters and data aggregations",
      "Responsive design for mobile and desktop"
    ],
    challenges: [
      "Handling large datasets efficiently in the browser",
      "Creating smooth animations for real-time data updates",
      "Designing intuitive interactions for complex visualizations",
      "Optimizing render performance for multiple simultaneous charts"
    ],
    learnings: [
      "Advanced D3.js techniques for custom visualizations",
      "React performance optimization with useMemo and useCallback",
      "Data aggregation and transformation strategies",
      "UX design principles for data-heavy applications"
    ]
  },
  {
    slug: "social-media-app",
    title: "Social Media App",
    description: "Mobile-first social platform with real-time messaging and media sharing",
    fullDescription: "A modern social media application built with React Native, featuring real-time messaging, media sharing, and social networking capabilities. The platform provides seamless user experience across iOS and Android devices with robust backend infrastructure.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Real-time messaging with Socket.io",
      "Photo and video sharing with cloud storage",
      "User profiles with customizable settings",
      "News feed with infinite scroll and post interactions",
      "Push notifications for new messages and interactions",
      "Friend/follower system with privacy controls",
      "Story feature with 24-hour expiration"
    ],
    challenges: [
      "Implementing efficient real-time communication at scale",
      "Managing media uploads and storage optimization",
      "Ensuring app performance on various device specifications",
      "Handling offline functionality and data synchronization"
    ],
    learnings: [
      "React Native cross-platform development best practices",
      "WebSocket implementation for real-time features",
      "Mobile app state management with Redux",
      "Cloud storage integration (AWS S3) and CDN optimization"
    ]
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description: "Content management system for portfolio websites with drag-and-drop builder",
    fullDescription: "An intuitive content management system specifically designed for portfolio websites. Features a visual drag-and-drop builder that allows users to create and customize their portfolio without writing code, while maintaining professional design standards.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Visual drag-and-drop page builder",
      "Pre-built components and templates",
      "Live preview while editing",
      "Media library with image optimization",
      "SEO optimization tools built-in",
      "Custom domain support",
      "Analytics integration",
      "Export functionality for static site generation"
    ],
    challenges: [
      "Building a flexible yet user-friendly drag-and-drop interface",
      "Ensuring generated pages are performant and SEO-friendly",
      "Managing component state in a visual editor",
      "Balancing customization freedom with design consistency"
    ],
    learnings: [
      "Next.js Server Components and App Router",
      "Prisma ORM for complex data relationships",
      "Implementing drag-and-drop with React DnD",
      "Building extensible component systems"
    ]
  },
  {
    slug: "weather-forecast-app",
    title: "Weather Forecast App",
    description: "Real-time weather application with 7-day forecasts and location tracking",
    fullDescription: "A comprehensive weather application that provides accurate real-time weather information and extended forecasts. Built with React and integrated with OpenWeather API, it offers detailed weather metrics, interactive maps, and location-based weather tracking.",
    tags: ["React", "OpenWeather API", "Charts.js"],
    link: "#",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Current weather conditions with real-time updates",
      "7-day weather forecast with hourly breakdown",
      "Geolocation support for automatic weather detection",
      "Search functionality for any location worldwide",
      "Interactive weather maps with multiple layers",
      "Weather alerts and notifications",
      "Historical weather data visualization",
      "Favorite locations management"
    ],
    challenges: [
      "Handling API rate limits and caching strategies",
      "Creating intuitive data visualizations for weather patterns",
      "Managing geolocation permissions across browsers",
      "Ensuring accurate weather data display across timezones"
    ],
    learnings: [
      "RESTful API integration and error handling",
      "Chart.js for weather data visualization",
      "Geolocation API and browser permissions",
      "Responsive design for weather displays on various screen sizes"
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
