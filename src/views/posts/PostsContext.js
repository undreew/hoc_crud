import React, {
	Component,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	getPosts,
	getPost as fetchPost,
	addPost as createPost,
	editPost as updatePost,
	deletePost as removePost,
} from '../../api/posts';
import {useAlert} from '../../context/AlertContext';

const PostsContext = createContext();

function PostsContextProvider(props) {
	const {children, search} = props;

	const {handleOk, handleError} = useAlert();

	const heads = ['Title', 'Created at', 'Actions'];

	// MODALS ONLY
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	// MODALS AND ITEM || ID
	const [itemToView, setItemToView] = useState({isOpen: false, id: ''});
	const [itemToEdit, setItemToEdit] = useState({isOpen: false, id: ''});
	const [itemToDelete, setItemToDelete] = useState({isOpen: false, id: ''});

	// FETCHING STATE
	const [isLoading, setIsLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	// SUBMITTING STATE
	const [isSubmitting, setIsSubmitting] = useState(false);

	// DATA & META
	const [data, setData] = useState([]);
	const [datas, setDatas] = useState([]);
	const [meta, setMeta] = useState({});

	// MODAL ACTIONS
	function toggleViewModal() {
		setItemToView({isOpen: false, id: ''});
	}

	function toggleAddModal() {
		setIsAddModalOpen((prevValue) => !prevValue);
	}

	// ASYNC ACTIONS
	async function getDatas() {
		try {
			setIsLoading(true);

			const {data} = await getPosts();

			setDatas(data);
		} catch (error) {
			handleError(error);
		}
		setIsLoading(false);
	}

	async function viewPost(id) {
		setItemToView({isOpen: !!id, id});

		try {
			setIsFetching(true);

			const data = await fetchPost(id);

			setData(data);
		} catch (error) {
			handleError(error);
		}
		setIsFetching(false);
	}

	async function addPost(formData) {
		try {
			setIsSubmitting(true);

			const data = await createPost(formData);
			const {message} = data;

			handleOk(message);
			toggleAddModal();

			getDatas();
		} catch (error) {
			handleError(error);
		}
		setIsSubmitting(false);
	}

	async function viewPostToEdit(id) {
		setItemToEdit({isOpen: !!id, id});
		if (id) {
			try {
				setIsFetching(true);

				const data = await fetchPost(id);

				setData(data);
			} catch (error) {
				handleError(error);
			}
			setIsFetching(false);
		}
	}

	async function editPost(formData) {
		const {id} = itemToEdit;

		try {
			setIsSubmitting(true);

			const data = await updatePost(id, formData);
			const {message} = data;

			handleOk(message);
			setItemToEdit({isOpen: false, id: ''});

			getDatas();
		} catch (error) {
			handleError(error);
		}
		setIsSubmitting(false);
	}

	function toggleDeleteModal(id) {
		setItemToDelete({isOpen: !!id, id});
	}

	async function deletePost(id) {
		try {
			setIsSubmitting(true);
			const data = await removePost(id);

			handleOk(data.message);
			toggleDeleteModal();

			getDatas();
		} catch (error) {
			handleError(error);
		}
		setIsSubmitting(false);
	}

	useEffect(() => {
		getDatas();
	}, []);

	const postsContext = {
		heads,
		datas,
		data,

		isLoading,
		isFetching,
		isSubmitting,

		toggleAddModal,
		isAddModalOpen,
		onAdd: addPost,

		toggleDeleteModal,
		itemToDelete,
		onDelete: deletePost,

		toggleViewModal,
		itemToView,
		onView: viewPost,

		viewPostToEdit,
		itemToEdit,
		onEdit: editPost,
	};

	return (
		<PostsContext.Provider value={postsContext}>
			{children}
		</PostsContext.Provider>
	);
}

function withPosts(Component) {
	return (props) => {
		const states = useContext(PostsContext);

		return <Component {...props} {...states} />;
	};
}

export {PostsContext, PostsContextProvider, withPosts};
