export const getAllBlogs = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
};
