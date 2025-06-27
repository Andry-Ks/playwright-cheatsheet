//📩 POST request - sending JSON body to create or authenticate
test('POST request - login', async ({ request }) => {
  const response = await request.post(`${backendURL}/user/login`, {
    //data - the body of the request
    data: {
      email: 'user@example.com',
      password: 'secret123',
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});

//📥 GET request - fetching resource, parameters via URL path or query
test('GET request - fetch user by ID', async ({ request }) => {
  const userId = 123;
  const response = await request.get(`${backendURL}/user/${userId}`);
  //GET has no body. The data is passed in the path (/user/123) or as query params (?limit=10)

  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  console.log(body);
});

//✏️ PUT request - full update/replacement of a resource
test('PUT request - update user profile', async ({ request }) => {
    const response = await request.put(`${backendURL}/user/123`, {
    data: {
      name: 'Updated Name',
      age: 30,
    },
  });

  expect(response.status()).toBe(200);
});

//🩹 PATCH request - partial update of a resource
test('PATCH request - update email only', async ({ request }) => {
  const response = await request.patch(`${backendURL}/user/123`, {
    data: {
      email: 'new@email.com',
    },
  });

  expect(response.status()).toBe(200);
});

//❌ DELETE request - removing a resource, may have no body or may include a body (usually without body)
test('DELETE request - remove user', async ({ request }) => {
  const response = await request.delete(`${backendURL}/user/123`);

  expect(response.status()).toBe(204); //No Content
  //If it returns 200, it often returns JSON with the result of the deletion
});

//👽 HEAD request - check if resource exists, no response body
test('HEAD request - check if resource exists', async ({ request }) => {
  const response = await request.head(`${backendURL}/user/123`);
  expect(response.status()).toBe(200);
});