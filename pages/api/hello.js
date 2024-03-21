// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

/**
 * Fetches user data from the specified API endpoint.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 * @throws {Error} - If the network response is not ok.
 */
const fetchUserData = async (userId) => {
  const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  return response.json();
}

export default fetchUserData;