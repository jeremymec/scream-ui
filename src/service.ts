import MessageModel from "./models/message";

const url = process.env.API_URL!;

export async function getMessages(): Promise<MessageModel[]> {
  return fetch(url + "/post").then((res) =>
    res.json().then((data) => {
      const messageTexts = data as string[];
      return messageTexts.map((text) => {
        return {
          text: text,
        };
      });
    })
  );
}

export async function postMessage(message: MessageModel): Promise<boolean> {
  return fetch(url + "/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { post: message.text } }),
  }).then((res) => {
    return res.ok;
  });
}
