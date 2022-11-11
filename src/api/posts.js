import http from '../utils/http';

export function getPost(id) {
	return http('GET', '/post', id);
}

export function getPosts(queries) {
	return http('GET', '/post', queries);
}

export function addPost(data) {
	return http('POST', '/post');
}

export function editPost(id, data) {
	return http('PUT', `/post/${id}`, data);
}

export function deletePost(id) {
	return http('DELETE', `/post/${id}`);
}
