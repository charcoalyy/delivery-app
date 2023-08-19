import { get, post } from "./fetchRequests";

export const getShipping = async () => {
  const data = await get({
    url: "https://jsonplaceholder.typicode.com/comments", // TODO: replace with our API
  });
  return data;
};

interface ShippingPostProps {
  params: {
    first_name: string;
    last_name: string;
    country: string;
    province: string;
    city: string;
    address: string;
    postal_code: string;
  };
}

export const postShipping = async ({ params }: ShippingPostProps) => {
  const data = await post({
    url: "https://jsonplaceholder.typicode.com/posts", // TODO: replace with our API
    body: params,
  });

  return data;
};
