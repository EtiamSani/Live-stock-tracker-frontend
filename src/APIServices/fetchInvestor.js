import jwt_decode from "jwt-decode";
const fetchInvestor = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }

  const decodedToken = jwt_decode(token);
  const investorId = decodedToken.data.id;

  const apiRes = await fetch(
    `https://stock-tracker-api.up.railway.app/investor/${investorId}`
  );

  if (!apiRes.ok) {
    throw new Error("fetch not ok");
  }

  return apiRes.json();
};

export default fetchInvestor;
