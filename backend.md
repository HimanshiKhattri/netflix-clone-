# netflix clone backend - todo checklist

# trending section API (First feature)

# goal:

# fetch trending movie/show cards from backend  via API

## What to do:
- [ ] Create MongoDB collection for movies (trending included)
- [ ] Build a Mongoose model: `Movie.js`
- [ ] Add a field `isTrending: true/false` in movie schema
- [ ] Create controller function: `getTrendingMovies()`
- [ ] Set up Express route: `/api/movies/trending`
- [ ] Test the route using Postman or browser
- [ ] Fetch from frontend using `fetch()`

---

## Future Features (Coming Soon)

### Movie Management
- [ ] Add new movies (admin only)
- [ ] Delete movie by ID
- [ ] Update movie info

### ❤️ Watchlist
- [ ] Create user watchlist schema
- [ ] Add/remove movies to user's watchlist
- [ ] Fetch user's watchlist

### Auth (Login/Register)
- [ ] User signup with email/password
- [ ] User login (JWT-based)
- [ ] Protect routes (auth middleware)

### Search Feature
- [ ] Search API: `/api/movies/search?q=dark`
- [ ] Support fuzzy matching and genre filtering

---

## 🚀 Deployment
- [ ] Push backend to GitHub
- [ ] Host API using Render / Railway
- [ ] Connect hosted backend to frontend

---

## Notes:
- Use `rem` on frontend for sizing
- Use `dotenv` for secrets
- Keep everything modular: models, controllers, routes

