[![Contentstack](https://camo.githubusercontent.com/d24f513afa94a4a762533d54a0f590300dbd0413/68747470733a2f2f7777772e636f6e74656e74737461636b2e636f6d2f646f63732f7374617469632f696d616765732f636f6e74656e74737461636b2e706e67)](https://www.contentstack.com/)

# Create a marketing website using Gatsby

About Contentstack: Contentstack is a headless CMS with an API-first approach that puts content at the centre. It is designed to simplify the process of publication by separating code from content.

About this project: Create professional marketing-themed website using Gatsby.

![contentstack-gatsby-starter-app](https://user-images.githubusercontent.com/41462986/107965137-26d05400-6fd0-11eb-8908-3242aee7dfc3.png)

## Live Demo

You can check the [live demo](https://gatsby-starter-app-contentstack.vercel.app/) to get first-hand experience of the website.

## Prerequisites

- Install [nodejs](https://nodejs.org/en/) on your system.
- Install Gatsby CLI.

`npm install -g gatsby-cli`

## Clone the repo

Clone the following repo. It contains all the required dependencies.

`git clone https://github.com/contentstack/gatsby-starter-contentstack.git`

## Install dependencies

Go to the gatsby-starter-contentstack folder, and run the following:

- `cd gatsby-starter-contentstack`
- `npm install`

This downloads the required files and initializes the site.

## Update Contentstack secrets

Copy the `.env.sample` file to `.env.development` and `.env.production` and update with your Contentstack details, including your API key and delivery token.

It should end up looking something like:

```
CONTENTSTACK_API_KEY='hunter2'
CONTENTSTACK_DELIVERY_TOKEN='hunter2token'
CONTENTSTACK_ENVIRONMENT='publishing environment'
CONTENTSTACK_HOSTED_URL='hosted site url'
CONTENTSTACK_CDN="optional"
```
