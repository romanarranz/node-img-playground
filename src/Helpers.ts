// Package.
import fetch from 'node-fetch';

// Code.
export async function fetchImage(url: string) {
  return await fetch(url, { method: 'GET' });
}
