import { useEffect, useState } from "react";

const useGetUser = (serverUrl) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/admin/is-admin`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.admin) {
          setUser(data);
          setLoading(false);
          return;
        }
        setLoading(false);
        return;
      });
  }, [serverUrl]);

  return [user, loading];
};

export default useGetUser;
