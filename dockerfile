FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --no-audit --no-fund
    
COPY . .

ENV NODE_ENV=production
RUN npm run build

# FROM node:22-alpine

# WORKDIR /app

# ENV NODE_ENV=production

# COPY --from=builder /app/package*.json ./

# RUN npm ci --omit=dev

# COPY --from=builder /app .


# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/favicon.png ./favicon.png

# COPY --from=builder /app/dist/config ./config
# COPY --from=builder /app/config/sync ./config/sync


EXPOSE 1337

CMD ["npm","run","start"]