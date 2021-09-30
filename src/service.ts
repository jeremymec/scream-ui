import MessageModel from "./models/message";

// const url = process.env.API_URL!;
const url = 'http://localhost:8000';

interface MessageResponse {
  message: string,
  location: string
  createdAt: number
}

export async function getMessages(): Promise<MessageModel[]> {
  return fetch(url + "/post").then((res) =>
    res.json().then((data) => {
      const messages = data as MessageResponse[];
      return messages.map((message) => {
        return {
          text: message.message,
          location: message.location,
          timestamp: new Date(message.createdAt)
        };
      });
    })
  );
}

export async function postMessage(message: MessageModel): Promise<boolean> {
  console.log(JSON.stringify({ data: { post: message.text } }))
  return fetch(url + "/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { post: {message: message.text, location: 'New Zealand' }}}),
  }).then((res) => {
    return res.ok;
  });
}
