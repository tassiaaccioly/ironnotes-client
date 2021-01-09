import React, { useEffect } from "react";
import api from "../../../apis/pagesApi";

function PageDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deletePage() {
      try {
        await api.delete(`/pages/${id}`);
        props.history.push("/pages");
      } catch (err) {
        console.error(err);
      }
    }
    deletePage();
  }, [id, props]);

  return <div>Deleting...</div>;
}

export default PageDelete;
