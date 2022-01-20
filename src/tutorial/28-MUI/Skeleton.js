import React, { useEffect, useState } from "react";
import { Avatar, Skeleton } from "@mui/material";
const Setup = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton animation="wave" variant="circular" width={50} height={50} />
      ) : (
        <Avatar src="../../assets/default-image.jpeg" />
      )}
      <Skeleton animation="wave" variant="text" width={300} height={50} />
      <br />
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width={500}
        height={500}
      />
    </>
  );
};
export default Setup;
