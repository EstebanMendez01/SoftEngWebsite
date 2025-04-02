import type { APIRoute } from 'astro';
import { Octokit } from '@octokit/rest';

export const GET: APIRoute = async () => {
  const octokit = new Octokit({
    auth: import.meta.env.GITHUB_TOKEN,
  });

  try {
    const { data } = await octokit.repos.listForUser({
      username: 'EstebanMendez01', // Replace this with your GitHub username
      sort: 'updated',
      per_page: 20,
      type: 'public'
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}