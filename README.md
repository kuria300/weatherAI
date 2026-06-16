# Weather App

A modern weather forecast application built with React, Vite, and Tailwind CSS. Get real-time weather data with AI-powered insights about current conditions.

## Features

- **Real-time Weather Data**: Fetches current weather conditions including temperature, humidity, and wind speed
- **Hourly Forecast**: Displays temperature predictions for the next 5 hours
- **Weather Icons**: Visual representation of weather conditions with day/night variants
- **AI Insights**: Intelligent summaries of current weather conditions (requires backend API)
- **Responsive Design**: Clean, modern UI that works on all devices
- **Loading States**: Smooth loading indicators while fetching data

## Tech Stack

- **Frontend**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: Tailwind CSS 4.3.1 + PostCSS
- **HTTP Client**: Axios 1.18.0
- **Icons**: Lucide React 1.18.0 + Weather Icons
- **Linting**: ESLint with React support

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd weatherapi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file for environment variables (if needed):
```bash
cp .env.example .env.local  # if an example file exists
```

## Development

### Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Lint Code
```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
weatherapi/
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   ├── components/
│   │   └── WeatherIcon.jsx  # Weather icon component
│   ├── services/
│   │   └── weather.js       # Weather API service
│   └── assets/              # Static assets
├── api/
│   └── insight.js           # Backend API for weather insights
├── public/                  # Static files
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── postcss.config.js        # PostCSS configuration
```

## Usage

The app automatically fetches weather data on load for Nairobi, Kenya coordinates (-1.2921, 36.8219). 

### Current Features:
- Displays current temperature, humidity, and wind speed
- Shows weather conditions with appropriate icons
- Displays the next 5 hours of hourly forecasts
- Generates AI-powered insights about the weather

### Customization:
To change the location, modify the coordinates in `src/App.jsx`:
```javascript
const data = await getWeather(latitude, longitude)
```

## API

### Weather Service (`/api/insight`)
The app communicates with a backend API to generate weather insights.

**Request:**
```javascript
POST /api/insight
{
  temperature: number,
  weatherCode: number,
  windSpeed: number
}
```

**Response:**
```javascript
{
  insight: string  // AI-generated insight about the weather
}
```

## Environment Setup

Create a `.env.local` file in the project root for any environment-specific configurations:
```
VITE_API_BASE_URL=http://localhost:3000
```

## Performance Optimizations

- Vite provides instant hot module replacement (HMR)
- React 19.2.6 with optimized rendering
- Tailwind CSS with PostCSS for minimal CSS output
- Axios for efficient HTTP requests

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### API Connection Issues
Ensure the backend API server is running and accessible at the configured endpoint.

### Weather Data Not Loading
Check browser console for error messages and verify:
- API endpoint is correct
- Network connectivity is available
- Coordinates are valid

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please create an issue in the repository or contact the maintainers.
