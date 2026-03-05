# Background Remover

A modern web application for automatically removing image backgrounds with a simple, intuitive interface. Built with Next.js, React, and powered by AI-driven background removal technology.

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/next.js-15.2.1-black)
![React](https://img.shields.io/badge/react-19.0.0-61dafb)

</div>

## ✨ Features

- 🎨 **One-Click Background Removal** - Remove image backgrounds with a single click
- 📁 **File Upload Support** - Easy image upload interface with visual preview
- ⚡ **Fast Processing** - Quick API-driven background removal
- 🎯 **100% Free** - No subscription or premium features required
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎪 **Modern UI** - Clean, professional interface with Tailwind CSS styling
- 🚀 **Performance Optimized** - Built with Next.js 15 and Turbopack for optimal performance

## 🛠️ Tech Stack

| Technology                | Purpose                                         |
| ------------------------- | ----------------------------------------------- |
| **Next.js 15.2.1**        | React framework with SSR and file-based routing |
| **React 19.0.0**          | UI library                                      |
| **Tailwind CSS 4**        | Utility-first CSS framework                     |
| **Axios 1.8.2**           | HTTP client for API requests                    |
| **react-dropzone 14.3.8** | File upload handling                            |

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- An active API endpoint for background removal processing
- Valid API credentials for the background removal service

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <www.github.com/Fa-Had/background-remover>
cd background-remover
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_HOST=<your_api_endpoint_url>
NEXT_PUBLIC_API_KEY=<your_api_key>
```

### Development

Start the development server with Turbopack for faster builds:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will automatically reload as you make changes.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout component
│   ├── page.js            # Main application page
│   └── globals.css        # Global styles
└── components/
    ├── Header.jsx         # Header with navigation and auth links
    ├── Nav.jsx            # Navigation menu
    └── Footer.jsx         # Footer with legal links

public/
├── background_remove_icon.png
├── uploadIcon.png
└── [other assets]

Configuration Files:
├── next.config.mjs        # Next.js configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── jsconfig.json          # JavaScript path aliases
```

## 🔧 Environment Variables

You must configure the following environment variables in `.env.local`:

| Variable              | Description          | Example                    |
| --------------------- | -------------------- | -------------------------- |
| `NEXT_PUBLIC_HOST`    | API endpoint URL     | `https://api.example.com/` |
| `NEXT_PUBLIC_API_KEY` | Authentication token | `Bearer your_api_key_here` |

## 📖 Usage

1. **Open the Application** - Navigate to [http://localhost:3000](http://localhost:3000)
2. **Select Image** - Click the upload area or drag and drop an image
3. **Process** - Click "Remove Background" button
4. **Download** - View and download the processed image with background removed

### API Integration

The app sends images to your configured API endpoint:

- **Endpoint**: `{NEXT_PUBLIC_HOST}remove-background/`
- **Method**: POST
- **Headers**: `Authorization: {NEXT_PUBLIC_API_KEY}`
- **Body**: FormData with image file

**Expected Response**:

```json
{
  "filename": "processed_image_filename"
}
```

The processed image is downloaded from: `{NEXT_PUBLIC_HOST}download/{filename}`

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy with one click

### Other Platforms

Works with any platform that supports Node.js:

- AWS EC2, Amplify
- Google Cloud Run
- Azure App Service
- Heroku
- Docker containers

## 📝 Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Styling

- Modify Tailwind classes in component files
- Update Tailwind configuration in `tailwind.config.mjs`
- Global styles in `src/app/globals.css`

### Components

- Header navigation can be updated in `src/components/Header.jsx`
- Customize footer links in `src/components/Footer.jsx`
- Modify main page layout in `src/app/page.js`

## 🐛 Troubleshooting

| Issue              | Solution                                                 |
| ------------------ | -------------------------------------------------------- |
| API key errors     | Verify `NEXT_PUBLIC_API_KEY` is correct in `.env.local`  |
| Image upload fails | Check API endpoint URL and network connectivity          |
| Processing timeout | Increase API timeout or check service status             |
| Build errors       | Delete `.next` folder and `node_modules`, then reinstall |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For issues or questions, please open an issue on the repository or contact the maintainers.

---

<div align="center">
Made with ❤️ using Next.js and React
</div>
