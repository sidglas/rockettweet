# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Postgres Docker creation

In case of not having postgres db installed it's possible to have it on Docker.  For that just run "docker-compose up -d" and point your connection to this database.

#### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
