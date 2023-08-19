import express, { Express, Request, Response } from 'express'
import { LatLngBounds } from 'googlemaps';

const app = express();

app.use(express.static('build'));

app.get('/api/route', (req, res) => {
  const routeData = {
    origin: 'San Francisco, CA',
    destination: 'Los Angeles, CA',
    bounds: new LatLngBounds(new google.maps.LatLng(37.7749, -122.4194), new google.maps.LatLng(34.0522, -118.2437)),
  };

  res.json({ route: routeData });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
