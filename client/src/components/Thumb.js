import React, { useEffect, useState } from "react";

export default function Thumb({ file }) {
  const [thumb, setThumb] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let reader = new FileReader();
    if (!file) {
      return;
    }
    console.log(file);
    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <img
      src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={100}
      width={100}
    />
  );
}
