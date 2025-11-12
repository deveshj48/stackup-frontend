const API_URL = "http://localhost:3000";

export async function getState() {
  const res = await fetch(`${API_URL}/state`);
  return res.json();

}

export async function move(direction) {
  await fetch(`${API_URL}/move`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ direction })
  });
}

export async function pickup() {
  await fetch(`${API_URL}/pickup`, { method: "POST" });
}

export async function drop() {
  await fetch(`${API_URL}/drop`, { method: "POST" });
}

export async function reset() {
  await fetch(`${API_URL}/reset`, { method: "POST" });
}