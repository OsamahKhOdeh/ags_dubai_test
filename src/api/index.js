import axios from "axios";
console.log("From api");
export const BASE_URL = "http://143.42.61.215:5000";
const API = axios.create({ baseURL: BASE_URL });
// http://143.42.61.215:5000/

//export const createProduct = (newProduct) => API.post("/products", newProduct);
//export const createProduct = (newProduct) => axios.post("https://server1-ustg.onrender.com/products", newProduct);
export const createProduct = (newProduct) => API.post("/products", newProduct);

export const fetchProducts = (page) => API.get(`/products?page=${page}`);

export const fetchFilteredProducts = (filters) => API.get(`/products/search?categories=${filters.categories || ""}&countries=${filters.countries || ""}&companies=${filters.companies || ""}&brands=${filters.brands || ""}&capacities=${JSON.stringify(filters.capacities) || ""}`);


export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);

export const createProformaInvoice = (newProformaInvoice) => API.post("/pi", newProformaInvoice);

export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const getLastPiNo = () => API.get("/pi/last");

export const login = ({username , password}) => API.post("/auth", {username, password});

export const uploadDatasheet = (datasheet) => API.post("/upload", datasheet);

export const fetchUsersApi = () => API.get("/users");

export const updateUser = (id, {...updatedUser}) => API.patch(`/users/${id}`, updatedUser);

export const createUser = (newUser) => API.post("/users", newUser);

export const deleteUser = (id) => API.delete(`/users/${id}`);





/*
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); 
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
*/
