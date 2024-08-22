type CustomOptions = RequestInit & { baseUrl?: string };

class HttpError extends Error {
  status: number;
  payload: any;
  constructor({ status, payload }: { status: number; payload: any }) {
    super();
    this.status = status;
    this.payload = payload;
  }
}

export const isClient = () => typeof window !== "undefined";

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  option?: CustomOptions | undefined
) => {
  const body = option?.body ? JSON.stringify(option.body) : undefined;
  const baseHeaders: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (isClient()) {
    const token = localStorage.getItem("token");
    if (token) {
      baseHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  const baseUrl = option?.baseUrl || process.env.NEXT_PUBLIC_API_END_POINT;

  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const response = await fetch(fullUrl, {
    headers: {
      ...baseHeaders,
      ...option?.headers,
    },
    body,
    method,
  });

  const payload: Response = await response.json();

  const data = {
    status: response.status,
    payload,
  };

  if (!response.ok) {
    throw new HttpError(data);
  }

  return data;
};

const fetcher = {
  get: <Response>(url: string, option?: Omit<CustomOptions, "body">) => request<Response>("GET", url, option),
  post: <Response>(url: string, body?: any, option?: Omit<CustomOptions, "body">) =>
    request<Response>("POST", url, { ...option, body }),
  put: <Response>(url: string, body?: any, option?: Omit<CustomOptions, "body">) =>
    request<Response>("PUT", url, { ...option, body }),
  delete: <Response>(url: string, body?: any, option?: Omit<CustomOptions, "body">) =>
    request<Response>("DELETE", url, { ...option, body }),
};

export default fetcher;
