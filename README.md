

# :skateboard: Skateblog

SkateBlog is a minimalist blog site with focus on skateboarding


## Run the frontend loacaly

the getting articles data for fronted will not work localy to my knowledge, getting the data from cloudflares kv store requiers it to be built on there end.

Clone the project

```bash
  git clone https://github.com/smaristeinar/Skate-blog.git
```

Cd to the project

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start up svelte kit

```bash
  npm run dev
```
## Run the backend localy

Install [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)

Login to Wrangler 

```bash
  wrangler login
```
Go in to the backend directory and in to the worker

```bash
  cd backend/workers/skateblog
```
run wrangler localy 

```bash
  wrangler dev
```

## Tech Stack

**Frontend:** Svelt-kit

**Backend:** Cloudflare, DatoCMS

