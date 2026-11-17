# Gym platform: frontend

The React frontend for a gym management web app I built at university in 2024 (Faculty of Sciences of Bizerte). The Spring Boot API is in [Gym-backend](https://github.com/achref-2/Gym-backend).

**Stack:** React 18, React Router 6, Material UI, Tailwind CSS, Axios

## Pages

| Route | Page |
| --- | --- |
| `/` | Landing page |
| `/login` | Sign-in |
| `/profile/:id_cl` | Member profile, loaded from `GET /client/{id}` on the backend |

The `components/Admin/` folder has the admin screens for adding gyms and training programmes and viewing customers. Those screens call a second API on port 8080 (`/test/admin/...`) that isn't part of this repository.

## Run it locally

You need Node.js and the backend running on `http://localhost:8081`.

```bash
cd gym_test3_front-main
npm install
npm start          # http://localhost:3000
```

---

Built by Achraf Aroua · [Portfolio](https://achref-2.github.io)
