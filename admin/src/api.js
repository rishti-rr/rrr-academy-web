const BASE_URL = "http://localhost:5000/api";

export async function loginAdmin(credentials) {
  const response = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error("Login failed");
  return response.json();
}

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error("Fetching users failed");
  return response.json();
}

// অন্য API ফাংশন ও একইভাবে যোগ করো: fetchCourses, addCourse, updateUser ইত্যাদি
