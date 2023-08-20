# Stride: Delivery App

Faster, easier package delivery, built for and empowered by local community.

## Inspiration
We're all familiar with UberEats and DoorDash—time is a precious, precious commodity, and rapid delivery allows us to keep up with the bustle of a modern, busy world. Although food delivery receives acceleration, local parcel delivery doesn't: Canada Post doesn't offer same-day shipping, even for businesses that could be right next door to you! In practice, nearly all packages pass through distribution centers. While it is efficient for load balancing packages being shipped across long distances, it makes little sense for local delivery.

A dedicated service for local delivery would offset the heaviest load-balancing issues traditional shipping services face, while making same-day shipping much more of a commonplace. Allowing the general population to participate as couriers would give current delivery drivers, such as those for UberEats and Uber, more work opportunities during off-peak hours.

Industry giants like Amazon may have recognized the power of localized delivery, but unfortunately, such services often remain out of reach for the average business. Strides's aim is to bridge this gap, democratizing efficient and prompt local parcel delivery. There's a sharp rise in demand for faster delivery ecosystem, and our service ensures no business needs to be left behind.

## What it does

Stride is a shipping API suite and software infrastructure designed to be integrated with e-commerce enterprises. The service expedites businesses' ability to achieve high-speed local delivery, making same-day shipping for the majority a more feasible standard.

With the Stride API at the helm of the sales in an e-commerce site, determining whether a delivery should be local or long-distance becomes a seamless process. For larger retailers, at checkout, Stride pinpoints the most suitable fulfillment center for each customer's needs to ensure optimal distribution strategy. Shipping costs are calculated based on distance; shipping routes are set up as offers to drivers based on their compatibility, considering factors like vehicle size, delivery deadlines, and so on. Drivers receive and communicate information via a mobile app to pick up parcels and deliver accordingly. Customers can also choose to use the mobile app to track the courier's progress until delivery date. 

Accountability for smooth package delivery is thus attained through Stride allowing cross-communication of milestones from all three ends: the retailer, the courier, and the customer.

## How we built it

The frontend of the app, created as a progressive web app (PWA) as its first iteration, was built using React, Vite, and Typescript. The backend, powered by Node.js, utilizes Firebase to store delivery details. We leveraged Firebase's real-time database feature to provide live updates on deliveries. Google Cloud Platform APIs were implemented to calculate efficient route planning for delivery drivers and to achieve real-time package tracking.

## Challenges we ran into

The integration between frontend and backend posed challenges. The combination of using a new build tool, saving error handling and form validation to the end rather than immediately, and lack of explicit initial definition of what APIs were desired created delays. The experience spoke a lot to how a team should handle balancing allotting sufficient time to adhere to best practices while still getting things done quick. Using the Google Maps API for React for our app also introduced challenges in determining how to most optimally translate our data types to a compatible outcome. Project management-wise, selecting key parts of our scope to implement within the tight timeframe was another hurdle, necessitating frequent discussion about our goals.

## Accomplishments that we're proud of

We're proud to have built a successful app with the Google Cloud Maps Platform API, which all of our team members were new to. We're also proud about the comprehensive scale of what we've built: we translated strong design wireframes built with intentional information architecture into a concrete frontend, linked all screens to data behind the scenes, included our own graphics assets designed for this project, and successfully deployed the entire app in less than the 36 hours given! 

## What we learned

We learned more about what utilities Google Cloud APIs provide and how to implement them in full-stack applications, we honed our skills in debugging and finding alternate solutions to get over technical hurdles, and we were able to explore more effective methods of version control and collaboration across GitHub, making use of features like GitHub Projects to roadmap our tasks.

## What's next

We fleshed out, iterated, and built user flows for both delivery drivers and customers. Next steps include delving deeper into our third face: the shipment process that retailers at all scales face, from small businesses to large companies, to identify the best ways for sellers to interface with Stride's APIs. We also wanted to explore customer accounts and subscription models to further incentivize usage of local delivery, centralize all delivery needs, and introduce even more convenience to the user experience.
