import React, {createContext, useContext, useState} from 'react';
import {getPosts} from '../../api/posts';
import {useAlert} from '../../context/AlertContext';

const PostsContext = createContext();

function PostsContextProvider(props) {
	const {children, search} = props;

	const {handleOk, handleError} = useAlert();

	// MODALS ONLY
	const [isViewModalOpen, setIsViewModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	// MODALS AND ITEM || ID
	const [itemToEdit, setItemToEdit] = useState({isOpen: false, item: {}});
	const [itemToDelete, setItemToDelete] = useState({isOpen: false, id: ''});

	// FETCHING STATE
	const [isLoading, setIsLoading] = useState(false);

	// SUBMITTING STATE
	const [isSubmitting, setIsSubmitting] = useState(false);

	// DATA & META
	const [data, setData] = useState([]);
	const [meta, setMeta] = useState({});

	// MODAL ACTIONS
	function toggleViewModal() {
		setIsViewModalOpen((prevValue) => !prevValue);
	}

	function toggleAddModal() {
		setIsAddModalOpen((prevValue) => !prevValue);
	}

	// ASYNC ACTIONS
	async function getDatas() {
		try {
			const {data} = await getPosts();
		} catch (error) {
			handleError(error);
		}
	}

	async function getData(id) {}
	async function createPost(data) {}
	async function editPost(id, data) {}
	async function deletePost(id) {}

	const postsContext = {};

	return (
		<PostsContext.Provider value={postsContext}>
			{children}
		</PostsContext.Provider>
	);
}

const usePosts = () => useContext(PostsContext);

export {PostsContext, PostsContextProvider, usePosts};
