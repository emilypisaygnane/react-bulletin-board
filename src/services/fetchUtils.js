import { checkError, client } from './client';

export async function getPosts() {
  const response = await client
    .from('postmodern')
    .select('*');

  return checkError(response);
}

export async function getPostDetail(id) {
  const resp = await client.from('postmodern').select('*').match({ id }).single();

  return checkError(resp);
}

// should we have email included in this create post function?
export async function createPost(title, description) {
  const response = await client
    .from('postmodern')
    .insert({ title, description });

  return checkError(response);
}

export async function updatePost(id, title, description) {
  const resp = await client.from('postmodern').update({ title, description }).match({ id });

  return checkError(resp);
}
