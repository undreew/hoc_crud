import React from 'react';
import PublicPage from '../../components/Page/PublicPage';

import PostHeader from './PostHeader';
import PostsAction from './PostsAction';
import PostTable from './PostTable';
import PostsCreateModal from './PostsCreateModal';
import PostDeleteModal from './PostDeleteModal';
import PostsViewModal from './PostsViewModal';

import {withPosts, PostsContextProvider} from './PostsContext';

const PostHeaderWithPosts = withPosts(PostHeader);
const PostActionWithPosts = withPosts(PostsAction);
const PostTableWithPosts = withPosts(PostTable);
const PostViewModalWithPost = withPosts(PostsViewModal);
const PostCreateModalWithPosts = withPosts(PostsCreateModal);
const PostEditModalWithPosts = withPosts(PostsCreateModal);
const PostDeleteModalWithPosts = withPosts(PostDeleteModal);

function Index() {
	return (
		<PublicPage>
			<PostsContextProvider>
				<PostHeaderWithPosts />
				<PostActionWithPosts />
				<PostTableWithPosts />
				<PostViewModalWithPost />
				<PostCreateModalWithPosts />
				<PostEditModalWithPosts isEdit />
				<PostDeleteModalWithPosts />
			</PostsContextProvider>
		</PublicPage>
	);
}

export default Index;
