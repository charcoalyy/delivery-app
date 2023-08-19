import { post } from "./fetchRequests";

interface ShippingPostProps {
  params: {
    country: string;
    province: string;
    city: string;
    address: string;
    postal_code: string;
  };
}

export const shippingPost = async ({ params }: ShippingPostProps) => {
  const data = await post({
    url: "https://jsonplaceholder.typicode.com/posts", // TODO: change to our API
    body: params,
  });

  return data;
};
