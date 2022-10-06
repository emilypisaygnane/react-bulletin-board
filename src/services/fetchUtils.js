import { checkError, client } from './client';

export async function getPosts() {
  const response = await client
    .from('postmodern')
    .select('*');

  return checkError(response);
}

export async function createPost(email, title, description) {
  const response = await client
    .from('postmodern')
    .insert({ email, title, description });

  return checkError(response);
}
