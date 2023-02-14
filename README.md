YouTube Tutorial on how I built this portfolio => https://youtu.be/ESHaail1eGc

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# ChatGPT <img src="https://github.com/acheong08/ChatGPT/blob/main/logo.png?raw=true" width="7%"></img>

[![PyPi](https://img.shields.io/pypi/v/revChatGPT.svg)](https://pypi.python.org/pypi/revChatGPT)
[![Downloads](https://static.pepy.tech/badge/revchatgpt)](https://pypi.python.org/pypi/revChatGPT)

Reverse Engineered ChatGPT API by OpenAI. Extensible for chatbots etc.

Connect with me on [Linkedin](https://www.linkedin.com/in/acheong08/) to support this project. (Not open for commercial opportunities yet. Too busy)
<br><br>
You can also follow me on [Twitter](https://twitter.com/GodlyIgnorance) to stay up to date.

> ## [BingGPT](https://github.com/acheong08/BingGPT) is out! It's just like ChatGPT but with live internet access. Reverse engineered from the pre-release by Microsoft.
> You need to be waitlisted by Microsoft/Bing

Discord community: https://discord.gg/WMNtbDUjUv

# V2 Fast ChatGPT API

Using cloudflare bypass server (no browser on server either). Check out the server source code: https://github.com/acheong08/ChatGPT-Proxy-V2

> ### Notices
> It seems I wasn't clear enough in my explanations and lead to some misunderstandings:
> - Your email and password are not sent to me. Authentication is done locally with https://github.com/acheong08/OpenAIAuth
>  - *Unless you use `--insecure-auth`*. This is meant for users who are blocked from accessing OpenAI websites
> - The server is open source: https://github.com/acheong08/ChatGPT-Proxy-V2 but with a `config.json` missing to avoid OpenAI detection.
> - Rate limits: 180 requests per minute (IP based)
> - I am running the server right now

> ## IMPORTANT
> You must either define `--paid` in command line or `paid=True` in code if you have a plus subscription. 

## Usage

`pip3 install --upgrade revChatGPT`

```
 $ python3 -m revChatGPT.V2 -h

        ChatGPT - A command-line interface to OpenAI's ChatGPT (https://chat.openai.com/chat)
        Repo: github.com/acheong08/ChatGPT

usage: V2.py [-h] [-e EMAIL] [-p PASSWORD] [--paid] [--proxy PROXY] [--insecure-auth]
             [--session_token SESSION_TOKEN]

options:
  -h, --help            show this help message and exit
  -e EMAIL, --email EMAIL
                        Your OpenAI email address
  -p PASSWORD, --password PASSWORD
                        Your OpenAI password
  --paid                Use the paid API
  --proxy PROXY         Use a proxy
  --insecure-auth       (Deprecated)
  --session_token SESSION_TOKEN Alternative to email and password authentication. Use this if you have Google/Microsoft account.
```

## Developers
Wiki: https://github.com/acheong08/ChatGPT/wiki/V2

Example code:
```python
from revChatGPT.V2 import Chatbot

async def main():
    chatbot = Chatbot(email="...", password="...")
    async for line in chatbot.ask("Hello"):
        print(line["choices"][0]["text"].replace("<|im_end|>", ""), end="", flush = True)
    print()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

# V1 Standard ChatGPT
> ## Under maintenance. Unavailable 

## Installation
`pip3 install revChatGPT`

## Configuration

1. Create account on [OpenAI's ChatGPT](https://chat.openai.com/)
2. Save your email and password

Required configuration:

```json
{
  "email": "<your email>",
  "password": "your password",
}
```

Optional configuration:

```json
{
  "conversation_id": "UUID...",
  "parent_id": "UUID...",
  "proxy": "...",
  "paid": false
}
```

3. Save this as `$HOME/.config/revChatGPT/config.json`

## Usage

### Command line

`python3 -m revChatGPT.V1`

```
!help - Show this message
!reset - Forget the current conversation
!refresh - Refresh the session authentication
!config - Show the current configuration
!rollback x - Rollback the conversation (x being the number of messages to rollback)
!exit - Exit this program
```

### Developer

Basic example:
```python
from revChatGPT.V1 import Chatbot

chatbot = Chatbot(config={
  "email": "<your email>",
  "password": "your password"
})

for data in chatbot.ask(
  prompt,
  conversation_id=chatbot.config.get("conversation"),
  parent_id=chatbot.config.get("parent_id"),
):
  print(data["message"], end="", flush = True)
print()
```

Refer to [wiki](https://github.com/acheong08/ChatGPT/wiki/V1) for advanced developer usage


# Awesome ChatGPT

[My list](https://github.com/stars/acheong08/lists/awesome-chatgpt)

If you have a cool project you want added to the list, open an issue.

# Disclaimers

This is not an official OpenAI product. This is a personal project and is not affiliated with OpenAI in any way. Don't sue me

# Credits

- [virtualharby](https://twitter.com/virtualharby) - Memes for emotional support
- [All contributors](https://github.com/acheong08/ChatGPT/graphs/contributors) - Pull requests