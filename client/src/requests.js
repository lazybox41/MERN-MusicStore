import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE3YWIyMmVjZDlhODNmYzVjYzdkZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY4NDcwNDcsImV4cCI6MTY1NzEwNjI0N30.LZSrbdx0VvVHEcs1KOMkAy3rMyzrfwVntsZlpsk-dj0";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
